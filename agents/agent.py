#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import os
import requests
import psycopg2
from pgvector.psycopg2 import register_vector
from dotenv import load_dotenv

load_dotenv()


# In[ ]:


# 1. Embed the user query using the same MiniLM model
API_URL = "https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction"
headers = {"Authorization": f"Bearer {os.environ['HUGGINGFACE_API_TOKEN']}"}
user_query = "Tell me his education?"


def embedding_agent(user_query):

    payload = {"inputs": [user_query]}
    response = requests.post(API_URL, headers=headers, json=payload)
    query_embedding = response.json()[0]

    # 2. Connect to PostgreSQL and perform similarity search
    conn = psycopg2.connect(
        dbname="vectordb",
        user="postgres",
        password="postgres",
        host="localhost",
        port=5432
    )
    cur = conn.cursor()
    register_vector(conn)

    # 3. Retrieve top 3 most similar document chunks
    cur.execute(
        "SELECT content FROM documents ORDER BY embedding <-> %s::vector LIMIT 3",
        (query_embedding,)
    )
    results = cur.fetchall()

    # 4. Print the results
    # for idx, (content,) in enumerate(results):
    #     print(f"Result {idx+1}: {content[:200]}...")  # Print first 200 chars

    cur.close()
    conn.close()

    return results


# In[ ]:


import os
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware

# Configure the Gemini client
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-flash")  # or gemini-pro, etc.

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatbotRequest(BaseModel):
    query: str
    results: List[str]

@app.post("/chatbot")
async def agent(request: ChatbotRequest):
    user_query = request.query
    results = request.results

    # This assumes you have embedding_agent defined somewhere
    embedding_query = embedding_agent(user_query)
    context_str = "\n\n".join([content for (content,) in embedding_query])

    embedding_results = []
    for result in results:
        embedding_results += embedding_agent(result)
    context_str += "\n\n".join([content for (content,) in embedding_results])

    print(f"Context:{ context_str}\n Question:{ user_query}\n ")

    prompt = f"""
Answer using context and known facts only. If uncertain, reply: 'I don't know based on the provided information.' Be concise within 30 words. Include summary or advice if relevant.
Context:
{context_str}

Question:
{user_query}

Answer:
"""

    response = model.generate_content(prompt)
    return {"response": response.text}


# In[ ]:





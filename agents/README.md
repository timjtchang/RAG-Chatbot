# Agents Server

A FastAPI-based chatbot server that uses vector embeddings and Google's Gemini AI to provide intelligent responses based on document context.

## Features

- **Vector Search**: Uses HuggingFace's sentence-transformers for semantic search
- **AI Chatbot**: Powered by Google's Gemini 2.5 Flash model
- **PostgreSQL Integration**: Stores document embeddings using pgvector
- **FastAPI Backend**: RESTful API with CORS support
- **Jupyter Notebooks**: Interactive development and data ingestion

## Prerequisites

- Python 3.11 or higher
- Poetry (Python package manager)
- PostgreSQL with pgvector extension
- API keys for Google Gemini and HuggingFace

## Installation

### 1. Install Poetry

If you don't have Poetry installed, install it first:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

### 2. Clone and Setup

```bash
git clone <your-repo-url>
cd agents
```

### 3. Install Dependencies

```bash
poetry install
```

### 4. Environment Configuration

Copy the example environment file and configure your API keys:

```bash
cp .env.example .env
```

Edit `.env` with your actual API keys:

```env
GEMINI_API_KEY="your_gemini_api_key_here"
HUGGINGFACE_API_TOKEN="your_huggingface_token_here"
LANGCHAIN_API_KEY="your_langchain_key_here"
```

### 5. Database Setup

Ensure you have PostgreSQL running with the pgvector extension. Create a database named `vectordb` and configure the connection in `agent.py` if needed.

## Usage

### Running the Server

Start the FastAPI server with hot reload:

```bash
poetry run uvicorn agent:app --reload
```

The server will be available at `http://localhost:8000`

### API Endpoints

#### POST `/chatbot`

Send a chat request with a query and optional results for context.

**Request Body:**

```json
{
  "query": "Your question here",
  "results": ["previous message 1", "previous message 2", ...]
}
```

**Response:**

```json
{
  "response": "AI-generated answer based on context"
}
```

### Jupyter Notebooks

For development and data ingestion:

```bash
# Convert notebook to Python (optional)
poetry run jupyter nbconvert --to python agent.ipynb

# Start Jupyter server
poetry run jupyter notebook
```

## Development

### Project Structure

```
agents/
├── agent.py              # Main FastAPI application
├── agent.ipynb           # Jupyter notebook for development
├── ingestion.ipynb       # Data ingestion notebook
├── pyproject.toml        # Poetry configuration
├── poetry.lock          # Locked dependencies
├── .env                 # Environment variables
├── .env.example         # Example environment file
└── sources/             # Data sources directory
```

### Key Dependencies

- **FastAPI**: Web framework for building APIs
- **Uvicorn**: ASGI server for running FastAPI
- **psycopg2**: PostgreSQL adapter
- **pgvector**: Vector similarity search
- **google-generativeai**: Google Gemini AI integration
- **requests**: HTTP library for API calls
- **python-dotenv**: Environment variable management

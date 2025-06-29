# Chatbot System

A modern, intelligent chatbot system with a FastAPI backend powered by Google Gemini AI and a React frontend with real-time chat capabilities.

## 🏗️ System Architecture

This project consists of two main components:

### 🤖 **Agents** (Backend)

- **FastAPI server** with vector search capabilities
- **Google Gemini 2.5 Flash** AI model for intelligent responses
- **PostgreSQL with pgvector** for semantic document search
- **HuggingFace sentence-transformers** for embedding generation

### 💬 **Channels** (Frontend)

- **React 18** with TypeScript for type safety
- **HeroUI** components for modern, responsive design
- **Real-time chat interface** with message persistence
- **Tailwind CSS** for styling

## 🔧 Key Features

### Agents Backend

- **Vector Search**: Semantic document retrieval using embeddings
- **Context-Aware Responses**: AI generates answers based on relevant document context
- **RESTful API**: Clean endpoints for chat interactions
- **CORS Support**: Configured for frontend integration

### Channels Frontend

- **Modern UI**: Professional chat interface with HeroUI components
- **Real-time Chat**: Interactive conversation with loading states
- **Responsive Design**: Works on desktop and mobile
- **Message Persistence**: Maintains conversation context
- **Error Handling**: Graceful error management

## 📡 API Endpoints

### POST `/chatbot`

Send chat requests with query and optional context results.

**Request:**

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

## 🗂️ Project Structure

```
chatbot/
├── agents/                 # Backend FastAPI server
│   ├── agent.py           # Main FastAPI application
│   ├── agent.ipynb        # Development notebook
│   ├── ingestion.ipynb    # Data ingestion notebook
│   ├── sources/           # Document sources
│   └── pyproject.toml     # Python dependencies
├── channels/              # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   └── App.tsx        # Main application
│   ├── package.json       # Node.js dependencies
│   └── vite.config.ts     # Build configuration
└── docs/                  # Documentation and demos
```

## 🛠️ Technology Stack

### Backend

- **FastAPI**: Modern Python web framework
- **Google Gemini 2.5 Flash**: Advanced AI language model
- **PostgreSQL + pgvector**: Vector database for semantic search
- **HuggingFace**: Sentence transformers for embeddings
- **Poetry**: Python dependency management

### Frontend

- **React 18**: Modern React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **HeroUI**: Professional UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Smooth animations

## 🎯 Use Cases

- **Document Q&A**: Ask questions about stored documents
- **Intelligent Chat**: Context-aware conversations
- **Knowledge Base**: Semantic search through documents
- **Customer Support**: Automated responses with document context

## 📖 Documentation

- [Agents README](./agents/README.md) - Detailed backend documentation
- [Channels README](./channels/README.md) - Detailed frontend documentation

---

**Note**: Make sure both the backend server (agents) and frontend (channels) are running simultaneously for full functionality.

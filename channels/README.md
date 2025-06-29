# Channels Chatbot

A modern, responsive chatbot interface built with React, TypeScript, and HeroUI. This project provides a clean and intuitive chat interface for interacting with an AI chatbot backend.

## 🚀 Features

- **Modern UI**: Built with HeroUI components for a polished, professional look
- **Real-time Chat**: Interactive chat interface with message history
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Custom Hooks**: Clean separation of concerns with React hooks
- **Message Persistence**: Maintains conversation context during the session
- **Loading States**: Visual feedback during message processing
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: HeroUI React components
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Iconify React
- **Animations**: Framer Motion
- **Package Manager**: Yarn

## 📁 Project Structure

```
channels/
├── src/
│   ├── components/
│   │   └── chat-message.tsx    # Chat message component
│   ├── hooks/
│   │   └── use-chatbot.ts      # Custom hook for chat logic
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── plugins/                   # Custom Vite plugins
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd channels
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Backend Setup

The chatbot requires a backend server running on `http://localhost:8000` with the following endpoint:

- **POST** `/chatbot`
  - **Request Body**:
    ```json
    {
      "query": "user message",
      "results": ["previous message 1", "previous message 2", ...]
    }
    ```
  - **Response**:
    ```json
    {
      "response": "bot reply message"
    }
    ```

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by modifying:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Component-specific classes in the React components

### Components

- **ChatMessage**: Displays individual chat messages with user/bot avatars
- **App**: Main application component with chat interface
- **useChatbot**: Custom hook managing chat state and API communication

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory to configure:

- Backend API URL (currently hardcoded to `http://localhost:8000`)

### Vite Configuration

The project includes custom Vite plugins for enhanced functionality. See `vite.config.ts` for configuration details.

## 🚀 Deployment

1. **Build the application**

   ```bash
   yarn build
   ```

2. **Preview the build**

   ```bash
   yarn preview
   ```

3. **Deploy the `dist` folder** to your preferred hosting service

**Note**: Make sure your backend server is running on `http://localhost:8000` before testing the chatbot functionality.

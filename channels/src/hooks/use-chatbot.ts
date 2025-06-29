import React from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useChatbot = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      text: "Hello! What would you like to know about Tim? Work, projects, school, or something else?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;

    const results = messages.map((msg) => msg.text);

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Build query with previous context if available
    let query = inputValue;

    setInputValue("");
    setIsLoading(true);

    try {
      console.log(query);
      const response = await fetch(`${BACKEND_URL}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          results: results, // Add retrieved context if you have it
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.statusText}`);
      }

      const data = await response.json();
      const botReply = data.response || "Sorry, I didn't get a response.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { text: `Error: ${error.message}`, sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, inputValue, setInputValue, sendMessage, isLoading };
};

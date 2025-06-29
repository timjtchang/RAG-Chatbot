import React from 'react';
import { Avatar } from "@heroui/react";

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`flex items-start gap-2 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <Avatar
        src={isUser ? "https://img.heroui.chat/image/avatar?w=200&h=200&u=1" : "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"}
        size="sm"
      />
      <div
        className={`px-3 py-2 rounded-lg ${
          isUser ? 'bg-primary text-primary-foreground' : 'bg-default-100'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};
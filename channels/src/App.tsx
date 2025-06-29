import React from 'react';
import { Card, Input, Button, ScrollShadow, CardHeader, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ChatMessage } from './components/chat-message';
import { useChatbot } from './hooks/use-chatbot';

export default function App() {
  const { messages, inputValue, setInputValue, sendMessage } = useChatbot();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chatbot</h2>
          <Icon icon="lucide:bot" className="text-2xl text-primary" />
        </CardHeader>
        <CardBody>
          <ScrollShadow className="h-[400px] overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </ScrollShadow>
          <div className="flex gap-2">
            <Input
              fullWidth
              placeholder="Type your message..."
              value={inputValue}
              onValueChange={setInputValue}
              onKeyPress={handleKeyPress}
            />
            <Button isIconOnly color="primary" onPress={sendMessage}>
              <Icon icon="lucide:send" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
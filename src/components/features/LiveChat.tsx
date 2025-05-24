import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import io from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'expert';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mock socket connection
    setTimeout(() => {
      setIsConnected(true);
      setMessages([
        {
          id: '1',
          text: 'Hello! How can I help you today?',
          sender: 'expert',
          timestamp: new Date()
        }
      ]);
    }, 1000);
  }, []);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Mock expert response
    setTimeout(() => {
      const expertMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. An agricultural expert will respond shortly.',
        sender: 'expert',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, expertMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="bg-primary-600 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">Live Expert Chat</h3>
        <p className="text-sm text-primary-100">
          {isConnected ? 'Connected' : 'Connecting...'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-primary-100 text-primary-900'
                  : 'bg-neutral-100 text-neutral-900'
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-neutral-500 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-neutral-500 hover:text-primary-600 transition-colors">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="p-2 text-neutral-500 hover:text-primary-600 transition-colors">
            <Mic size={20} />
          </button>
          <button
            onClick={handleSend}
            className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
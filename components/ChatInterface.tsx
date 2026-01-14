
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！解決できないことがあれば何でも聞いてください。', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiText = await getAIResponse(input);
    const aiMsg: ChatMessage = { role: 'model', text: aiText, timestamp: new Date() };
    
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-blue-600 p-4 text-white font-bold flex items-center justify-between">
        <span>🤖 AI ITアドバイザー</span>
        {isLoading && <span className="text-xs animate-pulse">考え中...</span>}
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <span className="text-[10px] opacity-60 block mt-1 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 flex gap-2 bg-gray-50">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="例：Excelが起動しない..."
          className="flex-1 bg-white text-gray-900 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

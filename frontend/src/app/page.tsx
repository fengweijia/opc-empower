'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import SocialCard from '@/components/SocialCard';

// Mock Config - In real app this would be in localStorage or Context
const AI_CONFIG = {
  provider: 'siliconflow',
  model: 'deepseek-ai/DeepSeek-V3',
  apiKey: '', // Will be set in useEffect
  apiEndpoint: 'https://api.siliconflow.cn/v1'
};

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Client-side only initialization
    const storedKey = localStorage.getItem('opc_api_key') || '';
    setApiKey(storedKey);
    AI_CONFIG.apiKey = storedKey;
    setShowSettings(!storedKey);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSaveSettings = () => {
    localStorage.setItem('opc_api_key', apiKey);
    AI_CONFIG.apiKey = apiKey;
    setShowSettings(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  const sendMessage = async (e?: React.FormEvent | Event) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!AI_CONFIG.apiKey) {
      setShowSettings(true);
      return;
    }

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMsgId, role: 'assistant', content: '', isStreaming: true }]);

    try {
      // 在发送给后端前，清洗掉历史消息中的 XML 标签，避免污染 AI 上下文
      const cleanMessages = messages.map(m => {
        let cleanContent = m.content;
        if (m.role === 'assistant') {
          // 移除 <analysis> 和 <social_card> 标签本身，但保留其中的文本内容
          cleanContent = cleanContent.replace(/<\/?analysis>/g, '');
          cleanContent = cleanContent.replace(/<\/?social_card>/g, '');
        }
        return { role: m.role, content: cleanContent.trim() };
      });

      const apiMessages = [
        ...cleanMessages,
        { role: 'user', content: userMsg.content }
      ];

      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          config: AI_CONFIG
        })
      });

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let done = false;
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.error) {
                    throw new Error(data.error);
                  }
                  if (data.content) {
                    setMessages(prev => prev.map(msg => 
                      msg.id === botMsgId ? { ...msg, content: msg.content + data.content } : msg
                    ));
                  }
                } catch {
                  // ignore JSON parse error on incomplete chunks
                }
              }
            }
          }
        }
      }
      
      // Mark as done streaming
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (error: unknown) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, content: '❌ 抱歉，生成失败: ' + errorMessage, isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  // 解析 AI 响应中的 <analysis> 和 <social_card> 标签，并进行清洗
  const renderMessageContent = (msg: Message) => {
    const content = msg.content;
    const isStreaming = !!msg.isStreaming;
    const analysisMatch = content.match(/<analysis>([\s\S]*?)(<\/analysis>|$)/);
    const cardMatch = content.match(/<social_card>([\s\S]*?)(<\/social_card>|$)/);

    const analysisContent = analysisMatch ? analysisMatch[1].trim() : '';
    let cardContent = cardMatch ? cardMatch[1].trim() : '';

    // 防呆正则清洗：抹除 AI 可能会生成的结构化前缀（达到 10 分防 Slop 标准）
    if (cardContent) {
      cardContent = cardContent
        .replace(/^(【?标题】?|\[?标题\]?|标题：|Title:)\s*/gim, '')
        .replace(/^(【?正文】?|\[?正文\]?|正文：|Body:)\s*/gim, '')
        .replace(/^(【?CTA】?|\[?CTA\]?|CTA：|行动呼吁：)\s*/gim, '')
        .replace(/^(【?痛点】?|\[?痛点\]?|痛点：)\s*/gim, '')
        .trim();
    }

    // 如果没有匹配到标签（可能还在早期流式输出中），就直接当做普通 Markdown 渲染
    if (!analysisMatch && !cardMatch) {
      return (
        <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 max-w-none text-sm">
          <ReactMarkdown>{content}</ReactMarkdown>
          {isStreaming && <span className="inline-block w-2 h-4 bg-[#00E5A0] animate-pulse ml-1 align-middle"></span>}
        </div>
      );
    }

    return (
      <div className="flex flex-col space-y-4">
        {analysisContent && (
          <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 max-w-none text-sm bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
            <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">🎯 军师洞察</div>
            <ReactMarkdown>{analysisContent}</ReactMarkdown>
            {isStreaming && !cardMatch && <span className="inline-block w-2 h-4 bg-[#00E5A0] animate-pulse ml-1 align-middle"></span>}
          </div>
        )}
        
        {(cardContent || (isStreaming && cardMatch)) && (
          <div className="mt-4">
            <SocialCard content={cardContent} />
            {isStreaming && cardMatch && !content.includes('</social_card>') && (
              <div className="text-center mt-2 text-xs text-[#00E5A0] animate-pulse">正在生成卡片内容...</div>
            )}
            
            {/* Vibe Check: 强制人工氛围检查 (10/10 Interactive Validation) */}
            {!isStreaming && content.includes('</social_card>') && (
              <div className="mt-4 flex flex-col items-center space-y-2 border-t border-gray-800 pt-4">
                <span className="text-xs text-gray-500">这张卡片的感觉对吗？</span>
                <div className="flex flex-wrap justify-center gap-2">
                  <button 
                    onClick={() => {
                      // 记录正面反馈 (MVP 暂用控制台代替)
                      console.log('Vibe Check: Passed');
                      // 也可以触发点赞动画
                    }}
                    className="px-3 py-1.5 bg-[#00E5A0]/10 text-[#00E5A0] rounded-full text-xs hover:bg-[#00E5A0]/20 transition-colors border border-[#00E5A0]/30"
                  >
                    ✅ 完美，就发这个
                  </button>
                  <button 
                    onClick={() => {
                      setInput('现在的文案太像微商了，让我觉得发朋友圈很丢人。请重新生成卡片，语气要更克制、更冷淡、甚至带点自黑。');
                      setTimeout(() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })), 100);
                    }}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors border border-gray-700"
                  >
                    📉 太像微商了，克制点
                  </button>
                  <button 
                    onClick={() => {
                      setInput('现在的文案太干瘪了，没有体现出我的技术实力。请重新生成卡片，加一点极客术语或者程序员才懂的梗。');
                      setTimeout(() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })), 100);
                    }}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors border border-gray-700"
                  >
                    🤓 太干瘪了，加点极客梗
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#1A1A2E]">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-[#00E5A0] w-6 h-6" />
          <h1 className="text-xl font-bold tracking-wide">MoneySkill</h1>
          <span className="text-xs text-gray-400 ml-2">OPC 赚钱军师 v2.0</span>
        </div>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="text-sm text-gray-400 hover:text-white"
        >
          API 设置
        </button>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="absolute top-16 right-6 bg-[#1A1A2E] p-4 rounded-lg border border-gray-700 shadow-xl z-10 w-80">
          <h3 className="text-sm font-semibold mb-3">配置 API Key (SiliconFlow)</h3>
          <input 
            type="password" 
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full bg-[#0D0D0D] border border-gray-700 rounded p-2 text-sm text-white mb-3"
          />
          <button 
            onClick={handleSaveSettings}
            className="w-full bg-[#00E5A0] text-black font-medium py-2 rounded text-sm hover:bg-[#00c488] transition-colors"
          >
            保存配置
          </button>
        </div>
      )}

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-70">
            <Sparkles className="w-12 h-12 text-[#00E5A0] mb-4" />
            <h2 className="text-2xl font-semibold">你做了一个什么东西？</h2>
            <p className="text-gray-400 max-w-md">
              直接告诉我你开发的产品或拥有的技能。<br/>我来帮你找客户、写文案、做成交流程。
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button onClick={() => setInput('我写了一个Python自动化报表脚本')} className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700">&quot;我写了一个Python自动化报表脚本&quot;</button>
              <button onClick={() => setInput('我整理了一份Notion知识库模板')} className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700">&quot;我整理了一份Notion知识库模板&quot;</button>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[95%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600 ml-3' : 'bg-[#00E5A0] text-black mr-3'}`}>
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`flex flex-col w-full ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-4 rounded-2xl w-full ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm max-w-fit' : 'bg-transparent text-gray-200'}`}>
                    {msg.role === 'assistant' ? (
                      renderMessageContent(msg)
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    )}
                  </div>
                  
                  {/* Assistant Message Actions */}
                  {msg.role === 'assistant' && !msg.isStreaming && (
                    <div className="flex items-center space-x-3 mt-2 px-4 text-gray-500">
                      <button onClick={() => handleCopy(msg.content)} className="flex items-center space-x-1 hover:text-[#00E5A0] text-xs transition-colors">
                        <Copy size={14} /> <span>复制</span>
                      </button>
                      <button className="hover:text-[#00E5A0] transition-colors"><ThumbsUp size={14} /></button>
                      <button className="hover:text-red-400 transition-colors"><ThumbsDown size={14} /></button>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </motion.div>
          ))
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-[#0D0D0D] border-t border-gray-800">
        <form onSubmit={sendMessage} className="max-w-4xl mx-auto relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="告诉我你做了什么，或者你想卖什么..."
            className="w-full bg-[#1A1A2E] border border-gray-700 text-white rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:border-[#00E5A0] focus:ring-1 focus:ring-[#00E5A0] transition-all resize-none overflow-hidden"
            rows={1}
            style={{ minHeight: '56px', maxHeight: '120px' }}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="absolute right-3 top-3.5 p-2 bg-[#00E5A0] text-black rounded-lg hover:bg-[#00c488] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
        <div className="text-center text-xs text-gray-600 mt-3">
          AI 生成的内容仅供参考，请根据实际情况调整。
        </div>
      </footer>
    </div>
  );
}

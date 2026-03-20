'use client';

import { useRef, useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';
import html2canvas from 'html2canvas';

interface SocialCardProps {
  content: string;
}

export default function SocialCard({ content }: SocialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    
    try {
      setDownloading(true);
      // html2canvas 需要等待图片和字体加载，虽然这里没有外部图片，但还是加上一个极短的延迟比较稳妥
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // 提高清晰度
        backgroundColor: '#0D0D0D', // 保持深色背景
        useCORS: true,
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `moneyskill-idea-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('生成图片失败，请重试');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4 mb-2">
      {/* 卡片主体 */}
      <div 
        ref={cardRef}
        className="relative bg-gradient-to-br from-[#1E2128] to-[#12141A] rounded-2xl p-6 border border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* 装饰性背景光晕 */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#00E5A0] rounded-full blur-[80px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-10"></div>
        
        {/* 内容区 */}
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00E5A0]"></div>
            <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Idea Pitch</span>
          </div>
          
          <div className="prose prose-invert prose-p:leading-relaxed text-gray-100 text-sm whitespace-pre-wrap">
            {content}
          </div>
        </div>

        {/* 底部品牌标 (导出时可见) */}
        <div className="relative z-10 mt-6 pt-4 border-t border-gray-800/50 flex justify-between items-center opacity-50">
          <span className="text-[10px] font-mono tracking-widest text-gray-500">POWERED BY MONEYSKILL</span>
        </div>
      </div>

      {/* 操作栏 (截图时不会包含此部分) */}
      <div className="flex items-center justify-end space-x-2 mt-3 px-2">
        <button 
          onClick={handleCopy}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-medium transition-colors"
        >
          {copied ? <Check size={14} className="text-[#00E5A0]" /> : <Copy size={14} />}
          <span>{copied ? '已复制' : '复制纯文本'}</span>
        </button>
        <button 
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#00E5A0]/10 hover:bg-[#00E5A0]/20 text-[#00E5A0] text-xs font-medium transition-colors disabled:opacity-50"
        >
          <Download size={14} />
          <span>{downloading ? '正在生成...' : '存为图片'}</span>
        </button>
      </div>
    </div>
  );
}

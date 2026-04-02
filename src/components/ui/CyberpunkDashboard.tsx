'use client';

import { useEffect, useState } from 'react';

interface DashboardProps {
  title?: string;
  data?: { label: string; value: string }[];
}

const CyberpunkDashboard = ({ title = 'SYSTEM STATUS', data = [] }: DashboardProps) => {
  const [displayedData, setDisplayedData] = useState<{ label: string; value: string }[]>([]);
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < data.length) {
        setDisplayedData((prev) => [...prev, data[index]]);
        index++;
      } else {
        setScanComplete(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="border-glow-green p-4 bg-black/50 backdrop-blur-sm font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-[#0f0] pb-2">
        <div className="matrix-text text-[#0f0] text-sm">
          {'> '} <span className="text-glitch animate-pulse">{title}</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#0f0] animate-pulse rounded-full"></div>
          <div className="w-2 h-2 bg-[#ff0033] animate-pulse rounded-full" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-[#00ffff] animate-pulse rounded-full" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Data Display */}
      <div className="space-y-2">
        {displayedData.map((item, idx) => (
          <div key={idx} className="text-xs matrix-text text-[#0f0] crt-monitor">
            <span className="text-[#ff0033]">{'>'}</span> {item.label}:{' '}
            <span className="text-[#00ffff]">{item.value}</span>
          </div>
        ))}
        {!scanComplete && displayedData.length > 0 && (
          <div className="text-xs matrix-text text-[#0f0] animate-pulse">
            <span className="text-[#ff0033]">{'>'}</span> SCANNING...
          </div>
        )}
        {scanComplete && data.length > 0 && (
          <div className="text-xs matrix-text text-[#00ffff] mt-3 pt-2 border-t border-[#0f0]/30">
            SCAN COMPLETE
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberpunkDashboard;

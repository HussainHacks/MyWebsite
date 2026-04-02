'use client';

import { useEffect, useState } from 'react';

interface TerminalLine {
  id: number;
  text: string;
  type: 'input' | 'output' | 'warning' | 'error' | 'success';
}

interface TerminalProps {
  commands?: string[];
}

const Terminal = ({ commands = ['SYSTEM INITIALIZED', 'SCANNING NETWORK...', 'ENCRYPTION ENABLED'] }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let id = 0;
    const initialLines: TerminalLine[] = commands.map((cmd) => ({
      id: id++,
      text: cmd,
      type: 'output' as const,
    }));

    setLines(initialLines);
  }, [commands]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newId = Math.max(...lines.map((l) => l.id), -1) + 1;
      setLines((prev) => [
        ...prev,
        { id: newId, text: inputValue, type: 'input' },
        { id: newId + 1, text: 'COMMAND_EXECUTED', type: 'success' },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="border-glow-cyan p-4 bg-black/60 font-mono text-xs max-w-2xl mx-auto h-48 overflow-y-auto crt-monitor">
      {lines.map((line) => (
        <div key={line.id} className="mb-1">
          <span
            className={
              line.type === 'input'
                ? 'accent-red'
                : line.type === 'warning'
                  ? 'text-yellow-400'
                  : line.type === 'error'
                    ? 'text-[#ff0033]'
                    : line.type === 'success'
                      ? 'text-[#0f0]'
                      : 'matrix-text'
            }
          >
            {line.type === 'input' ? '> ' : '$ '}
            {line.text}
          </span>
        </div>
      ))}

      {/* Input Line */}
      <div className="flex items-center mt-2">
        <span className="accent-cyan">{'> '}</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInput}
          className="flex-1 bg-transparent matrix-text text-[#0f0] outline-none ml-1 caret-[#0f0]"
          placeholder="ENTER COMMAND..."
          spellCheck="false"
        />
        <span className="animate-pulse text-[#0f0]">█</span>
      </div>
    </div>
  );
};

export default Terminal;

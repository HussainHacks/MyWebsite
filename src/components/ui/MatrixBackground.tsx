'use client';

import { useEffect, useState } from 'react';

const MatrixBackground = () => {
  const [chars, setChars] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    const matrixChars = 'ｦｧｨｩｪｫｬｭｮｯﾀﾁﾂﾃﾄﾅﾆﾇﾈﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾘﾗﾕﾔﾓﾒﾑﾐﾏﾎﾍﾌﾋﾏﾀﾈﾇﾆﾅﾄﾃﾂﾁﾀﾯﾮﾭﾬﾫﾪﾩﾨﾧﾦ0123456789[]{}()<>_+-=@#$%^&*!?;:,.';
    
    const newChars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }));

    setChars(newChars);

    const interval = setInterval(() => {
      setChars((prev) =>
        prev.map((char) => ({
          ...char,
          delay: char.delay > 15 ? Math.random() * 2 : char.delay + 0.016,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      {chars.map((char, idx) => (
        <div
          key={char.id}
          className="absolute matrix-text text-[#0f0] font-bold"
          style={{
            left: char.left,
            top: '-50px',
            fontSize: '14px',
            animation: `matrix-fall ${char.duration}s linear ${char.delay}s infinite`,
            textShadow: '0 0 10px #0f0',
          }}
        >
          {String.fromCharCode(Math.floor(Math.random() * 127) + 33)}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;

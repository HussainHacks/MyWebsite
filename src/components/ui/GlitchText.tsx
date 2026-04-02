'use client';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <span 
      className={`glitch relative inline-block ${className}`}
      data-glitch={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;

'use client';

const CyberGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f0" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="fade-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0f0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#fade-vertical)" />
      </svg>

      {/* Animated scan lines */}
      <div className="absolute inset-0 animate-pulse opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(15, 255, 0, 0.1) 25%, rgba(15, 255, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(15, 255, 0, 0.1) 75%, rgba(15, 255, 0, 0.1) 76%, transparent 77%, transparent)',
            backgroundSize: '100% 4px',
            animation: 'scan 8s linear infinite',
          }}
        />
      </div>
    </div>
  );
};

export default CyberGrid;

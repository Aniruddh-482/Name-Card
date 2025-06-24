
import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.body.style.background = isDark 
      ? 'linear-gradient(135deg, #0b0f1a 0%, #1a1f3a 100%)'
      : 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)';
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 left-4 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-cosmic-purple/50 transition-all duration-300"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {isDark ? (
          <span className="text-cosmic-cyan">🌙</span>
        ) : (
          <span className="text-yellow-500">☀️</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

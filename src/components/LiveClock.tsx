
import React, { useState, useEffect } from 'react';

const LiveClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="fixed top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-cosmic-cyan/30">
      <div className="text-xs text-gray-400">IST</div>
      <div className="text-sm font-mono text-cosmic-cyan neon-text">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default LiveClock;

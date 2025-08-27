"use client"; // This component needs to run on the client side for the time to update

import { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi'; 

export default function RealTimeClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // time upsate setInterval 
    const timerId = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formattedTime);
    }, 1000);

    
    return () => clearInterval(timerId);
  }, []);

  if (!time) {
    return null; 
  }

  return (
    <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-sm">
      <FiClock />
      <span>{time}</span>
    </div>
  );
}
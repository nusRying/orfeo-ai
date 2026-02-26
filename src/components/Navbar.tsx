'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in EST
      const estTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(`EST ${estTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-sans font-bold tracking-tighter flex items-center">
          ORFEO <span className="text-primary ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> AI
        </div>
        
        <button className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest text-white/60 hover:text-white transition-colors">
          <span className="text-lg">+</span> MENU
        </button>
      </div>

      <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
        {time}
      </div>

      <a 
        href="#consultation" 
        className="text-[10px] md:text-xs font-bold tracking-widest bg-white/5 border border-white/10 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        BOOK YOUR FREE AI CONSULTATION →
      </a>
    </header>
  );
}

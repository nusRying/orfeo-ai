'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <div className="flex items-center gap-8 lg:gap-12">
        <Link href="/" className="text-2xl font-sans font-bold tracking-tighter flex items-center text-foreground">
          ORFEO <span className="text-primary ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> AI
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-widest text-foreground/70">
          <Link href="/services" className="hover:text-primary transition-colors hover:glow">SERVICES</Link>
          <Link href="/work" className="hover:text-primary transition-colors hover:glow">WORK</Link>
          <Link href="/about" className="hover:text-primary transition-colors hover:glow">ABOUT</Link>
        </nav>
      </div>

      <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
        {time}
      </div>

      <Link 
        href="/contact" 
        className="text-[10px] md:text-xs font-bold tracking-widest bg-deep-navy border border-gray-200 text-foreground px-4 py-2.5 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
      >
        BOOK YOUR FREE AI CONSULTATION →
      </Link>
    </header>
  );
}

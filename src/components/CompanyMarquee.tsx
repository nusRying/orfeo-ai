'use client';

import React from 'react';

const companies = [
  { name: 'Slice', style: 'font-sans font-bold tracking-tight flex items-center gap-1' },
  { name: 'n·a', style: 'font-serif font-black tracking-tighter' },
  { name: 'SOMEDAY', style: 'font-sans font-black tracking-widest uppercase' },
  { name: 'Compose', style: 'font-serif font-medium tracking-tight' },
  { name: 'Accent', style: 'font-sans font-bold tracking-tight' },
  { name: 'IRENE', style: 'font-sans font-black tracking-[0.2em] uppercase' },
];

export default function CompanyMarquee() {
  // Create a base set that is definitely wider than any single screen
  const baseItems = [...companies, ...companies, ...companies, ...companies];
  // Duplicate it perfectly for the -50% transform
  const allItems = [...baseItems, ...baseItems];

  return (
    <div className="w-full relative overflow-hidden bg-white/50 backdrop-blur-sm py-16 border-y border-gray-100 flex items-center z-10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {allItems.map((company, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 mx-8 md:mx-16 text-3xl md:text-4xl lg:text-5xl text-foreground ${company.style}`}
          >
            {company.name === 'Slice' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2 md:w-8 md:h-8">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
              </svg>
            )}
            {company.name}
          </div>
        ))}
      </div>
    </div>
  );
}

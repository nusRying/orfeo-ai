'use client';

import React from 'react';

const companies = [
  { name: 'Slice', style: 'font-sans font-bold tracking-tight flex items-center gap-2' },
  { name: 'n·a', style: 'font-serif font-black tracking-tighter' },
  { name: 'SOMEDAY', style: 'font-sans font-black tracking-widest uppercase' },
  { name: 'Compose', style: 'font-serif font-medium tracking-tight' },
  { name: 'Accent', style: 'font-sans font-bold tracking-tight' },
  { name: 'IRENE', style: 'font-sans font-black tracking-[0.2em] uppercase' },
];

export default function CompanyMarquee() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-10 border-y border-black/5 bg-white/80">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            Trusted by teams building with AI
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-foreground/60">
            {companies.map((company) => (
              <div key={company.name} className={company.style}>
                {company.name === 'Slice' ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline-block"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                  </svg>
                ) : null}
                <span className="text-lg md:text-xl">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

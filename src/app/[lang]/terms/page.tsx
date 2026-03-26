'use client';

import React from 'react';
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function TermsPage() {
  const { dictionary } = useDictionary();

  const sections = [
    dictionary.terms.sections.use,
    dictionary.terms.sections.ip,
    dictionary.terms.sections.liability,
    dictionary.terms.sections.changes,
    dictionary.terms.sections.contact,
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.terms.subtitle}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.terms.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.terms.lastUpdated}
          </p>

          <div className="mt-8 surface-muted rounded-[2rem] p-6 text-sm text-foreground/70 leading-relaxed">
            {dictionary.common.note}: {dictionary.terms.legalNote}
          </div>
        </div>

        <div className="mt-14 grid gap-6">
          {sections.map((section) => (
            <section key={section.title} className="surface rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl font-serif text-foreground">{section.title}</h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base text-foreground/70">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}


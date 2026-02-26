'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/i18n/DictionaryProvider';
import Link from 'next/link';

export default function Hero() {
  const { dictionary, locale } = useDictionary();

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-[2rem] p-8 md:p-12 max-w-4xl"
        >
          <h5 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6">
            {dictionary.hero.eyebrow}
          </h5>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 max-w-3xl text-foreground">
            {dictionary.hero.headline1}<span className="text-accent underline decoration-accent/30 underline-offset-8">{dictionary.hero.headlineHighlight}</span>{dictionary.hero.headline3} <br />
            <span className="text-foreground/80">{dictionary.hero.subheadline}</span>
          </h1>
          
          <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-xl mb-12">
            {dictionary.hero.description}
          </p>
          
          <Link href={`/${locale}/contact`} className="inline-block">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="glow-btn inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-bold tracking-widest px-8 py-4 rounded-full text-xs md:text-sm uppercase transition-all duration-300 shadow-xl shadow-primary/20"
            >
              {dictionary.common.bookConsultationShort || "BOOK CONSULTATION"}
            </motion.span>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-[8px] tracking-[0.3em] text-foreground/40 uppercase">{dictionary.common.scroll}</div>
        <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-foreground/50 text-lg"
        >
            ↓
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { motion, Variants } from 'framer-motion';

export default function FaqPage() {
  const { locale, dictionary } = useDictionary();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  const faqs = [
    dictionary.faq.questions.engagement,
    dictionary.faq.questions.privateSensitive,
    dictionary.faq.questions.llmQuality,
    dictionary.faq.questions.maintainAfterLaunch,
    dictionary.faq.questions.toolsStacks,
    dictionary.faq.questions.controlCost,
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.navbar.faq}
          </motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.faq.title}
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.faq.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          {faqs.map((item) => (
            <motion.details variants={itemVars} key={item.q} className="surface rounded-[2rem] p-8 md:p-10 group">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-base font-bold text-foreground leading-snug">{item.q}</span>
                <span className="text-primary font-bold transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</div>
            </motion.details>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 surface rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
              {dictionary.faq.stillQuestions}
            </motion.div>
            <motion.div variants={itemVars} className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              {dictionary.faq.tellUseCase}
            </motion.div>
            <motion.p variants={itemVars} className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {dictionary.faq.respondRecommendations}
            </motion.p>
          </div>
          <motion.div variants={itemVars} className="flex flex-wrap gap-4">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {dictionary.common.bookConsultationShort} <ArrowIcon size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ClipboardList, FlaskConical, ShieldCheck, TrendingUp } from 'lucide-react';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  const { locale, dictionary } = useDictionary();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  const steps = [
    {
      title: dictionary.process.steps.discovery.title,
      icon: <ClipboardList className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: dictionary.process.steps.discovery.desc,
    },
    {
      title: dictionary.process.steps.prototype.title,
      icon: <FlaskConical className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: dictionary.process.steps.prototype.desc,
    },
    {
      title: dictionary.process.steps.production.title,
      icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: dictionary.process.steps.production.desc,
    },
    {
      title: dictionary.process.steps.scale.title,
      icon: <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: dictionary.process.steps.scale.desc,
    },
  ];

  const cards = [
    dictionary.process.cards.whatYouGet,
    dictionary.process.cards.qualitySafety,
    dictionary.process.cards.startingPoints,
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
            {dictionary.navbar.process}
          </motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.process.deliveryTitle}
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.process.deliveryDescription}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          {steps.map((step, idx) => (
            <motion.div variants={itemVars} key={step.title} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">
                    {dictionary.common.step} {idx + 1}
                  </div>
                  <div className="text-xl font-bold text-foreground">{step.title}</div>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 grid lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          {cards.map((card) => (
            <motion.div variants={itemVars} key={card.title} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-lg font-bold text-foreground">{card.title}</div>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              {dictionary.common.nextStep}
            </motion.div>
            <motion.div variants={itemVars} className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              {dictionary.process.pilotCTA.title}
            </motion.div>
            <motion.p variants={itemVars} className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {dictionary.process.pilotCTA.desc}
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

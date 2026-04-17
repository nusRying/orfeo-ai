'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { ArrowLeft, ArrowRight, Bot, Brain, Database, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from 'next/link';


export default function LandingSections() {
  const { dictionary, locale } = useDictionary();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const capabilities = [
    {
      title: dictionary.services.capabilities.llmRAG.title,
      description: dictionary.services.capabilities.llmRAG.desc,
      icon: <Brain className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: dictionary.services.capabilities.autonomousAgents.title,
      description: dictionary.services.capabilities.autonomousAgents.desc,
      icon: <Bot className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: dictionary.services.capabilities.dataPipelines.title,
      description: dictionary.services.capabilities.dataPipelines.desc,
      icon: <Database className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: dictionary.services.capabilities.predictiveAnalytics.title,
      description: dictionary.services.capabilities.predictiveAnalytics.desc,
      icon: <LineChart className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: dictionary.services.capabilities.securityGovernance.title,
      description: dictionary.services.capabilities.securityGovernance.desc,
      icon: <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: dictionary.services.capabilities.automation.title,
      description: dictionary.services.capabilities.automation.desc,
      icon: <Zap className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <>

      {/* Capabilities */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-2xl">

              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.services.title1}
                <span className="text-primary">{dictionary.services.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.services.description}
              </p>
            </div>
            <Link href={`/${locale}/services`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowIcon size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, i) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="surface rounded-3xl p-7"
              >
                <div className="w-10 h-10 rounded-2xl bg-deep-navy flex items-center justify-center">
                  {capability.icon}
                </div>
                <div className="mt-5 text-lg font-bold text-foreground">{capability.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{capability.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.workSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.work.title1}
                <span className="text-primary">{dictionary.work.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.work.description}
              </p>
            </div>
            <Link href={`/${locale}/work`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowIcon size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              dictionary.work.projects.logistics,
              dictionary.work.projects.auditing,
              dictionary.work.projects.triage,
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="surface rounded-3xl p-7"
              >
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-5xl font-bold text-primary leading-none">{item.metric}</div>
                    <div className="mt-2 text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{item.label}</div>
                  </div>
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/40">
                    {dictionary.work.caseStudy}
                  </div>
                </div>
                <div className="mt-6 text-xl font-bold text-foreground">{item.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.processSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.process.title1}
                <span className="text-primary">{dictionary.process.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.process.description}
              </p>
            </div>
            <Link href={`/${locale}/process`} className="btn btn-secondary">
              {dictionary.process.learnMore} <ArrowIcon size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              dictionary.process.steps.discovery,
              dictionary.process.steps.prototype,
              dictionary.process.steps.production,
              dictionary.process.steps.scale,
            ].map((step, idx) => (
              <div key={step.title} className="surface rounded-3xl p-7">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-white font-extrabold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="text-lg font-bold text-foreground">{step.title}</div>
                </div>
                <div className="mt-4 text-sm text-foreground/70 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.faqSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.faq.title}
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.faq.description}
              </p>
            </div>
            <Link href={`/${locale}/faq`} className="btn btn-secondary">
              {dictionary.faq.viewFaq} <ArrowIcon size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              dictionary.faq.questions.sideNeed,
              dictionary.faq.questions.privateData,
              dictionary.faq.questions.measureQuality,
              dictionary.faq.questions.deploymentMonitoring,
            ].map((item) => (
              <details key={item.q} className="surface rounded-3xl p-7 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base font-bold text-foreground">{item.q}</span>
                  <span className="text-primary font-bold transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 text-sm text-foreground/70 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="surface rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.cta.nextStep}
              </div>
              <div className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
                {dictionary.cta.title}
              </div>
              <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.cta.description}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {dictionary.common.bookConsultationShort} <ArrowIcon size={16} />
              </Link>
              <Link href={`/${locale}/services`} className="btn btn-secondary">
                {dictionary.services.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

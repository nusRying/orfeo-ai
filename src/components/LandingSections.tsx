'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { ArrowRight, Bot, Brain, Database, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from 'next/link';
import CompanyMarquee from './CompanyMarquee';

export default function LandingSections() {
  const { dictionary, locale } = useDictionary();

  const capabilities = [
    {
      title: "LLM Apps & RAG",
      description: "Search, chat, copilots, and knowledge systems that are accurate and explainable.",
      icon: <Brain className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Autonomous Agents",
      description: "Multi-step automation that plugs into your tools and follows your rules.",
      icon: <Bot className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Data Pipelines",
      description: "Clean ingestion, labeling, and retrieval pipelines optimized for cost and speed.",
      icon: <Database className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting and anomaly detection for operations, risk, and growth planning.",
      icon: <LineChart className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Security & Governance",
      description: "Evals, guardrails, and access control to keep AI safe in production.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Automation",
      description: "From intake to resolution—reduce manual effort with reliable workflows.",
      icon: <Zap className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <>
      <CompanyMarquee />
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
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.servicesSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.services.title1}
                <span className="text-primary">{dictionary.services.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.services.description}
              </p>
            </div>
            <Link href={`/${locale}/services`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowRight size={16} />
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
                Selected <span className="text-primary">Work</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                A snapshot of outcomes we help teams achieve with practical, well-scoped AI deployments.
              </p>
            </div>
            <Link href={`/${locale}/work`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              {
                metric: "+34%",
                label: "Efficiency increase",
                title: "Global logistics optimization",
                description: "Routing model + operations dashboard to reduce idle time and cost.",
              },
              {
                metric: "99.9%",
                label: "Anomaly detection",
                title: "Automated financial auditing",
                description: "A review assistant that flags risk patterns with traceable evidence.",
              },
              {
                metric: "-60%",
                label: "Resolution time",
                title: "Intelligent customer triage",
                description: "Agent workflow that routes, drafts, and resolves tier‑1 requests.",
              },
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
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/40">Case study</div>
                </div>
                <div className="mt-6 text-xl font-bold text-foreground">{item.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.description}</div>
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
                From idea to <span className="text-primary">production</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                A transparent delivery flow that keeps scope clear, risk controlled, and outcomes measurable.
              </p>
            </div>
            <Link href={`/${locale}/process`} className="btn btn-secondary">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "Define the use-case, success metrics, and constraints." },
              { title: "Prototype", desc: "Ship a pilot with real data and measurable signals." },
              { title: "Production", desc: "Harden with evals, guardrails, and monitoring." },
              { title: "Scale", desc: "Improve quality, cost, and adoption across teams." },
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
                Questions, answered
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                Clear expectations about timelines, data, privacy, and what you get at each step.
              </p>
            </div>
            <Link href={`/${locale}/faq`} className="btn btn-secondary">
              View FAQ <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What do you need from our side?",
                a: "A point of contact, access to relevant data sources, and a clear success metric. We handle the rest.",
              },
              {
                q: "Can you work with private data?",
                a: "Yes. We design with least-privilege access, strong isolation, and clear retention rules.",
              },
              {
                q: "How do you measure quality?",
                a: "We define eval sets and run regression tests so improvements are measurable and repeatable.",
              },
              {
                q: "Do you support deployment and monitoring?",
                a: "Yes. We ship production setups with logging, feedback loops, and cost controls.",
              },
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
                Next step
              </div>
              <div className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
                Get a focused AI plan for your team.
              </div>
              <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                Tell us what you want to improve, and we’ll propose a concrete pilot with timeline, risks, and success metrics.
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {dictionary.common.bookConsultationShort} <ArrowRight size={16} />
              </Link>
              <Link href={`/${locale}/services`} className="btn btn-secondary">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

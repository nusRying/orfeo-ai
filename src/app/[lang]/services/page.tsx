'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';
import { ArrowRight, Bot, Brain, Database, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const { dictionary, locale } = useDictionary();
  const services = [
    {
      title: "Enterprise LLM Integration",
      description: "Secure, private deployment of large language models fine-tuned on your proprietary data. Turn fragmented knowledge into actionable intelligence.",
      icon: <Brain className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: "Predictive Analytics Engine",
      description: "Machine learning models that forecast demand, identify market anomalies, and optimize resource allocation before the need arises.",
      icon: <LineChart className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: "Autonomous Agents",
      description: "Custom AI agents capable of handling complex, multi-step workflows. From customer support triage to automated data entry.",
      icon: <Bot className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: "Computer Vision Systems",
      description: "Real-time visual data processing for quality control, security monitoring, and automated spatial analysis.",
      icon: <Zap className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: "Data Architecture & Pipeline",
      description: "Building the scalable, clean data infrastructure required for high-performance AI integration. Garbage in, garbage out stops here.",
      icon: <Database className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: "AI Security & Governance",
      description: "Auditing, red-teaming, and securing AI deployments against prompt injection, data leakage, and adversarial attacks.",
      icon: <ShieldCheck className="w-8 h-8 text-primary mb-6" />
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">Services</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.services.title1}<span className="text-primary">{dictionary.services.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.services.description}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="surface rounded-3xl p-8">
              {service.icon}
              <h2 className="mt-3 text-xl font-bold text-foreground">{service.title}</h2>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 surface rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">Next step</div>
            <div className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              Start with a focused pilot.
            </div>
            <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              We’ll map the use-case, identify the right data sources, and define success metrics before writing production code.
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {dictionary.common.bookConsultationShort} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

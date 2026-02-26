'use client';

import ClientWrapper from "@/components/ClientWrapper";
import { useDictionary } from '@/i18n/DictionaryProvider';
import { Bot, LineChart, Brain, Zap, ShieldCheck, Database } from "lucide-react";

export default function ServicesPage() {
  const { dictionary } = useDictionary();
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
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8 tracking-tight">
              {dictionary.services.title1}<span className="text-primary italic">{dictionary.services.titleHighlight}</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              {dictionary.services.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl glass hover:bg-white/70 transition-all duration-300 hover:-translate-y-1"
              >
                {service.icon}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ClientWrapper>
    </main>
  );
}

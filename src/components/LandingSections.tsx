'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { Bot, LineChart, Brain, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function LandingSections() {
  const { dictionary, locale } = useDictionary();

  const services = [
    {
      title: "Enterprise LLM Integration",
      description: "Secure, private deployment of large language models optimized for your specific data ecosystem.",
      icon: <Brain className="w-6 h-6 text-primary mb-4" />
    },
    {
      title: "Predictive Analytics Engine",
      description: "Transform historical data into actionable foresight. Anticipate market shifts and customer behavior.",
      icon: <LineChart className="w-6 h-6 text-primary mb-4" />
    },
    {
      title: "Autonomous Agents",
      description: "Custom AI agents capable of handling complex, multi-step workflows.",
      icon: <Bot className="w-6 h-6 text-primary mb-4" />
    },
  ];

  return (
    <>
      <section className="py-24 px-6 md:px-12 bg-white relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-[0.3em] text-foreground/50 uppercase mb-4">{dictionary.home.servicesSubtitle}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground">
                {dictionary.services.title1}<span className="text-primary italic">{dictionary.services.titleHighlight}</span>
              </h3>
            </div>
            <Link href={`/${locale}/services`} className="group flex items-center gap-2 text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">
              {dictionary.home.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-deep-navy border border-gray-200 p-8 rounded-2xl hover:bg-gray-200 transition-colors group cursor-pointer"
              >
                {service.icon}
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-deep-navy relative z-10 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-[0.3em] text-foreground/50 uppercase mb-4">{dictionary.home.workSubtitle}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground">
                Selected <span className="text-primary italic">Work</span>
              </h3>
            </div>
            <Link href={`/${locale}/work`} className="group flex items-center gap-2 text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">
              {dictionary.home.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 p-8 rounded-3xl"
              >
                <div className="text-5xl font-bold text-primary mb-2">+34%</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest font-semibold mb-6">Efficiency Increase</div>
                <h4 className="text-2xl font-serif text-foreground mb-2">Global Logistics Optimization</h4>
                <p className="text-foreground/70 font-light">Deployed a predictive routing neural network that reduced idle times...</p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest font-semibold mb-6">Anomaly Detection Rate</div>
                <h4 className="text-2xl font-serif text-foreground mb-2">Automated Financial Auditing</h4>
                <p className="text-foreground/70 font-light">Replaced manual ledger reviews with a custom LLM pipeline...</p>
             </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

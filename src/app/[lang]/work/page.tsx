'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';
import { motion } from 'framer-motion';

export default function WorkPage() {
  const { locale, dictionary } = useDictionary();

  const projects = [
    {
      title: dictionary.work.projects.logistics.title,
      client: "TransCorp International",
      metric: dictionary.work.projects.logistics.metric,
      metricLabel: dictionary.work.efficiencyIncrease,
      description: dictionary.work.projects.logistics.desc,
      tags: [dictionary.work.tags.predictiveAnalytics, dictionary.work.tags.computerVision]
    },
    {
      title: dictionary.work.projects.auditing.title,
      client: "Apex Financial Partners",
      metric: dictionary.work.projects.auditing.metric,
      metricLabel: dictionary.work.anomalyDetectionRate,
      description: dictionary.work.projects.auditing.desc,
      tags: [dictionary.work.tags.llmIntegration, dictionary.work.tags.dataArchitecture]
    },
    {
      title: dictionary.work.projects.triage.title,
      client: "Nova Retail Group",
      metric: dictionary.work.projects.triage.metric,
      metricLabel: dictionary.work.supportResolutionTime,
      description: dictionary.work.projects.triage.desc,
      tags: [dictionary.work.tags.autonomousAgents, dictionary.work.tags.nlu]
    }
  ];

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

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.navbar.work}</motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.work.title1}
            <span className="text-primary">{dictionary.work.titleHighlight}</span>
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.work.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 space-y-6"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVars}
              key={project.title}
              className="surface rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
            >
              <div className="flex-shrink-0 w-full md:w-72">
                <div className="text-5xl md:text-6xl font-extrabold text-primary leading-none">{project.metric}</div>
                <div className="mt-2 text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                  {project.metricLabel}
                </div>
              </div>

              <div className="flex-grow">
                <div className="text-xs font-bold tracking-[0.22em] uppercase text-primary">{project.client}</div>
                <h2 className="mt-3 text-2xl md:text-3xl font-serif text-foreground">{project.title}</h2>
                <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/60 bg-deep-navy px-3 py-2 rounded-full border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

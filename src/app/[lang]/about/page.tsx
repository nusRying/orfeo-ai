'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  const { dictionary } = useDictionary();
  
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

  const team = [
    { name: "Eleanor Vance", role: dictionary.about.team.roles.ceo, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Marcus Chen", role: dictionary.about.team.roles.headOfAi, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Sophia Martinez", role: dictionary.about.team.roles.leadDataScientist, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Story */}
        <motion.section 
          className="max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.navbar.about}</motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.about.title1}<span className="text-primary">{dictionary.about.titleHighlight}</span>
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.about.description}
          </motion.p>
        </motion.section>

        <motion.section 
          className="mt-14 grid lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="surface rounded-3xl p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{dictionary.about.ourStory.title}</div>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {dictionary.about.ourStory.desc}
            </p>
          </motion.div>
          <motion.div variants={itemVars} className="surface rounded-3xl p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{dictionary.about.mission.title}</div>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {dictionary.about.mission.desc}
            </p>
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section 
          className="mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.about.values.subtitle}</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
                {dictionary.about.values.title}
              </h2>
            </div>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              dictionary.about.values.items.precision,
              dictionary.about.values.items.transparency,
              dictionary.about.values.items.impact,
            ].map((val) => (
              <motion.div variants={itemVars} key={val.title} className="surface rounded-3xl p-8">
                <h3 className="text-lg font-bold text-foreground">{val.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section 
          className="mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.about.team.subtitle}
          </motion.div>
          <motion.h2 variants={itemVars} className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
            {dictionary.about.team.title}
          </motion.h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div variants={itemVars} key={member.name} className="surface rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-square bg-deep-navy">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-lg font-bold text-foreground">{member.name}</div>
                  <div className="mt-1 text-xs font-bold tracking-[0.22em] uppercase text-primary">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}

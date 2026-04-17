'use client';

import React from 'react';
import { useDictionary } from '@/i18n/DictionaryProvider';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bot, Brain, LineChart, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { dictionary, locale } = useDictionary();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 surface-muted rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs md:text-sm font-bold tracking-[0.32em] uppercase text-foreground/70">
                {dictionary.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-[1.03] tracking-tight text-foreground">
              {dictionary.hero.headline1}
              <span className="text-primary">{dictionary.hero.headlineHighlight}</span>
              {dictionary.hero.headline3}
              <span className="block text-foreground/70 mt-4">{dictionary.hero.subheadline}</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/70 max-w-xl">
              {dictionary.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {dictionary.common.bookConsultationShort}
                <ArrowIcon size={16} />
              </Link>
              <Link href={`/${locale}/work`} className="btn btn-secondary">
                {dictionary.hero.viewWork}
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { title: dictionary.hero.fastPilots.title, desc: dictionary.hero.fastPilots.desc },
                { title: dictionary.hero.productionReady.title, desc: dictionary.hero.productionReady.desc },
                { title: dictionary.hero.clearROI.title, desc: dictionary.hero.clearROI.desc },
              ].map((item) => (
                <div key={item.title} className="surface rounded-2xl p-4">
                  <div className="text-sm font-bold text-foreground">{item.title}</div>
                  <div className="mt-1 text-xs text-foreground/60 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="surface rounded-3xl p-6 md:p-8">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/60">
                {dictionary.hero.whatWeBuild}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  {
                    title: dictionary.hero.buildItems.llmApps.title,
                    icon: <Brain className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: dictionary.hero.buildItems.llmApps.desc,
                  },
                  {
                    title: dictionary.hero.buildItems.agents.title,
                    icon: <Bot className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: dictionary.hero.buildItems.agents.desc,
                  },
                  {
                    title: dictionary.hero.buildItems.analytics.title,
                    icon: <LineChart className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: dictionary.hero.buildItems.analytics.desc,
                  },
                  {
                    title: dictionary.hero.buildItems.governance.title,
                    icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: dictionary.hero.buildItems.governance.desc,
                  },
                ].map((card) => (
                  <div key={card.title} className="surface-muted rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-black/5">
                        {card.icon}
                      </div>
                      <div className="text-sm font-bold text-foreground">{card.title}</div>
                    </div>
                    <div className="mt-3 text-xs text-foreground/60 leading-relaxed">{card.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 surface-muted rounded-2xl p-5">
                <div className="text-sm font-bold text-foreground">{dictionary.hero.engagement.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {dictionary.hero.engagement.desc}
                </div>
                <div className="mt-4">
                  <Link href={`/${locale}/process`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4">
                    {dictionary.hero.engagement.link} <ArrowIcon size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

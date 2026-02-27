'use client';

import React from 'react';
import { useDictionary } from '@/i18n/DictionaryProvider';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bot, Brain, LineChart, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { dictionary, locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 surface-muted rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.32em] uppercase text-foreground/70">
                {dictionary.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-[1.03] tracking-tight text-foreground">
              {dictionary.hero.headline1}
              <span className="text-primary">{dictionary.hero.headlineHighlight}</span>
              {dictionary.hero.headline3}
              <span className="block text-foreground/70 mt-4">{dictionary.hero.subheadline}</span>
            </h1>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/70 max-w-xl">
              {dictionary.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {dictionary.common.bookConsultationShort}
                <ArrowIcon size={16} />
              </Link>
              <Link href={`/${locale}/work`} className="btn btn-secondary">
                {t('View work', 'عرض الأعمال')}
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { title: t('Fast pilots', 'تجارب سريعة'), desc: t('Prototype and validate in weeks.', 'نموذج أولي وتحقق خلال أسابيع.') },
                { title: t('Production ready', 'جاهز للإنتاج'), desc: t('Security, evals, and monitoring.', 'أمان، تقييمات، ومراقبة.') },
                { title: t('Clear ROI', 'عائد واضح'), desc: t('Measured impact, not hype.', 'أثر مقاس، بلا مبالغة.') },
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
                {t('What we build', 'ماذا نبني')}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  {
                    title: t('LLM Apps', 'تطبيقات LLM'),
                    icon: <Brain className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: t('Chat, RAG, and copilots.', 'محادثة، RAG، ومساعدون.'),
                  },
                  {
                    title: t('Agents', 'وكلاء'),
                    icon: <Bot className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: t('Workflow automation.', 'أتمتة سير العمل.'),
                  },
                  {
                    title: t('Analytics', 'تحليلات'),
                    icon: <LineChart className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: t('Forecasting and insight.', 'تنبؤات ورؤى.'),
                  },
                  {
                    title: t('Governance', 'حوكمة'),
                    icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
                    desc: t('Safety and controls.', 'سلامة وضوابط.'),
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
                <div className="text-sm font-bold text-foreground">{t('A clear engagement', 'تعاون واضح')}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {t(
                    'Discovery → prototype → production. Designed to fit your data, team, and constraints.',
                    'اكتشاف → نموذج أولي → إنتاج. مصمم ليناسب بياناتك وفريقك وقيودك.'
                  )}
                </div>
                <div className="mt-4">
                  <Link href={`/${locale}/process`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4">
                    {t('See our process', 'اطّلع على المنهج')} <ArrowIcon size={16} />
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

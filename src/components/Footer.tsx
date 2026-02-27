'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function Footer() {
  const { locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-black/5 bg-white/95">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href={`/${locale}`}
              className="text-xl font-sans font-bold tracking-tighter text-foreground inline-flex items-center"
            >
              ORFEO <span className="text-primary ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent" /> AI
            </Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-sm leading-relaxed">
              {t(
                'Premium AI systems and automation, designed for clarity, reliability, and measurable business impact.',
                'أنظمة وأتمتة ذكاء اصطناعي متميزة، مصممة للوضوح والموثوقية وأثر أعمال قابل للقياس.'
              )}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {t('Company', 'الشركة')}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/services`}>{t('Services', 'الخدمات')}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/work`}>{t('Work', 'الأعمال')}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/process`}>{t('Process', 'المنهج')}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/about`}>{t('About', 'من نحن')}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/contact`}>{t('Contact', 'تواصل')}</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {t('Resources', 'الموارد')}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/faq`}>{t('FAQ', 'الأسئلة الشائعة')}</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {t('Legal', 'قانوني')}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/privacy`}>{t('Privacy', 'الخصوصية')}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/terms`}>{t('Terms', 'الشروط')}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-foreground/60 tracking-[0.15em] uppercase">
            {t(`© ${year} ORFEO AI. All rights reserved.`, `© ${year} ORFEO AI. جميع الحقوق محفوظة.`)}
          </div>
          <div className="text-xs text-foreground/50">
            {t('Built with Next.js • Tailwind • Three.js', 'مبني باستخدام Next.js • Tailwind • Three.js')}
          </div>
        </div>
      </div>
    </footer>
  );
}

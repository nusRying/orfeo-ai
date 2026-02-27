'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ClipboardList, FlaskConical, ShieldCheck, TrendingUp } from 'lucide-react';
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function ProcessPage() {
  const { locale, dictionary } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const steps = [
    {
      title: t('Discovery', 'الاكتشاف'),
      icon: <ClipboardList className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: t(
        'Define the use-case, success metrics, data sources, and constraints. We align on scope and risks before building.',
        'نحدد حالة الاستخدام ومقاييس النجاح ومصادر البيانات والقيود. نتفق على النطاق والمخاطر قبل البدء بالتنفيذ.'
      ),
    },
    {
      title: t('Prototype', 'النموذج الأولي'),
      icon: <FlaskConical className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: t(
        'Ship a pilot on real workflows. We validate quality, cost, and adoption signals with an evaluation baseline.',
        'ننفذ تجربة على سير عمل حقيقي. نتحقق من الجودة والتكلفة وإشارات التبنّي مع خط أساس للتقييم.'
      ),
    },
    {
      title: t('Production', 'الإطلاق'),
      icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: t(
        'Harden the system with guardrails, monitoring, and access control. Make behavior consistent and auditable.',
        'نعزز النظام بحواجز أمان ومراقبة وتحكم بالصلاحيات. نجعل السلوك ثابتًا وقابلًا للتدقيق.'
      ),
    },
    {
      title: t('Scale', 'التوسّع'),
      icon: <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />,
      desc: t(
        'Improve quality, latency, and cost over time. Add new workflows safely with regression testing and feedback loops.',
        'نحسن الجودة والسرعة والتكلفة مع الوقت. نضيف مسارات جديدة بأمان مع اختبارات تراجعية وحلقات تغذية راجعة.'
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.navbar.process}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {t('A delivery process you can trust', 'منهج تسليم يمكنك الوثوق به')}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              'A clear workflow that keeps scope tight, quality measurable, and production risk controlled.',
              'سير عمل واضح يحافظ على النطاق محددًا، والجودة قابلة للقياس، ومخاطر الإنتاج تحت السيطرة.'
            )}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">
                    {t('Step', 'الخطوة')} {idx + 1}
                  </div>
                  <div className="text-xl font-bold text-foreground">{step.title}</div>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            {
              title: t('What you get', 'ما الذي ستحصل عليه'),
              bullets: [
                t('A scoped pilot plan', 'خطة تجربة محددة النطاق'),
                t('Evaluation baseline', 'خط أساس للتقييم'),
                t('Production checklist', 'قائمة تحقق للإطلاق'),
                t('Ongoing improvement loop', 'حلقة تحسين مستمرة'),
              ],
            },
            {
              title: t('Quality & safety', 'الجودة والسلامة'),
              bullets: [
                t('Regression tests for prompts and retrieval', 'اختبارات تراجعية للمحفزات والاسترجاع'),
                t('Guardrails and access control', 'حواجز أمان وتحكم بالصلاحيات'),
                t('Monitoring and feedback capture', 'مراقبة وجمع التغذية الراجعة'),
                t('Cost controls and budgets', 'تحكم بالتكاليف وميزانيات'),
              ],
            },
            {
              title: t('Typical starting points', 'نقاط البداية الشائعة'),
              bullets: [
                t('Support and triage automation', 'أتمتة الدعم والفرز'),
                t('Internal knowledge assistant', 'مساعد معرفة داخلي'),
                t('Operational forecasting', 'تنبؤات تشغيلية'),
                t('Document processing pipelines', 'مسارات معالجة المستندات'),
              ],
            },
          ].map((card) => (
            <div key={card.title} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-lg font-bold text-foreground">{card.title}</div>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 surface rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
              {t('Next step', 'الخطوة التالية')}
            </div>
            <div className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              {t('Let’s define a pilot for your team.', 'لنحدد تجربة لفريقك.')}
            </div>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {t(
                'Share your use-case and we’ll map scope, data, and success metrics before committing to build.',
                'شارك حالة الاستخدام وسنحدد النطاق والبيانات ومقاييس النجاح قبل البدء بالتنفيذ.'
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {dictionary.common.bookConsultationShort} <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

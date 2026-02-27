'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { motion } from 'framer-motion';

export default function FaqPage() {
  const { locale, dictionary } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

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

  const faqs = [
    {
      q: t('What does a typical engagement look like?', 'كيف يبدو التعاون عادةً؟'),
      a: t(
        'We start with discovery, ship a prototype, and then harden it for production with evals, guardrails, and monitoring.',
        'نبدأ بالاكتشاف، ثم نموذج أولي، ثم نجهزه للإنتاج عبر التقييم والحواجز والمراقبة.'
      ),
    },
    {
      q: t('Can you work with private or sensitive data?', 'هل يمكنكم العمل مع بيانات خاصة أو حساسة؟'),
      a: t(
        'Yes. We follow least-privilege access, clear retention rules, and strong isolation. We can also support on-prem or VPC setups depending on your needs.',
        'نعم. نعتمد أقل صلاحيات ممكنة، وسياسات احتفاظ واضحة، وعزلًا قويًا. ويمكن دعم النشر داخل شبكتك حسب الحاجة.'
      ),
    },
    {
      q: t('How do you measure quality for LLM systems?', 'كيف تقيسون جودة أنظمة نماذج اللغة؟'),
      a: t(
        'We define evaluation datasets and run regression tests so changes are measurable and repeatable over time.',
        'نحدد مجموعات تقييم ونشغل اختبارات تراجعية ليكون التحسن قابلًا للقياس ومتكررًا.'
      ),
    },
    {
      q: t('Do you build and maintain the system after launch?', 'هل تبنون النظام وتديرونه بعد الإطلاق؟'),
      a: t(
        'Yes. We can support deployment, monitoring, and iterative improvements—or hand off to your team with documentation and training.',
        'نعم. ندعم النشر والمراقبة والتحسين المستمر، أو نسلم لفريقك مع توثيق وتدريب.'
      ),
    },
    {
      q: t('What tools and stacks do you support?', 'ما الأدوات والتقنيات التي تدعمونها؟'),
      a: t(
        'We work with modern web stacks, cloud platforms, vector databases, and LLM providers. We choose based on your constraints and security needs.',
        'نعمل مع تقنيات الويب الحديثة ومنصات السحابة وقواعد البيانات المتجهية ومزودي نماذج اللغة. نختار وفق قيودك ومتطلبات الأمان.'
      ),
    },
    {
      q: t('How do you control cost?', 'كيف تتحكمون بالتكلفة؟'),
      a: t(
        'We optimize prompts and retrieval, cache where possible, set budgets and alerts, and measure cost per successful outcome.',
        'نحسن المحفزات والاسترجاع، ونستخدم التخزين المؤقت، ونحدد ميزانيات وتنبيهات، ونقيس التكلفة مقابل النتيجة.'
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.navbar.faq}
          </motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {t('Frequently asked questions', 'الأسئلة الشائعة')}
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              'Clear answers about timelines, data, privacy, and how we ship reliable AI systems.',
              'إجابات واضحة حول المواعيد والبيانات والخصوصية وكيف نبني أنظمة ذكاء اصطناعي موثوقة.'
            )}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          {faqs.map((item) => (
            <motion.details variants={itemVars} key={item.q} className="surface rounded-[2rem] p-8 md:p-10 group">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-base font-bold text-foreground leading-snug">{item.q}</span>
                <span className="text-primary font-bold transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</div>
            </motion.details>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 surface rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVars}
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
              {t('Still have questions?', 'هل لديك أسئلة أخرى؟')}
            </motion.div>
            <motion.div variants={itemVars} className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              {t('Tell us your use-case.', 'شاركنا حالة الاستخدام.')}
            </motion.div>
            <motion.p variants={itemVars} className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {t(
                'We’ll respond with practical recommendations and a proposed pilot plan.',
                'سنرد بتوصيات عملية وخطة تجربة مقترحة.'
              )}
            </motion.p>
          </div>
          <motion.div variants={itemVars} className="flex flex-wrap gap-4">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {dictionary.common.bookConsultationShort} <ArrowIcon size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

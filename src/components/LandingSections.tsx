'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { ArrowLeft, ArrowRight, Bot, Brain, Database, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from 'next/link';
import CompanyMarquee from './CompanyMarquee';

export default function LandingSections() {
  const { dictionary, locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const capabilities = [
    {
      title: t("LLM Apps & RAG", "تطبيقات LLM وRAG"),
      description: t(
        "Search, chat, copilots, and knowledge systems that are accurate and explainable.",
        "بحث، محادثة، مساعدون، وأنظمة معرفة دقيقة وقابلة للشرح."
      ),
      icon: <Brain className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: t("Autonomous Agents", "وكلاء مستقلون"),
      description: t(
        "Multi-step automation that plugs into your tools and follows your rules.",
        "أتمتة متعددة الخطوات تتكامل مع أدواتك وتلتزم بقواعدك."
      ),
      icon: <Bot className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: t("Data Pipelines", "قنوات البيانات"),
      description: t(
        "Clean ingestion, labeling, and retrieval pipelines optimized for cost and speed.",
        "إدخال وتنظيم واسترجاع بيانات محسّن للتكلفة والسرعة."
      ),
      icon: <Database className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: t("Predictive Analytics", "تحليلات تنبؤية"),
      description: t(
        "Forecasting and anomaly detection for operations, risk, and growth planning.",
        "تنبؤات وكشف شذوذ للتشغيل والمخاطر وتخطيط النمو."
      ),
      icon: <LineChart className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: t("Security & Governance", "الأمن والحوكمة"),
      description: t(
        "Evals, guardrails, and access control to keep AI safe in production.",
        "تقييمات وحواجز أمان وتحكم بالصلاحيات لضمان سلامة الذكاء في الإنتاج."
      ),
      icon: <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: t("Automation", "الأتمتة"),
      description: t(
        "From intake to resolution—reduce manual effort with reliable workflows.",
        "من الاستلام إلى الحل—قلّل العمل اليدوي بسير عمل موثوق."
      ),
      icon: <Zap className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <>
      <CompanyMarquee />
      {/* Capabilities */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.servicesSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {dictionary.services.title1}
                <span className="text-primary">{dictionary.services.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {dictionary.services.description}
              </p>
            </div>
            <Link href={`/${locale}/services`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowIcon size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, i) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="surface rounded-3xl p-7"
              >
                <div className="w-10 h-10 rounded-2xl bg-deep-navy flex items-center justify-center">
                  {capability.icon}
                </div>
                <div className="mt-5 text-lg font-bold text-foreground">{capability.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{capability.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.workSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {locale === 'ar' ? (
                  <>
                    أعمال <span className="text-primary">مختارة</span>
                  </>
                ) : (
                  <>
                    Selected <span className="text-primary">Work</span>
                  </>
                )}
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {t(
                  'A snapshot of outcomes we help teams achieve with practical, well-scoped AI deployments.',
                  'لمحة عن النتائج التي نحققها مع فرق العمل عبر تطبيقات ذكاء اصطناعي عملية ومحددة النطاق.'
                )}
              </p>
            </div>
            <Link href={`/${locale}/work`} className="btn btn-secondary">
              {dictionary.home.viewAll} <ArrowIcon size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              {
                metric: "+34%",
                label: t("Efficiency increase", "زيادة الكفاءة"),
                title: t("Global logistics optimization", "تحسين الخدمات اللوجستية"),
                description: t(
                  "Routing model + operations dashboard to reduce idle time and cost.",
                  "نموذج توجيه ولوحة عمليات لتقليل وقت التوقف والتكلفة."
                ),
              },
              {
                metric: "99.9%",
                label: t("Anomaly detection", "كشف الشذوذ"),
                title: t("Automated financial auditing", "تدقيق مالي آلي"),
                description: t(
                  "A review assistant that flags risk patterns with traceable evidence.",
                  "مساعد مراجعة يرصد أنماط المخاطر مع أدلة قابلة للتتبع."
                ),
              },
              {
                metric: "-60%",
                label: t("Resolution time", "وقت الحل"),
                title: t("Intelligent customer triage", "فرز ذكي لطلبات العملاء"),
                description: t(
                  "Agent workflow that routes, drafts, and resolves tier‑1 requests.",
                  "سير عمل بالوكلاء يوزع الطلبات ويكتب المسودات ويحسم طلبات المستوى الأول."
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="surface rounded-3xl p-7"
              >
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-5xl font-bold text-primary leading-none">{item.metric}</div>
                    <div className="mt-2 text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{item.label}</div>
                  </div>
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/40">
                    {t('Case study', 'دراسة حالة')}
                  </div>
                </div>
                <div className="mt-6 text-xl font-bold text-foreground">{item.title}</div>
                <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.processSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {locale === 'ar' ? (
                  <>
                    من الفكرة إلى <span className="text-primary">الإنتاج</span>
                  </>
                ) : (
                  <>
                    From idea to <span className="text-primary">production</span>
                  </>
                )}
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {t(
                  'A transparent delivery flow that keeps scope clear, risk controlled, and outcomes measurable.',
                  'منهج تسليم شفاف يحافظ على وضوح النطاق، ويضبط المخاطر، ويجعل النتائج قابلة للقياس.'
                )}
              </p>
            </div>
            <Link href={`/${locale}/process`} className="btn btn-secondary">
              {t('Learn more', 'اعرف المزيد')} <ArrowIcon size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t("Discovery", "الاكتشاف"), desc: t("Define the use-case, success metrics, and constraints.", "تحديد حالة الاستخدام ومقاييس النجاح والقيود.") },
              { title: t("Prototype", "النموذج الأولي"), desc: t("Ship a pilot with real data and measurable signals.", "إطلاق تجربة ببيانات حقيقية وإشارات قابلة للقياس.") },
              { title: t("Production", "الإنتاج"), desc: t("Harden with evals, guardrails, and monitoring.", "تعزيز الجودة بالتقييمات وحواجز الأمان والمراقبة.") },
              { title: t("Scale", "التوسّع"), desc: t("Improve quality, cost, and adoption across teams.", "تحسين الجودة والتكلفة والتبنّي عبر الفرق.") },
            ].map((step, idx) => (
              <div key={step.title} className="surface rounded-3xl p-7">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-white font-extrabold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="text-lg font-bold text-foreground">{step.title}</div>
                </div>
                <div className="mt-4 text-sm text-foreground/70 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {dictionary.home.faqSubtitle}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                {t('Questions, answered', 'أسئلة وإجابات')}
              </h2>
              <p className="mt-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                {t(
                  'Clear expectations about timelines, data, privacy, and what you get at each step.',
                  'توقعات واضحة حول المواعيد والبيانات والخصوصية وما ستحصل عليه في كل خطوة.'
                )}
              </p>
            </div>
            <Link href={`/${locale}/faq`} className="btn btn-secondary">
              {t('View FAQ', 'عرض الأسئلة')} <ArrowIcon size={16} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                q: t('What do you need from our side?', 'ماذا نحتاج من جانبكم؟'),
                a: t(
                  'A point of contact, access to relevant data sources, and a clear success metric. We handle the rest.',
                  'جهة تواصل، وإتاحة مصادر البيانات ذات الصلة، ومقياس نجاح واضح. ونتولى نحن الباقي.'
                ),
              },
              {
                q: t('Can you work with private data?', 'هل يمكنكم العمل مع بيانات خاصة؟'),
                a: t(
                  'Yes. We design with least-privilege access, strong isolation, and clear retention rules.',
                  'نعم. نصمم بأقل صلاحيات ممكنة، وعزل قوي، وقواعد احتفاظ واضحة.'
                ),
              },
              {
                q: t('How do you measure quality?', 'كيف تقيسون الجودة؟'),
                a: t(
                  'We define eval sets and run regression tests so improvements are measurable and repeatable.',
                  'نحدد مجموعات تقييم ونشغّل اختبارات تراجعية لتكون التحسينات قابلة للقياس والتكرار.'
                ),
              },
              {
                q: t('Do you support deployment and monitoring?', 'هل تدعمون النشر والمراقبة؟'),
                a: t(
                  'Yes. We ship production setups with logging, feedback loops, and cost controls.',
                  'نعم. نجهز إعدادات إنتاج مع تسجيل الأحداث وحلقات تغذية راجعة وضبط للتكلفة.'
                ),
              },
            ].map((item) => (
              <details key={item.q} className="surface rounded-3xl p-7 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base font-bold text-foreground">{item.q}</span>
                  <span className="text-primary font-bold transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 text-sm text-foreground/70 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="surface rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
                {t('Next step', 'الخطوة التالية')}
              </div>
              <div className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
                {t('Get a focused AI plan for your team.', 'احصل على خطة ذكاء اصطناعي مركزة لفريقك.')}
              </div>
              <div className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                {t(
                  'Tell us what you want to improve, and we’ll propose a concrete pilot with timeline, risks, and success metrics.',
                  'اخبرنا بما تريد تحسينه، وسنقترح تجربة محددة مع جدول زمني ومخاطر ومقاييس نجاح.'
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {dictionary.common.bookConsultationShort} <ArrowIcon size={16} />
              </Link>
              <Link href={`/${locale}/services`} className="btn btn-secondary">
                {t('Explore services', 'استعرض الخدمات')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

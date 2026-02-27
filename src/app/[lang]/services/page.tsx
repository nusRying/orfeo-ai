'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';
import { ArrowLeft, ArrowRight, Bot, Brain, Database, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { dictionary, locale } = useDictionary();
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

  const services = [
    {
      title: t("Enterprise LLM Integration", "دمج نماذج اللغة للمؤسسات"),
      description: t(
        "Secure, private deployment of large language models fine-tuned on your proprietary data. Turn fragmented knowledge into actionable intelligence.",
        "نشر آمن وخاص لنماذج اللغة الكبيرة مع ضبطها على بياناتك. حوّل المعرفة المتفرقة إلى ذكاء قابل للتنفيذ."
      ),
      icon: <Brain className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: t("Predictive Analytics Engine", "محرك تحليلات تنبؤية"),
      description: t(
        "Machine learning models that forecast demand, identify market anomalies, and optimize resource allocation before the need arises.",
        "نماذج تعلم آلي تتنبأ بالطلب وتكشف الشذوذ وتحسّن توزيع الموارد قبل الحاجة."
      ),
      icon: <LineChart className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: t("Autonomous Agents", "وكلاء مستقلون"),
      description: t(
        "Custom AI agents capable of handling complex, multi-step workflows. From customer support triage to automated data entry.",
        "وكلاء مخصصون ينفذون مهام متعددة الخطوات. من فرز دعم العملاء إلى إدخال البيانات تلقائيًا."
      ),
      icon: <Bot className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: t("Computer Vision Systems", "أنظمة رؤية حاسوبية"),
      description: t(
        "Real-time visual data processing for quality control, security monitoring, and automated spatial analysis.",
        "معالجة بصرية لحظية لضبط الجودة ومراقبة الأمن والتحليل المكاني الآلي."
      ),
      icon: <Zap className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: t("Data Architecture & Pipeline", "معمارية البيانات وخطوط المعالجة"),
      description: t(
        "Building the scalable, clean data infrastructure required for high-performance AI integration. Garbage in, garbage out stops here.",
        "بناء بنية بيانات نظيفة وقابلة للتوسع لدمج ذكاء اصطناعي عالي الأداء. تنتهي مشكلة «بيانات سيئة تعني نتائج سيئة» هنا."
      ),
      icon: <Database className="w-8 h-8 text-primary mb-6" />
    },
    {
      title: t("AI Security & Governance", "أمن وحوكمة الذكاء الاصطناعي"),
      description: t(
        "Auditing, red-teaming, and securing AI deployments against prompt injection, data leakage, and adversarial attacks.",
        "تدقيق واختبارات هجومية وتأمين النشر ضد حقن الأوامر وتسريب البيانات والهجمات الخصمية."
      ),
      icon: <ShieldCheck className="w-8 h-8 text-primary mb-6" />
    }
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
          <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.navbar.services}</motion.div>
          <motion.h1 variants={itemVars} className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.services.title1}<span className="text-primary">{dictionary.services.titleHighlight}</span>
          </motion.h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.services.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          {services.map((service) => (
            <motion.div variants={itemVars} key={service.title} className="surface rounded-3xl p-8">
              {service.icon}
              <h2 className="mt-3 text-xl font-bold text-foreground">{service.title}</h2>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{service.description}</p>
            </motion.div>
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
            <motion.div variants={itemVars} className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{t('Next step', 'الخطوة التالية')}</motion.div>
            <motion.div variants={itemVars} className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
              {t('Start with a focused pilot.', 'ابدأ بتجربة مركزة.')}
            </motion.div>
            <motion.div variants={itemVars} className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {t(
                "We’ll map the use-case, identify the right data sources, and define success metrics before writing production code.",
                "سنحدد حالة الاستخدام، ومصادر البيانات المناسبة، ومقاييس النجاح قبل كتابة كود الإنتاج."
              )}
            </motion.div>
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

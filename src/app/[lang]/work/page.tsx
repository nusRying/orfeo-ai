'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';

export default function WorkPage() {
  const { locale, dictionary } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  const projects = [
    {
      title: t("Global Logistics Optimization", "تحسين الخدمات اللوجستية"),
      client: "TransCorp International",
      metric: "+34%",
      metricLabel: t("Efficiency Increase", "زيادة الكفاءة"),
      description: t(
        "Deployed a predictive routing neural network that reduced idle times and fuel consumption across a fleet of 5,000 vehicles.",
        "نشرنا نموذج توجيه تنبؤي خفّض أوقات التوقف واستهلاك الوقود عبر أسطول مكوّن من 5,000 مركبة."
      ),
      tags: [t("Predictive Analytics", "تحليلات تنبؤية"), t("Computer Vision", "رؤية حاسوبية")]
    },
    {
      title: t("Automated Financial Auditing", "تدقيق مالي آلي"),
      client: "Apex Financial Partners",
      metric: "99.9%",
      metricLabel: t("Anomaly Detection Rate", "معدل كشف الشذوذ"),
      description: t(
        "Replaced manual ledger reviews with a custom LLM pipeline capable of parsing millions of transactions in real-time to flag fraud.",
        "استبدلنا مراجعة الدفاتر اليدوية بخط معالجة يعتمد على نماذج اللغة لتحليل ملايين المعاملات لحظيًا ورصد الاحتيال."
      ),
      tags: [t("LLM Integration", "دمج نماذج اللغة"), t("Data Architecture", "معمارية البيانات")]
    },
    {
      title: t("Intelligent Customer Triage", "فرز ذكي لطلبات العملاء"),
      client: "Nova Retail Group",
      metric: "-60%",
      metricLabel: t("Support Resolution Time", "وقت حل الدعم"),
      description: t(
        "Implemented an autonomous agent system that handles 80% of tier-1 support queries without human intervention.",
        "نفذنا نظام وكلاء مستقلين يعالج 80% من استفسارات الدعم من المستوى الأول دون تدخل بشري."
      ),
      tags: [t("Autonomous Agents", "وكلاء مستقلون"), t("NLU", "فهم اللغة (NLU)")]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.navbar.work}</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {locale === 'ar' ? (
              <>
                أعمال <span className="text-primary">مختارة</span>
              </>
            ) : (
              <>
                Selected <span className="text-primary">Work</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              'We measure success by outcomes. Here are examples of how AI can improve efficiency, quality, and speed.',
              'نقيس النجاح بالنتائج. فيما يلي أمثلة على كيف يمكن للذكاء الاصطناعي تحسين الكفاءة والجودة والسرعة.'
            )}
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

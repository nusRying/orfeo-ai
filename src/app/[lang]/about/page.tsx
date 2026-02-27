'use client';

import { useDictionary } from '@/i18n/DictionaryProvider';

export default function AboutPage() {
  const { dictionary, locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const team = [
    { name: "Eleanor Vance", role: t("CEO & Founder", "المدير التنفيذي والمؤسس"), img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Marcus Chen", role: t("Head of AI Engineering", "رئيس هندسة الذكاء الاصطناعي"), img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Sophia Martinez", role: t("Lead Data Scientist", "قائد علم البيانات"), img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Story */}
        <section className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.navbar.about}</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.about.title1}<span className="text-primary">{dictionary.about.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              'We design AI systems that are understandable, testable, and built for real operations. No magic—just strong engineering and clear scope.',
              'نصمّم أنظمة ذكاء اصطناعي مفهومة وقابلة للاختبار ومبنية للعمليات الحقيقية. بلا سحر—فقط هندسة قوية ونطاق واضح.'
            )}
          </p>
        </section>

        <section className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="surface rounded-3xl p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{t('Our story', 'قصتنا')}</div>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {t(
                'Founded in 2024, ORFEO AI emerged from a simple realization: the gap between cutting-edge AI research and practical business application was too wide. We exist to bridge that gap.',
                'تأسست ORFEO AI عام 2024 انطلاقًا من إدراك بسيط: الفجوة بين أبحاث الذكاء الاصطناعي المتقدمة والتطبيق العملي في الأعمال كانت واسعة. نحن هنا لردم هذه الفجوة.'
              )}
            </p>
          </div>
          <div className="surface rounded-3xl p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{t('Our mission', 'مهمتنا')}</div>
            <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
              {t(
                "Our mission is to democratize access to enterprise-grade artificial intelligence. We believe that AI shouldn't be a black box, but a transparent, powerful lever for growth, efficiency, and human potential.",
                'مهمتنا هي إتاحة الذكاء الاصطناعي بمستوى المؤسسات للجميع. نؤمن أن الذكاء الاصطناعي لا يجب أن يكون صندوقًا أسود، بل أداة شفافة وقوية للنمو والكفاءة وإمكانات الإنسان.'
              )}
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">{dictionary.about.values}</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
                {t('Principles we ship by', 'مبادئ نعمل بها')}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: t("Precision", "الدقة"),
                desc: t("We build systems that are accurate, reliable, and rigorously tested.", "نبني أنظمة دقيقة وموثوقة ومختبرة بصرامة."),
              },
              {
                title: t("Transparency", "الشفافية"),
                desc: t("Clear explanations over jargon. We explain how models reach outcomes.", "تفسيرات واضحة بدل المصطلحات. نشرح كيف تصل النماذج إلى النتائج."),
              },
              {
                title: t("Impact", "الأثر"),
                desc: t("We measure success by measurable operational improvement and ROI.", "نقيس النجاح بتحسن تشغيلي قابل للقياس وعائد الاستثمار."),
              }
            ].map((val) => (
              <div key={val.title} className="surface rounded-3xl p-8">
                <h3 className="text-lg font-bold text-foreground">{val.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-20">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {t('Team', 'الفريق')}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground tracking-tight">
            {t('People behind the work', 'الأشخاص وراء العمل')}
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="surface rounded-3xl overflow-hidden">
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
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

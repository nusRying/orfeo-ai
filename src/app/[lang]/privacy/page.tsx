'use client';

import React from 'react';
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function PrivacyPage() {
  const { locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {t('Privacy', 'الخصوصية')}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {t('Privacy policy', 'سياسة الخصوصية')}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              'Last updated: February 26, 2026.',
              'آخر تحديث: 26 فبراير 2026.'
            )}
          </p>

          <div className="mt-8 surface-muted rounded-[2rem] p-6 text-sm text-foreground/70 leading-relaxed">
            {t(
              'Note: This page is a general template and should be reviewed by legal counsel for your specific business and jurisdiction.',
              'ملاحظة: هذه الصفحة قالب عام ويجب مراجعته من قبل مستشار قانوني بما يناسب نشاطك والولاية القضائية.'
            )}
          </div>
        </div>

        <div className="mt-14 grid gap-6">
          {[
            {
              title: t('Information we collect', 'المعلومات التي نجمعها'),
              items: [
                t('Contact details you provide (name, email, company).', 'بيانات التواصل التي تقدمها (الاسم، البريد، الشركة).'),
                t('Message content submitted via forms.', 'محتوى الرسائل المرسلة عبر النماذج.'),
                t('Basic analytics (device, pages visited) if enabled.', 'تحليلات أساسية (الجهاز، الصفحات) إذا كانت مفعلة.'),
              ],
            },
            {
              title: t('How we use information', 'كيف نستخدم المعلومات'),
              items: [
                t('To respond to inquiries and provide requested services.', 'للرد على الاستفسارات وتقديم الخدمات المطلوبة.'),
                t('To improve the website and user experience.', 'لتحسين الموقع وتجربة المستخدم.'),
                t('To maintain security and prevent abuse.', 'للحفاظ على الأمان ومنع إساءة الاستخدام.'),
              ],
            },
            {
              title: t('Sharing', 'المشاركة'),
              items: [
                t('We do not sell personal information.', 'لا نبيع المعلومات الشخصية.'),
                t('We may share with service providers (hosting, analytics) as needed to operate the site.', 'قد نشارك مع مزودي الخدمة (الاستضافة، التحليلات) لتشغيل الموقع.'),
                t('We may disclose if required by law.', 'قد نفصح إذا طلب القانون ذلك.'),
              ],
            },
            {
              title: t('Retention', 'الاحتفاظ'),
              items: [
                t('We keep data only as long as needed for the purposes above.', 'نحتفظ بالبيانات للمدة اللازمة للأغراض المذكورة.'),
                t('You can request deletion of your information.', 'يمكنك طلب حذف معلوماتك.'),
              ],
            },
            {
              title: t('Contact', 'التواصل'),
              items: [
                t('For privacy requests, email: hello@orfeo-ai.com', 'لطلبات الخصوصية: hello@orfeo-ai.com'),
              ],
            },
          ].map((section) => (
            <section key={section.title} className="surface rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl font-serif text-foreground">{section.title}</h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base text-foreground/70">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}


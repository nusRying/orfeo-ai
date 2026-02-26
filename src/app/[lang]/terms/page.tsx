'use client';

import React from 'react';
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function TermsPage() {
  const { locale } = useDictionary();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {t('Terms', 'الشروط')}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {t('Terms of service', 'شروط الخدمة')}
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
              title: t('Use of the website', 'استخدام الموقع'),
              items: [
                t('Do not misuse the site or attempt to disrupt service.', 'عدم إساءة استخدام الموقع أو محاولة تعطيله.'),
                t('Content is provided “as is” without warranties.', 'المحتوى مقدم كما هو دون ضمانات.'),
              ],
            },
            {
              title: t('Intellectual property', 'الملكية الفكرية'),
              items: [
                t('All trademarks, logos, and site content remain the property of their owners.', 'جميع العلامات والشعارات والمحتوى تعود لأصحابها.'),
                t('You may not copy or redistribute content without permission.', 'لا يجوز نسخ أو إعادة توزيع المحتوى دون إذن.'),
              ],
            },
            {
              title: t('Limitation of liability', 'تحديد المسؤولية'),
              items: [
                t('We are not liable for indirect or consequential damages arising from site use.', 'لا نتحمل المسؤولية عن الأضرار غير المباشرة الناتجة عن استخدام الموقع.'),
              ],
            },
            {
              title: t('Changes', 'التغييرات'),
              items: [
                t('We may update these terms from time to time. The updated date will be shown above.', 'قد نقوم بتحديث الشروط من وقت لآخر وسيظهر تاريخ التحديث أعلاه.'),
              ],
            },
            {
              title: t('Contact', 'التواصل'),
              items: [
                t('For questions about these terms, email: hello@orfeo-ai.com', 'للاستفسار حول الشروط: hello@orfeo-ai.com'),
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


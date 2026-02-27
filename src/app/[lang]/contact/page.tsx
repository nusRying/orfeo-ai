'use client';

import { Mail, MapPin, Phone } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function ContactPage() {
  const { locale, dictionary } = useDictionary();
  const t = (en: string, ar: string) => (locale === "ar" ? ar : en);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {t("Contact", "تواصل")}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {locale === "ar" ? (
              <>
                لنتحدث عن <span className="text-primary">الذكاء الاصطناعي</span>
              </>
            ) : (
              <>
                Let&apos;s talk <span className="text-primary">AI</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {t(
              "Share what you're trying to improve. We'll propose a concrete pilot with timeline, risks, and success metrics.",
              "شارك ما تريد تحسينه. سنقترح تجربة محددة مع جدول زمني ومخاطر ومقاييس نجاح."
            )}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <div className="surface rounded-[2rem] p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{t("Send a message", "أرسل رسالة")}</div>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
              {t("We usually reply within 1–2 business days.", "نرد عادة خلال 1–2 يوم عمل.")}
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{t("First name", "الاسم الأول")}</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder={t("John", "أحمد")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{t("Last name", "اسم العائلة")}</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder={t("Doe", "الهاشمي")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{t("Company email", "بريد العمل")}</label>
                <input
                  type="email"
                  dir="ltr"
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{t("What are you building?", "ماذا تبنون؟")}</label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  placeholder={t(
                    "Tell us about your use-case, timeline, and what success looks like...",
                    "أخبرنا عن حالة الاستخدام والجدول الزمني وما يعنيه النجاح بالنسبة لك..."
                  )}
                />
              </div>

              <button type="button" className="btn btn-primary w-full justify-center">
                {dictionary.common.sendMessage}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">{dictionary.common.directContact}</div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">{t("Email", "البريد")}</div>
                    <div className="text-base text-foreground" dir="ltr">hello@orfeo-ai.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">{t("Phone", "الهاتف")}</div>
                    <div className="text-base text-foreground" dir="ltr">+1 (800) 555-0199</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">{dictionary.common.headquarters}</div>
              <div className="mt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-base text-foreground leading-relaxed" dir="ltr">
                  100 Tech Nexus Blvd<br />
                  Suite 4400<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

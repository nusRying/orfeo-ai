'use client';

import { MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { motion, Variants } from "framer-motion";
import { getPhoneHref, getSiteAddressLines, siteConfig } from "@/lib/site-config";
import { useState } from "react";

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const { dictionary, locale } = useDictionary();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL ?? '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      // Static export: call Apps Script directly from the browser.
      // no-cors is required — Google Apps Script doesn't return CORS headers,
      // so we can't read the response, but the request still goes through.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          firstName,
          lastName,
          email,
          message,
        }),
      });

      // With no-cors we can't read the response, so we optimistically show success.
      setFormState('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };


  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">
            {dictionary.contact.subtitle}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            {dictionary.contact.title1}<span className="text-primary">{dictionary.contact.titleHighlight}</span>
          </h1>
          <motion.p variants={itemVars} className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            {dictionary.contact.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14"
          initial="hidden"
          animate="show"
          variants={containerVars}
        >
          {/* Contact Form */}
          <motion.div variants={itemVars} className="surface rounded-[2rem] p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">{dictionary.contact.sendMessage.title}</div>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
              {dictionary.contact.sendMessage.desc}
            </p>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground">{dictionary.contact.success.title}</div>
                <p className="text-sm text-foreground/60">{dictionary.contact.success.desc}</p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="mt-2 text-xs font-bold tracking-widest uppercase text-primary hover:underline"
                >
                  {dictionary.contact.success.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.firstName}</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder={dictionary.contact.form.firstNamePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.lastName}</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder={dictionary.contact.form.lastNamePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.companyEmail}</label>
                  <input
                    type="email"
                    required
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder="hello@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.whatBuilding}</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    placeholder={dictionary.contact.form.whatBuildingPlaceholder}
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-sm text-red-500">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {dictionary.contact.sending}
                    </span>
                  ) : (
                    dictionary.common.sendMessage
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div variants={itemVars} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">{dictionary.common.directContact}</div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">{dictionary.common.phone}</div>
                    <a className="text-base text-foreground hover:text-primary transition-colors" dir="ltr" href={getPhoneHref()}>
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVars} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">{dictionary.common.headquarters}</div>
              <div className="mt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-base text-foreground leading-relaxed" dir="ltr">
                  {getSiteAddressLines(locale).map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

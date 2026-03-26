'use client';

import { Mail, MapPin, Phone } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { locale, dictionary } = useDictionary();

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

            <form className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.firstName}</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder={dictionary.contact.form.firstNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.lastName}</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder={dictionary.contact.form.lastNamePlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.companyEmail}</label>
                <input
                  type="email"
                  dir="ltr"
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="hello@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">{dictionary.contact.form.whatBuilding}</label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  placeholder={dictionary.contact.form.whatBuildingPlaceholder}
                />
              </div>

              <button type="button" className="btn btn-primary w-full justify-center">
                {dictionary.common.sendMessage}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div variants={itemVars} className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">{dictionary.common.directContact}</div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">{dictionary.common.email}</div>
                    <div className="text-base text-foreground" dir="ltr">hello@orfeo-ai.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">{dictionary.common.phone}</div>
                    <div className="text-base text-foreground" dir="ltr">+1 (800) 555-0199</div>
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
                  100 Tech Nexus Blvd<br />
                  Suite 4400<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

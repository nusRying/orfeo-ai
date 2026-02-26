'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [time, setTime] = useState('');
  const { dictionary, locale } = useDictionary();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in EST
      const estTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(`EST ${estTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  };

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    localStorage.setItem('locale', newLocale);
  };

  const navItems = useMemo(
    () => [
      { href: `/${locale}/services`, label: dictionary.navbar.services },
      { href: `/${locale}/work`, label: dictionary.navbar.work },
      { href: `/${locale}/process`, label: dictionary.navbar.process },
      { href: `/${locale}/about`, label: dictionary.navbar.about },
      { href: `/${locale}/faq`, label: dictionary.navbar.faq },
    ],
    [dictionary, locale]
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-black/5 bg-white/95">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href={`/${locale}`} className="text-xl md:text-2xl font-sans font-bold tracking-tighter flex items-center text-foreground">
            ORFEO <span className="text-primary ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> AI
          </Link>
          
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest text-foreground/70">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-[3px] left-0 h-[2px] w-full bg-primary transition-opacity",
                      active ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href={toggleLanguage()} 
            onClick={handleLanguageChange}
            className="text-[10px] md:text-xs font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors"
          >
            {locale === 'en' ? 'عربي' : 'EN'}
          </Link>
          <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
            {time}
          </div>

          <Link 
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex btn btn-secondary"
          >
            {dictionary.common.bookConsultationShort}
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white text-foreground"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-black/30"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[320px] bg-white border-l border-black/10 p-6 flex flex-col"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="text-sm font-bold tracking-widest">MENU</div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white text-foreground"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "surface rounded-2xl px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-colors hover:border-primary/40",
                        active && "border-primary/60"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="btn btn-primary w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {dictionary.common.bookConsultationShort}
                </Link>
                <Link
                  href={toggleLanguage()}
                  onClick={() => {
                    handleLanguageChange();
                    setMenuOpen(false);
                  }}
                  className="btn btn-secondary w-full"
                >
                  {locale === 'en' ? 'عربي' : 'English'}
                </Link>
              </div>

              <div className="mt-auto pt-8 text-[10px] font-mono tracking-[0.2em] text-foreground/50 uppercase">
                {time}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

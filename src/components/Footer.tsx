'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/i18n/DictionaryProvider';
import Image from 'next/image';
import { getPublicAssetPath, getSiteLogoAlt, getSiteName, siteConfig } from '@/lib/site-config';

export default function Footer() {
  const { dictionary, locale } = useDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-black/5 bg-white/95">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 group"
            >
              <Image 
                src={getPublicAssetPath(siteConfig.logoPath)}
                alt={getSiteLogoAlt(locale)}
                width={24}
                height={24}
                className="h-6 w-auto transition-transform group-hover:scale-105" 
              />
              <span className="text-xl font-sans font-bold tracking-tighter text-foreground">
                {getSiteName(locale)}
                <span className="text-primary ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
            </Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-sm leading-relaxed">
              {dictionary.footer.description}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {dictionary.footer.company}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/services`}>{dictionary.navbar.services}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/work`}>{dictionary.navbar.work}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/process`}>{dictionary.navbar.process}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/about`}>{dictionary.navbar.about}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/contact`}>{dictionary.footer.contact}</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {dictionary.footer.resources}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/faq`}>{dictionary.navbar.faq}</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                {dictionary.footer.legal}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
                <Link className="hover:text-primary transition-colors" href={`/${locale}/privacy`}>{dictionary.footer.privacy}</Link>
                <Link className="hover:text-primary transition-colors" href={`/${locale}/terms`}>{dictionary.footer.terms}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-foreground/60 tracking-[0.15em] uppercase">
            {dictionary.footer.rights.replace('{year}', year.toString())}
          </div>
          <div className="text-xs text-foreground/50">
            {dictionary.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}

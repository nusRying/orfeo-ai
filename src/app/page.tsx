'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n/config';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && i18n.locales.some((locale) => locale === savedLocale)) {
      router.replace(`/${savedLocale}`);
    } else {
      const browserLang = navigator.language.split('-')[0];
      const defaultLocale = i18n.locales.some((locale) => locale === browserLang)
        ? browserLang
        : i18n.defaultLocale;
      router.replace(`/${defaultLocale}`);
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-[#fe4c23] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

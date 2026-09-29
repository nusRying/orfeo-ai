import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LandingSections from '@/components/LandingSections';
import LanguageSynchronizer from '@/components/LanguageSynchronizer';
import Navbar from '@/components/Navbar';
import WaveBackground from '@/components/WaveBackground';
import { DictionaryProvider } from '@/i18n/DictionaryProvider';
import { getDictionary } from '@/i18n/getDictionary';
import { getSiteMetadataDescription, getSiteMetadataTitle } from '@/lib/site-config';

const locale = 'ar' as const;

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-sans-ar',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: getSiteMetadataTitle(locale),
  description: getSiteMetadataDescription(locale),
};

export default async function RootPage() {
  const dictionary = await getDictionary(locale);

  return (
    <div className={`${inter.variable} ${playfair.variable} ${ibmPlexArabic.variable} antialiased selection:bg-cyan-500/30 min-h-screen`}>
      <LanguageSynchronizer lang={locale} dir="rtl" />
      <DictionaryProvider dictionary={dictionary} locale={locale}>
        <WaveBackground />
        <Navbar />
        <ClientWrapper>
          <main className="relative">
            <Hero />
            <LandingSections />
          </main>
        </ClientWrapper>
        <Footer />
      </DictionaryProvider>
    </div>
  );
}

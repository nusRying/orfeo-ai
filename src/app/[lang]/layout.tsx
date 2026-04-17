import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import WaveBackground from "@/components/WaveBackground";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import LanguageSynchronizer from "@/components/LanguageSynchronizer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { Locale, i18n } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { getSiteMetadataDescription, getSiteMetadataTitle } from "@/lib/site-config";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-sans-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = i18n.locales.includes(lang as Locale) ? (lang as Locale) : i18n.defaultLocale;

  return {
    title: getSiteMetadataTitle(locale),
    description: getSiteMetadataDescription(locale),
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <div className={`${inter.variable} ${playfair.variable} ${ibmPlexArabic.variable} antialiased selection:bg-cyan-500/30 min-h-screen`}>
      <LanguageSynchronizer lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
      <DictionaryProvider dictionary={dictionary} locale={lang as Locale}>
        <WaveBackground />
        <Navbar />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
        <ChatWidget />
      </DictionaryProvider>
    </div>
  );
}

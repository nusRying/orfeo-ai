import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import WaveBackground from "@/components/WaveBackground";
import Footer from "@/components/Footer";
import LanguageSynchronizer from "@/components/LanguageSynchronizer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { getSiteMetadataDescription, getSiteMetadataTitle } from "@/lib/site-config";
import "./globals.css";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = "ar" as Locale;
  return {
    title: getSiteMetadataTitle(locale),
    description: getSiteMetadataDescription(locale),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "ar" as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${ibmPlexArabic.variable} antialiased selection:bg-cyan-500/30 min-h-screen`}>
        <LanguageSynchronizer lang={locale} dir="rtl" />
        <DictionaryProvider dictionary={dictionary} locale={locale}>
          <WaveBackground />
          <Navbar />
          <ClientWrapper>{children}</ClientWrapper>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}

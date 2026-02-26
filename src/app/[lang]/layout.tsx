import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORFEO AI | Premium AI Agency",
  description:
    "Modern AI solutions for forward-thinking businesses. Let's get AI everywhere else.",
};

import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import WaveBackground from "@/components/WaveBackground";
import ChatWidget from "@/components/ChatWidget";
import { Locale, i18n } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";

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
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-cyan-500/30`}
      >
        <DictionaryProvider dictionary={dictionary} locale={lang as Locale}>
          <WaveBackground />
          <Navbar />
          <ClientWrapper>{children}</ClientWrapper>
          <ChatWidget />
        </DictionaryProvider>
      </body>
    </html>
  );
}

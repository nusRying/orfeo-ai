import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-cyan-500/30`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

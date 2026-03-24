import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Use DM Sans as fallback for heading font too (Clash Display is a premium font)
const headingFont = DM_Sans({
  variable: "--font-clash",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DigiTech Avenue | Premium Digital Agency — Web Design & Development",
  description: "We build digital experiences that turn visitors into revenue. Premium web design, UI/UX, mobile apps, SEO & digital marketing agency. 200+ projects delivered.",
  keywords: [
    "digital agency",
    "web design agency",
    "UI UX design agency", 
    "website development company",
    "digital marketing agency",
    "mobile app development",
    "DigiTech Avenue",
    "premium web development",
  ],
  authors: [{ name: "DigiTech Avenue" }],
  creator: "DigiTech Avenue",
  publisher: "DigiTech Avenue",
  metadataBase: new URL("https://digitechavenue.vercel.app"),
  openGraph: {
    title: "DigiTech Avenue | Premium Digital Agency",
    description: "We build digital experiences that turn visitors into revenue. 200+ projects. 98% client satisfaction.",
    url: "https://digitechavenue.vercel.app",
    siteName: "DigiTech Avenue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTech Avenue | Premium Digital Agency",
    description: "We build digital experiences that turn visitors into revenue.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

import { FloatingContact } from "@/components/FloatingContact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${headingFont.variable} antialiased bg-[#080C14] text-[#F0F4FF]`}
        style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}
      >
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

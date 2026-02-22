import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digitech Avenue | Modern Digital Experience Studio",
  description: "A Modern Digital Experience Studio where performance meets design intelligence. We build high-end products, not just websites.",
  keywords: ["digital studio", "web design", "product design", "Digitech Avenue", "high-end web development"],
  authors: [{ name: "DigitechAvenue" }],
  creator: "DigitechAvenue",
  publisher: "DigitechAvenue",
  metadataBase: new URL("https://digitechavenue.vercel.app"),
  openGraph: {
    title: "Digitech Avenue | Modern Digital Experience Studio",
    description: "Where performance meets design intelligence.",
    url: "https://digitechavenue.vercel.app",
    siteName: "Digitech Avenue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitech Avenue | Modern Digital Experience Studio",
    description: "Where performance meets design intelligence.",
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
        className={`${lexend.variable} font-lexend antialiased bg-[#F8FAFC] text-[#111111] selection:bg-[#2563EB]/20 selection:text-[#2563EB]`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

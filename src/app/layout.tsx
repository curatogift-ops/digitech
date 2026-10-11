import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Digitech Avenue | Websites, apps, software and performance marketing",
  description:
    "Digitech Avenue designs and develops websites, mobile apps and custom business systems, and helps businesses grow through performance marketing and practical AI solutions.",
  keywords: [
    "digital agency Bangalore",
    "web design agency",
    "UI UX design",
    "website development",
    "SEO agency",
    "DigiTech Avenue",
  ],
  authors: [{ name: "DigiTech Avenue" }],
  creator: "DigiTech Avenue",
  publisher: "DigiTech Avenue",
  metadataBase: new URL("https://digitechavenue.vercel.app"),
  openGraph: {
    title: "DigiTech Avenue",
    description: "Websites, apps, and search programs built to bring in customers.",
    url: "https://digitechavenue.vercel.app",
    siteName: "DigiTech Avenue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTech Avenue",
    description: "Websites, apps, and search programs built to bring in customers.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#060b1d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} scroll-smooth`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

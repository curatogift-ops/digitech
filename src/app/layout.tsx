import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

// ── Fonts — display:swap avoids render-blocking ─────────────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DigiTechAvenue — We Make Digital Magic",
  description:
    "DigiTechAvenue crafts brands, websites, and digital products that feel alive — from Bangalore to the world. Award-winning digital agency.",
  keywords: [
    "digital agency Bangalore",
    "web design agency",
    "UI UX design",
    "website development",
    "SEO agency",
    "DigiTechAvenue",
    "brand identity",
  ],
  authors:   [{ name: "DigiTech Avenue" }],
  creator:   "DigiTech Avenue",
  publisher: "DigiTech Avenue",
  metadataBase: new URL("https://digitechavenue.vercel.app"),
  openGraph: {
    title:       "DigiTechAvenue | Award-Winning Digital Agency",
    description: "We craft brands, websites, and digital products that feel alive. 340+ projects. 98% retention.",
    url:         "https://digitechavenue.vercel.app",
    siteName:    "DigiTech Avenue",
    locale:      "en_US",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "DigiTechAvenue | We Make Digital Magic",
    description: "We craft brands, websites, and digital products that feel alive.",
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
  themeColor: "#0d0d1f",
  width:       "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { FloatingContact } from "@/components/FloatingContact";
import { Header }          from "@/components/Header";
import { Footer }          from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect for faster font resolution */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${fraunces.variable} antialiased`}
        style={{
          background: "#0d0d1f",
          color: "#ffffff",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          overflowX: "hidden",
        }}
      >
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

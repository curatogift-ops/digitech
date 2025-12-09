import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DigitechAvenue - Professional Web Development & Digital Solutions",
  description: "Transform your online presence with DigitechAvenue. Expert web development, custom software solutions, and digital consulting services. Fast delivery, premium quality, SEO-optimized websites.",
  keywords: ["web development", "software development", "digital solutions", "SEO optimization", "custom websites", "mobile apps", "consulting", "digitechavenue"],
  authors: [{ name: "DigitechAvenue" }],
  creator: "DigitechAvenue",
  publisher: "DigitechAvenue",
  metadataBase: new URL("https://digitechavenue.vercel.app"),
  openGraph: {
    title: "DigitechAvenue - Professional Web Development & Digital Solutions",
    description: "Transform your online presence with expert web development, custom software, and digital consulting services.",
    url: "https://digitechavenue.vercel.app",
    siteName: "DigitechAvenue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitechAvenue - Professional Web Development",
    description: "Expert web development and digital solutions for your business",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

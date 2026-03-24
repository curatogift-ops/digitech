"use client";

import { motion } from "framer-motion";

const services1 = [
  "Web Design", "App Development", "SEO", "Branding", "UI/UX Design", "E-Commerce",
  "Digital Marketing", "Content Strategy", "Google Ads", "Social Media", "Performance Marketing", "Brand Identity",
];

const services2 = [
  "React & Next.js", "Mobile Apps", "Graphic Design", "Conversion Optimization", "Analytics",
  "WordPress", "Shopify", "Logo Design", "Email Marketing", "Landing Pages", "Web3", "SaaS Products",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-3 group">
      <div className={`flex shrink-0 gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="text-lg md:text-xl font-bold text-[#F0F4FF]/60 whitespace-nowrap tracking-tight hover:text-[#00E5FF] transition-colors cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesTicker() {
  return (
    <section className="py-6 md:py-8 bg-[#0A0F1A] border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-transparent to-[#080C14] z-10 pointer-events-none" />
      <MarqueeRow items={services1} />
      <MarqueeRow items={services2} reverse />
    </section>
  );
}

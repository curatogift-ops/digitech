"use client";

import { Hero } from "@/components/sections/Hero";
import { ServicesTicker } from "@/components/sections/ServicesTicker";
import { ValueProp } from "@/components/sections/ValueProp";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { RecentWork } from "@/components/sections/RecentWork";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Ticker / Marquee */}
      <ServicesTicker />

      {/* 3. About / Value Proposition */}
      <ValueProp />

      {/* 4. Services Grid */}
      <Services />

      {/* 5. Results / Stats */}
      <Stats />

      {/* 6. Portfolio Showcase */}
      <RecentWork />

      {/* 7. Process Timeline */}
      <Process />

      {/* 8. Testimonials Carousel */}
      <Testimonials />

      {/* 9. FAQ Accordion */}
      <FAQ />

      {/* 10. Contact Section */}
      <Contact />

      {/* 11. Final CTA Banner */}
      <CTABanner />
    </main>
  );
}

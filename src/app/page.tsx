"use client";

import { Hero } from "@/components/sections/Hero";
import { ServicesTicker } from "@/components/sections/ServicesTicker";
import { RecentWork } from "@/components/sections/RecentWork";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { ValueProp } from "@/components/sections/ValueProp";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--navy)", color: "var(--white)", overflowX: "hidden" }}>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Ticker */}
      <ServicesTicker />

      {/* 3. Work */}
      <RecentWork />

      {/* 4. Services */}
      <Services />

      {/* 5. Stats Band */}
      <Stats />

      {/* 6. About */}
      <ValueProp />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Process */}
      <Process />

      {/* 9. Tech Stack */}
      <TechStack />

      {/* 10. CTA */}
      <CTABanner />

      {/* 11. Contact Form */}
      <Contact />
    </main>
  );
}

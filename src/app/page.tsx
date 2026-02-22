"use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Consultation } from "@/components/sections/Consultation";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { RecentWork } from "@/components/sections/RecentWork";
import { WhyUs } from "@/components/sections/WhyUs";
import { Brands } from "@/components/sections/Brands";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">
      <Hero />
      <Services /> 
      <Consultation />
      <Expertise />
      {/* <Process /> - Kept Process as it likely adds value even if not explicitly in brief, or can be removed if user dislikes. Keeping for now as it bridges 'How we do it'. */}
      <RecentWork />
      <Brands />
      <Testimonials />
      <Contact />
      <WhyUs />
    </main>
  );
}

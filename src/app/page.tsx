"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <Hero />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}

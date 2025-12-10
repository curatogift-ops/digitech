import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon-purple selection:text-white">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <TechStack />
      <section id="projects">
        <Projects />
      </section>
      <Benefits />
      <Pricing />
      <CTA />

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 text-sm bg-background">
        <p>© 2024 DigitechAvenue. All rights reserved.</p>
      </footer>
    </main>
  );
}

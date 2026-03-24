"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Palette, Megaphone, ArrowUpRight, CheckCircle2, ShoppingCart, Rocket, Code2 } from "lucide-react";

const mainServices = [
  {
    title: "Premium Web Engineering",
    description: "We build bespoke, high-performance websites designed for speed, SEO domination, and conversion excellence.",
    icon: Globe,
    accent: "from-[#00E5FF] to-[#00B8D4]",
    features: [
      "Custom Full-Stack Development",
      "Next.js 14 & React Architecture",
      "Luxury Portfolio & Brand Sites",
      "High-Performance Landing Pages",
      "Advanced Mobile Responsiveness",
      "SEO-First Code Structure"
    ],
    footer: "Engineered for 99.9% uptime and sub-2s load speeds."
  },
  {
    title: "SEO Domination Systems",
    description: "Our data-driven SEO strategies push your brand to the top of Google results to capture high-intent traffic.",
    icon: Search,
    accent: "from-[#FFD700] to-[#FFA500]",
    features: [
      "Technical Authority SEO",
      "Local Dominance Strategy",
      "On-Page Content Engineering",
      "Strategic Keyword Acquisition",
      "Advanced Schema Integration",
      "Google Search Console Setup"
    ],
    footer: "SEO isn't a cost — it's your primary growth engine."
  },
  {
    title: "Luxury UI/UX Architecture",
    description: "Bespoke interface design that combines high-end aesthetics with psychology-driven user experience.",
    icon: Palette,
    accent: "from-[#00E5FF] to-[#7C3AED]",
    features: [
      "Bespoke Visual Identity",
      "Conversion-Focused Interface",
      "High-Fidelity Prototyping",
      "Behavioral User Journeys",
      "Modern Interaction Design",
      "Brand System Development"
    ],
    footer: "Premium design builds instant credibility and trust."
  },
  {
    title: "Performance Marketing",
    description: "Scalable digital marketing strategies that turn attention into revenue through precision targeting.",
    icon: Megaphone,
    accent: "from-[#F0F4FF] to-[#8A9BB5]",
    features: [
      "Precision PPC & Google Ads",
      "Authority Social Marketing",
      "ROI-Focused Ad Strategy",
      "Marketing Analytics Suite",
      "Retargeting Ecosystems",
      "Lead Magnet Engineering"
    ],
    footer: "Maximize your ROI with data-backed campaigns."
  },
  {
    title: "E-Commerce Engineering",
    description: "Full-scale online commerce platforms built for massive scale, security, and seamless checkouts.",
    icon: ShoppingCart,
    accent: "from-[#00E5FF] to-[#00B8D4]",
    features: [
      "Shopify & Custom E-Comm",
      "Secure Payment Architectures",
      "Inventory Sync Systems",
      "Subscription Model Engineering",
      "User Accounts & Dashboards",
      "Advanced Product Filtering"
    ],
    footer: "Turn browsers into buyers with a friction-free experience."
  },
  {
    title: "SaaS & App Development",
    description: "Scalable software products and mobile applications built for the modern digital economy.",
    icon: Code2,
    accent: "from-[#FFD700] to-[#00E5FF]",
    features: [
      "Native iOS & Android Apps",
      "Progressive Web Applications",
      "SaaS MVP Engineering",
      "Cloud Infrastructure Setup",
      "API Integration & Design",
      "Scalable Backend Systems"
    ],
    footer: "Building the future of digital solutions, today."
  }
];

export function ServiceContent() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700]/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-5xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-8"
           >
              Our Capability
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
           >
             Professional Website & <br />
             <span className="text-gradient-cyan">Digital Engineering Services</span>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto font-medium"
           >
             End-to-end digital solutions for brands that demand performance, aesthetic excellence, and market-leading results.
           </motion.p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 md:pb-32 relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group border border-white/5 hover:border-[rgba(0,229,255,0.15)] hover:-translate-y-2"
                >
                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-[#080C14]" strokeWidth={2.5} />
                   </div>

                   <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-[#00E5FF] transition-colors leading-tight">
                     {service.title}
                   </h2>
                   
                   <p className="text-[#8A9BB5] text-[0.95rem] mb-10 leading-relaxed font-medium">
                     {service.description}
                   </p>

                   <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-[#F0F4FF] group/item">
                          <CheckCircle2 className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5 opacity-60 group-hover/item:opacity-100 transition-all" />
                          <span className="font-semibold text-sm tracking-wide">{feature}</span>
                        </li>
                      ))}
                   </ul>

                   {service.footer && (
                     <div className="pt-6 border-t border-white/5">
                        <p className="text-xs font-bold text-[#8A9BB5] uppercase font-mono tracking-widest leading-relaxed">
                          &quot;{service.footer}&quot;
                        </p>
                     </div>
                   )}
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative bg-gradient-to-r from-[#0F1724] to-[#080C14] border border-white/5 p-12 md:p-24 rounded-[3.5rem] text-center overflow-hidden"
           >
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

              <div className="relative z-10 space-y-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] max-w-4xl mx-auto">
                  Start your digital acceleration with a <br/>
                  <span className="text-gradient-cyan">Free Project Discovery.</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link 
                    href="/#contact" 
                    className="px-12 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-extrabold rounded-full text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                  >
                    Get Your Quote <ArrowUpRight className="w-6 h-6" />
                  </Link>
                  <a 
                    href="https://wa.me/917996998142" 
                    className="flex items-center gap-3 text-lg font-bold text-[#F0F4FF] hover:text-[#00E5FF] transition-all"
                  >
                     Chat on WhatsApp <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

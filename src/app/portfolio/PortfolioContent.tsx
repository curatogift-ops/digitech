"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Layout, Smartphone, ShoppingBag } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "The Travel Book",
    category: "Web Engineering",
    client: "Luxury Travel Agency",
    result: "340% Booking Increase",
    color: "from-[#00E5FF]/20 to-[#0F1724]",
    icon: Globe,
  },
  {
    title: "GetWings Aviations",
    category: "E-Commerce",
    client: "Private Jet Charter",
    result: "200% Revenue Growth",
    color: "from-[#FFD700]/20 to-[#0F1724]",
    icon: ShoppingBag,
  },
  {
    title: "Stylus Arcade",
    category: "App Development",
    client: "Gaming Hub",
    result: "50K+ Active Users",
    color: "from-[#7C3AED]/20 to-[#0F1724]",
    icon: Smartphone,
  },
  {
    title: "A Safe Embrace",
    category: "Corporate Site",
    client: "Global Logistics",
    result: "150% Lead Volume",
    color: "from-[#00E5FF]/20 to-[#0F1724]",
    icon: Layout,
  },
  {
    title: "Beatwisse",
    category: "UI/UX Design",
    client: "Audio Tech Brand",
    result: "98% User Retention",
    color: "from-[#FFD700]/20 to-[#0F1724]",
    icon: Layout,
  },
  {
    title: "Next Pro",
    category: "SaaS Platform",
    client: "Fintech Startup",
    result: "$2M+ Traded",
    color: "from-[#7C3AED]/20 to-[#0F1724]",
    icon: Smartphone,
  },
  {
    title: "Dewy Lupin",
    category: "Branding",
    client: "Eco-Cosmetics",
    result: "Brand Launch Success",
    color: "from-[#00E5FF]/20 to-[#0F1724]",
    icon: Layout,
  },
  {
    title: "EpicsWP",
    category: "Maintenance",
    client: "WP Service Provider",
    result: "Zero Uptime Issues",
    color: "from-[#FFD700]/20 to-[#0F1724]",
    icon: Globe,
  },
  {
    title: "Samzal",
    category: "Full Stack",
    client: "Real Estate Group",
    result: "10K+ Monthly Visits",
    color: "from-[#7C3AED]/20 to-[#0F1724]",
    icon: Globe,
  }
];

export function PortfolioContent() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700]/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-5xl mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-xs font-bold text-[#00E5FF] uppercase tracking-[0.25em] mb-6"
           >
             Proven Track Record
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
           >
             Our Engineering <br />
             <span className="text-gradient-cyan">Masterpieces</span>
           </motion.h1>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto font-medium"
           >
             A curated selection of high-performance digital platforms that delivered massive scale and revenue growth.
           </motion.p>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section className="pb-32 pt-12">
         <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
               {projects.map((project, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                   className="group relative flex flex-col glass-card border border-white/5 rounded-3xl overflow-hidden hover:border-[rgba(0,229,255,0.2)] hover:-translate-y-2 transition-all duration-500"
                 >
                   {/* Project visual area */}
                   <div className={`relative h-[250px] bg-gradient-to-b ${project.color} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                      <div className="relative z-10 text-center p-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#080C14]/60 flex items-center justify-center mb-6 mx-auto border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
                          <project.icon className="w-8 h-8 text-[#00E5FF]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#00E5FF] transition-colors">{project.title}</h3>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#080C14]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 px-8 text-center">
                         <div className="w-12 h-12 rounded-full border border-[#00E5FF] flex items-center justify-center mb-6">
                           <ArrowUpRight className="w-6 h-6 text-[#00E5FF]" />
                         </div>
                         <p className="text-[#8A9BB5] text-sm uppercase tracking-[0.2em] font-bold mb-2">Category</p>
                         <p className="text-white text-lg font-bold mb-4">{project.category}</p>
                         <p className="text-[#00E5FF] font-mono text-sm font-bold">{project.result}</p>
                      </div>
                   </div>

                   {/* Footer Info Block */}
                    <div className="p-6 md:p-8 bg-[#0F1724] border-t border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest mb-1">Corporate Client</p>
                        <h4 className="text-white font-bold">{project.client}</h4>
                      </div>
                      <ExternalLink className="w-5 h-5 text-[#8A9BB5] group-hover:text-[#00E5FF] transition-colors" />
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative bg-gradient-to-br from-[#0F1724] to-[#080C14] border border-white/5 p-12 md:p-20 rounded-[3.5rem] overflow-hidden text-center"
           >
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
                Ready to Join Our <br />
                <span className="text-gradient-cyan">Hall of Fame?</span>
              </h2>
              <p className="text-[#8A9BB5] text-xl mb-12 max-w-2xl mx-auto font-medium">
                Let&apos;s discuss how we can turn your digital project into our next featured case study.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex px-12 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-extrabold rounded-full text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all"
              >
                Inquire Now
              </Link>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

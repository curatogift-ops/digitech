"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "The Travel Book",
    client: "Travel Agency",
    category: "Web Design",
    result: "340% increase in bookings",
    color: "from-[#00E5FF]/20 to-[#0F1724]",
    borderColor: "border-[#00E5FF]/20",
  },
  {
    title: "GetWings Aviations",
    client: "Aviation Company",
    category: "E-Commerce",
    result: "200% revenue growth",
    color: "from-[#FFD700]/20 to-[#0F1724]",
    borderColor: "border-[#FFD700]/20",
  },
  {
    title: "Stylus Arcade",
    client: "Gaming Platform",
    category: "App Development",
    result: "50K+ active users",
    color: "from-[#7C3AED]/20 to-[#0F1724]",
    borderColor: "border-[#7C3AED]/20",
  },
];

export function RecentWork() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0A0F1A] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1]"
            >
              Projects That{" "}
              <span className="text-gradient-cyan">Deliver Results</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#8A9BB5] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 font-semibold text-sm transition-all"
            >
              View All Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden border ${project.borderColor} hover:border-[rgba(0,229,255,0.3)] transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
            >
              {/* Project visual area */}
              <div className={`relative h-[280px] bg-gradient-to-b ${project.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="relative z-10 text-center p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#00E5FF] text-xs font-bold uppercase tracking-wider mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F0F4FF] mb-2">{project.title}</h3>
                  <p className="text-[#8A9BB5] text-sm">{project.client}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#080C14]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full border-2 border-[#00E5FF] flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="p-5 bg-[#0F1724]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8A9BB5] uppercase tracking-wider mb-1">Result</p>
                    <p className="text-[#00E5FF] font-bold text-sm font-mono">{project.result}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A9BB5] group-hover:text-[#00E5FF] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

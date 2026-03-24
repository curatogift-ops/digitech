"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    icon: Zap,
    title: "Lightning Speed",
    stat: "2x faster delivery",
    description: "We move fast without breaking things. Most projects go live in under 4 weeks.",
    gradient: "from-[#00E5FF] to-[#00B8D4]",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    stat: "98% satisfaction rate",
    description: "Every pixel is intentional. Every line of code is optimized. No shortcuts.",
    gradient: "from-[#FFD700] to-[#FFA500]",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    stat: "$10M+ revenue generated",
    description: "We don't just make things look good — we make them perform. Real metrics, real growth.",
    gradient: "from-[#00E5FF] to-[#7C3AED]",
  },
];

export function ValueProp() {
  return (
    <section className="py-20 md:py-28 bg-[#080C14] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4"
          >
            Why DigiTech Avenue
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1] mb-6"
          >
            Not Just Another Agency.{" "}
            <span className="text-gradient-cyan">Your Growth Partner.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8A9BB5] text-lg leading-relaxed"
          >
            We combine strategic thinking, modern design, and performance-driven development to create digital platforms that attract attention, build trust, and generate enquiries.
          </motion.p>
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group glass-card rounded-2xl p-8 hover:border-[rgba(0,229,255,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-[#080C14]" strokeWidth={2.5} />
              </div>

              <h3 className="text-xl font-bold text-[#F0F4FF] mb-2">{item.title}</h3>
              
              {/* Power stat */}
              <p className="text-sm font-bold text-[#00E5FF] mb-4 font-mono tracking-wide">{item.stat}</p>

              <p className="text-[#8A9BB5] text-[0.95rem] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#00E5FF] font-semibold hover:gap-3 transition-all"
          >
            Our Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

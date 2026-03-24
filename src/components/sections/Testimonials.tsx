"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Nikhil Kumar",
    role: "E-Commerce Founder",
    rating: 5,
    text: "DigiTech Avenue transformed our online store. Our conversion rate increased by 200% within 3 months. Exceptional expertise and delivery.",
  },
  {
    name: "Yash",
    role: "SaaS Entrepreneur",
    rating: 5,
    text: "Result-oriented projects was their promise and they delivered exactly that. Our marketing ROI has never been higher.",
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    rating: 5,
    text: "From strategy to execution, they were unparalleled. Their dedication to our brand was impressive and clearly visible in the final results.",
  },
  {
    name: "David Chen",
    role: "CEO, TechLaunch",
    rating: 5,
    text: "A truly professional and premium agency. They understood our vision perfectly and engineered a high-performance web experience.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, GrowthHub",
    rating: 5,
    text: "Best decision for our digital presence. They not only build websites but also educate us on brand maintenance. Highly recommended!",
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    rating: 5,
    text: "Sleek, confident, and technically excellent. They really are the Formula 1 team of the digital agency world. Unbeatable quality.",
  },
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0A0F1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/2 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-4"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1] mb-6"
          >
            Trusted by{" "}
            <span className="text-gradient-cyan">Global Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8A9BB5] text-lg"
          >
            Real feedback from clients who transformed their businesses with us.
          </motion.p>
        </div>

        {/* Testimonials Carousel (Marquee style) */}
        <div 
          className="relative flex overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Dual marquee for infinite loop effect */}
          <div className={`flex shrink-0 gap-6 animate-marquee py-4 ${isPaused ? '[animation-play-state:paused]' : ''}`}>
             {[...testimonials, ...testimonials].map((item, i) => (
                <div 
                  key={i}
                  className="w-[300px] md:w-[400px] glass-card rounded-2xl p-8 border border-white/5 group/card transition-all duration-500 hover:border-[#00E5FF]/20"
                >
                  {/* Quote icon */}
                  <div className="mb-6 opacity-40 group-hover/card:opacity-100 group-hover/card:text-[#00E5FF] transition-all">
                    <MessageSquareQuote className="w-8 h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex text-[#FFD700] gap-1 mb-4">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#8A9BB5] text-[1.05rem] leading-relaxed mb-8 italic group-hover/card:text-[#F0F4FF] transition-colors">
                    &quot;{item.text}&quot;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#0F1724] flex items-center justify-center font-bold text-[#F0F4FF] shadow-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0F4FF] leading-tight">{item.name}</h4>
                      <p className="text-xs text-[#8A9BB5] uppercase tracking-wide font-mono mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Side gradient Fades for continuous feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A] via-transparent to-[#0A0F1A] z-20 pointer-events-none opacity-80" />
    </section>
  );
}

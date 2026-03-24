"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
        if (progress >= 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", prefix: "" },
  { value: 98, suffix: "%", label: "Client Satisfaction", prefix: "" },
  { value: 5, suffix: "+", label: "Years of Excellence", prefix: "" },
  { value: 10, suffix: "M+", label: "Revenue Generated for Clients", prefix: "$" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-[#080C14] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#080C14] to-[#0A0F1A]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#00E5FF]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1]"
          >
            Numbers That{" "}
            <span className="text-gradient-gold">Speak Louder</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center glass-card rounded-2xl p-8 border border-white/5 hover:border-[rgba(0,229,255,0.15)] transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#00E5FF] mb-3 font-mono tracking-tight" style={{ textShadow: '0 0 30px rgba(0, 229, 255, 0.3)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-[#8A9BB5] text-sm font-semibold uppercase tracking-wider leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

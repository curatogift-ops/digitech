"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business, goals, and audience to set a solid foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a roadmap focused on ROI and market-leading performance.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting a luxury aesthetic that builds trust and commands attention.",
  },
  {
    number: "04",
    title: "Build",
    description: "Clean, efficient coding using modern stacks for ultimate speed and scalability.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Seamless deployment with rigorous QA and performance optimization.",
  },
  {
    number: "06",
    title: "Grow",
    description: "Ongoing support and data-driven scaling to dominate your market.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#080C14] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1] mb-6"
          >
            Our Precision{" "}
            <span className="text-gradient-cyan">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8A9BB5] text-lg"
          >
            A high-performance journey from concept to market domination.
          </motion.p>
        </div>

        {/* Timeline Desktop */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Number sphere */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0F1724] border border-[rgba(0,229,255,0.1)] flex items-center justify-center mb-6 group-hover:border-[#00E5FF]/40 transition-all duration-500 relative">
                  <span className="text-xl md:text-2xl font-bold font-mono text-[#00E5FF] group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all">
                    {step.number}
                  </span>
                  {/* Decorative pulse ring on active/hover */}
                  <div className="absolute inset-[-4px] rounded-full border border-[rgba(0,229,255,0.1)] group-hover:border-[rgba(0,229,255,0.3)] animate-pulse transition-all" />
                </div>

                <h3 className="text-xl font-bold text-[#F0F4FF] mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#8A9BB5] text-sm leading-relaxed max-w-[200px] lg:max-w-none">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

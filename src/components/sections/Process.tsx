"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Plan",
    description: "We understand your goals and map out the perfect strategy.",
    color: "from-amber-400 to-orange-500",
    shadowColor: "shadow-amber-300/30",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Crafting beautiful, conversion-focused visual experiences.",
    color: "from-[#2563EB] to-blue-600",
    shadowColor: "shadow-blue-300/30",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Clean, performant code with modern frameworks and best practices.",
    color: "from-[#06B6D4] to-cyan-600",
    shadowColor: "shadow-cyan-300/30",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "SEO-optimized deployment with ongoing support and analytics.",
    color: "from-[#10B981] to-emerald-600",
    shadowColor: "shadow-emerald-300/30",
  },
];

export function Process() {
  return (
    <section id="process" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-sm font-semibold text-[#2563EB] mb-4"
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            How We Bring Your{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Vision to Life
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            A streamlined process designed for efficiency and quality results.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Connector line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-slate-200 to-slate-100 z-0" />
              )}

              <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 z-10">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg ${step.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Globe, Paintbrush, Smartphone, Search, Megaphone, ShoppingBag, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "High-performance websites built with cutting-edge technology and conversion-focused design.",
    href: "/services/web-development",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    href: "/services/graphic-designing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps that deliver exceptional mobile experiences.",
    href: "/services/web-development",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies that put you in front of the right audience at the right time.",
    href: "/services/seo-services",
  },
  {
    icon: Megaphone,
    title: "Brand Identity",
    description: "Distinctive brand systems that tell your story and set you apart from the competition.",
    href: "/services/graphic-designing",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Online stores that convert browsers into buyers with seamless shopping experiences.",
    href: "/services/e-commerce",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0F1A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-[1.1] mb-6"
          >
            Services That{" "}
            <span className="text-gradient-cyan">Drive Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8A9BB5] text-lg"
          >
            End-to-end digital solutions tailored to your brand. Every project is built with usability, speed, and conversion in mind.
          </motion.p>
        </div>

        {/* Services Grid — 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="group glass-card rounded-2xl p-7 lg:p-8 flex flex-col h-full hover:border-[rgba(0,229,255,0.18)] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,229,255,0.15)] group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#F0F4FF] group-hover:text-[#00E5FF] transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#8A9BB5] opacity-0 group-hover:opacity-100 group-hover:text-[#00E5FF] transition-all -translate-y-1 group-hover:translate-y-0" />
                </div>

                <p className="text-[#8A9BB5] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                <span className="mt-4 text-sm font-semibold text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

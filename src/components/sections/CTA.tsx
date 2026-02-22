"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-[#F1F5F9] relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-[2.5rem] shadow-2xl shadow-blue-500/20 overflow-hidden relative">
            {/* Inner Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />

            <div className="py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
                <div className="space-y-6 text-center md:text-left max-w-2xl">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight"
                    >
                        Ready to Upgrade Your Website?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/90 font-medium leading-relaxed"
                    >
                        Get a free consultation and demo design today. Let's create something extraordinary together.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0"
                >
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563EB] font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center">
                            Get Free Demo <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                       href="https://wa.me/917996998142"
                       className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all active:scale-95"
                    >
                        <MessageSquare className="w-5 h-5 mr-2" /> Chat on WhatsApp
                    </a>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}

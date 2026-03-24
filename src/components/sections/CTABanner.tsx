"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0F1A]">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent z-20" />
      
      <div className="absolute inset-0 z-10 w-full h-full">
         <div className="absolute inset-0 bg-grid-pattern opacity-10" />
         <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20 w-full max-w-[1400px]">
        <div className="bg-[#0F1724] border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
           {/* Inner glow on the card */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/2 to-transparent opacity-40 pointer-events-none" />

           <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-6"
           >
              Ready to Grow?
           </motion.span>

           <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#F0F4FF] leading-tight mb-8 max-w-4xl"
           >
              Ready to Build Something <br />
              <span className="text-gradient-cyan">Great Together?</span>
           </motion.h2>

           <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto mb-12 font-medium"
           >
              Let&apos;s talk about your project and see how DigiTech Avenue can engineering your growth. No commitment. Just possibilities.
           </motion.p>

           {/* Buttons */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6"
           >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#080C14] bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] rounded-full shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                 <span className="relative z-10 flex items-center gap-2">
                    Book a Free Strategy Call
                    <Calendar className="w-5 h-5" />
                 </span>
              </a>

              <a
                href="https://wa.me/917996998142"
                className="group inline-flex items-center gap-3 text-lg font-bold text-[#F0F4FF] hover:text-[#00E5FF] transition-colors"
              >
                 <MessageSquare className="w-6 h-6" /> 
                 <span>Chat on WhatsApp</span>
                 <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

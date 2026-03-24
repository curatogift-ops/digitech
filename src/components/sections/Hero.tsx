"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const heroWords = ["Digital", "Experiences", "That", "Turn", "Visitors", "Into", "Revenue."];

function AnimatedWord({ word, index }: { word: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block mr-[0.25em]"
    >
      {word === "Revenue." ? (
        <span className="text-gradient-hero">{word}</span>
      ) : (
        word
      )}
    </motion.span>
  );
}

// Floating grid particles
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Radial glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/3 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#FFD700]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] w-16 h-16 border border-[#00E5FF]/20 rotate-45"
      />
      <motion.div
        animate={{ y: [10, -20, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-[#FFD700]/40 rounded-full"
      />
      <motion.div
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[8%] w-2 h-2 bg-[#00E5FF]/50 rounded-full"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-24 h-24 border border-dashed border-[#00E5FF]/10 rounded-full"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-28 lg:pt-32 lg:pb-16 overflow-hidden bg-[#080C14]">
      <GridBackground />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.05)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-glow-pulse" />
            <span className="text-sm font-semibold text-[#00E5FF] tracking-wide">Premium Digital Agency</span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-[#F0F4FF] mb-6">
            We Build{" "}
            {heroWords.map((word, i) => (
              <AnimatedWord key={word} word={word} index={i} />
            ))}
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg md:text-xl text-[#8A9BB5] font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            A Modern Digital Experience Studio where performance meets design intelligence. 
            We don&apos;t just build websites — we engineer growth machines.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#080C14] bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B8D4] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#F0F4FF] border border-[rgba(255,255,255,0.12)] rounded-full hover:border-[#00E5FF]/40 hover:bg-[rgba(0,229,255,0.05)] transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2 text-[#00E5FF]" />
              See Our Work
            </a>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2.5 text-[#8A9BB5]">
              <Users className="w-5 h-5 text-[#00E5FF]" />
              <span className="text-sm font-semibold">Trusted by <span className="text-[#F0F4FF]">200+</span> brands</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="flex text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#8A9BB5]"><span className="text-[#F0F4FF]">4.9/5</span> Rating</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2.5 text-[#8A9BB5]">
              <Award className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-semibold"><span className="text-[#F0F4FF]">5+</span> Years</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent pointer-events-none z-20" />
    </section>
  );
}

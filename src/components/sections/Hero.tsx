"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  ShoppingCart,
  BarChart2,
  Palette,
  TrendingUp,
  Search,
  CheckCircle, // If specific icons are needed, these match best
} from "lucide-react";

// For exactly matching the red-tinted outline icons in screenshot 
// we'll map icons but use the theme primary color #2563EB
const services = [
  { icon: Globe, label: "Website Development" },
  { icon: TargetIcon, label: "Social Media Marketing" },
  { icon: ShoppingCart, label: "E-commerce Marketing" },
  { icon: Palette, label: "Graphic Designing" },
  { icon: BarChart2, label: "Performance Marketing" },
  { icon: Search, label: "Google Ads & SEO" },
];

function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-8 md:pt-36 lg:pt-40 lg:pb-12 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:pr-8 max-w-2xl mx-auto lg:mx-0">
            
            {/* Headline */}
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#111111] mb-4 font-heading"
            >
              Escalate Your <br />
              Online Marketing <br />
              with <span className="text-[#2563EB]">Digitech Avenue</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base lg:text-lg text-[#374151] font-medium leading-relaxed max-w-xl pb-2 lg:pb-4 mx-auto lg:mx-0"
            >
              We Shape the Perfect Solution, You Think - We Create
            </motion.p>

            {/* Service list — 2 columns */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 w-fit mx-auto lg:mx-0 text-left"
            >
              {services.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-start gap-3 text-[#111111]">
                  <Icon className="w-4 h-4 text-[#2563EB] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm sm:text-base font-semibold tracking-tight">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 lg:pt-6 w-full sm:w-auto"
            >
              {/* Primary - Get a Demo */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-8 py-3.5 text-base font-bold text-white bg-[#2563EB] rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95"
              >
                Get a Demo
              </a>

              {/* Secondary - Call Now */}
              <a
                href="tel:+917996998142"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-8 py-3.5 text-base font-bold text-white bg-[#111111] rounded-full transition-all duration-300 hover:bg-black hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:scale-95"
              >
                Call Now
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN — Image Composition ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="w-full h-full relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[650px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3.5] mx-auto lg:mr-0 z-10">
              
              {/* Floating badge — top left "Boost Your Online Presence" */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-0 left-[5%] md:left-[10%] z-30"
              >
                <div className="bg-[#2563EB] text-white text-[0.95rem] font-semibold px-6 py-2.5 rounded-full shadow-2xl shadow-blue-500/40 whitespace-nowrap border border-white/20">
                  Boost Your Online Presence
                </div>
              </motion.div>

              {/* Main large image (top right) */}
              <div className="absolute top-8 md:top-12 right-0 w-[85%] h-[75%] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 bg-slate-100 border border-slate-100">
                <Image
                  src="/homepage images/team-presentation-generated.png"
                  alt="Team presentation"
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, 600px"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background = "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)";
                    }
                  }}
                />
              </div>

              {/* Secondary overlapping image (bottom left) */}
              <div className="absolute bottom-4 left-0 w-[60%] h-[50%] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-400/50 border-[6px] md:border-[10px] border-white z-20 bg-slate-100">
                <Image
                  src="/homepage images/team-collaboration-generated.png"
                  alt="Team collaboration discussion"
                  fill
                  sizes="(max-width: 768px) 60vw, 400px"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background = "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)";
                    }
                  }}
                />
              </div>

              {/* Floating card — bottom right "Increase In Revenue" */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                animate-y={[0, -5, 0]}
                className="absolute bottom-[8%] right-[-1rem] md:right-[-2.5rem] z-30 bg-[#2563EB] text-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-blue-600/40 flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px] aspect-square border border-white/20"
              >
                <div className="w-full flex-1 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />
                </div>
                <div className="text-center mt-2">
                  <p className="text-[0.95rem] md:text-base font-semibold leading-tight whitespace-nowrap">
                    Increase In
                    <br />
                    Revenue
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


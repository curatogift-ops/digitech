"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Droplets,
  Component,
  Command,
  Activity,
  Award,
  Box,
  Briefcase,
  Compass,
  Hexagon,
  Infinity as InfinityIcon, // Using alias to avoid naming conflict
  Flame,
  Layout,
  Layers,
} from "lucide-react";

const clients = [
  { name: "LIC", icon: ShieldCheck, color: "text-blue-600" },
  { name: "Classplus", icon: Component, color: "text-sky-500" },
  { name: "Gurukul School", icon: Award, color: "text-slate-800" },
  { name: "Digital India", icon: Globe2, color: "text-green-600" },
  { name: "Tripbaaz", icon: Compass, color: "text-emerald-700" },
  
  { name: "Immigration", icon: Briefcase, color: "text-slate-900" },
  { name: "Career Point", icon: Award, color: "text-indigo-800" },
  { name: "Super Club", icon: InfinityIcon, color: "text-rose-500" },
  { name: "Vacation Jar", icon: Droplets, color: "text-cyan-500" },
  { name: "Dinger", icon: Flame, color: "text-orange-500" },
  
  { name: "Interior Hub", icon: Layout, color: "text-orange-600" },
  { name: "Wise Healths", icon: Activity, color: "text-teal-600" },
  { name: "Dream Palace", icon: Box, color: "text-rose-900" },
  { name: "NPC Center", icon: Command, color: "text-teal-700" },
  { name: "Punjab Kitchen", icon: Layers, color: "text-amber-600" }
];

export function Brands() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden shrink-0">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[1250px]">
        
        {/* Header Block */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] uppercase tracking-[-0.02em] font-heading mb-4"
          >
            WE&apos;RE TRUSTED BY MORE THAN 1600+ CLIENTS.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-[1.1rem] text-[#111111] font-bold font-heading max-w-3xl mx-auto"
          >
            Many brands have already chosen Digitech Avenue to create the best online reputation of their brand.
          </motion.p>
        </div>

        {/* CSS Grid for Logos (5 columns on desktop, responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-slate-200">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 sm:p-8 aspect-[4/3] sm:aspect-video lg:aspect-[4/3] border-r border-b border-slate-200 bg-white hover:bg-slate-50 hover:shadow-inner transition-all duration-300 group cursor-pointer"
              >
                {/* Simulated Logo Design */}
                <div className="flex flex-col items-center justify-center space-y-2 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                   <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${client.color} drop-shadow-sm`} strokeWidth={1.5} />
                   <span className="text-sm sm:text-base font-bold text-slate-800 text-center tracking-tight font-heading leading-tight max-w-[120px]">
                     {client.name}
                   </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

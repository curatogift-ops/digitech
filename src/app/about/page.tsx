"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, Globe, Zap, Users, Target, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#080C14] min-h-screen text-[#F0F4FF] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] bg-[#FFD700]/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.25em] mb-6"
          >
            Our Mission & Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
          >
            We Build Digital Assets That <br className="hidden md:block" />
            <span className="text-gradient-cyan">Engineering Business Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#8A9BB5] max-w-3xl mx-auto leading-relaxed font-medium"
          >
            DigiTech Avenue is a premium digital agency dedicated to helping performance-driven brands establish a strong, credible, and results-driven online presence.
          </motion.p>
        </div>
      </section>

      {/* Intro Cards Section */}
      <section className="relative z-20 -mt-8 pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Who We Are */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card rounded-2xl p-8 lg:p-10 border-t-2 border-[#00E5FF]/40 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-6 text-[#00E5FF]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">Who We Are</h3>
              <p className="text-[#8A9BB5] leading-relaxed mb-4">
                We partner with high-growth startups and established enterprises that seek more than just a &quot;website&quot;. 
              </p>
              <p className="text-[#8A9BB5] leading-relaxed">
                Our approach combines strategic intelligence with luxury design to create platforms that command attention and drive revenue.
              </p>
            </motion.div>

            {/* Card 2: Our Commitment */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="glass-card rounded-2xl p-8 lg:p-10 border-t-2 border-[#FFD700]/40 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mb-6 text-[#FFD700]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors">Our Commitment</h3>
              <p className="text-[#8A9BB5] leading-relaxed mb-4">
                We believe a successful digital product should do more than exist — it must <strong>perform</strong> at peak efficiency.
              </p>
              <p className="text-[#8A9BB5] leading-relaxed">
                Our commitment is to eliminate friction and build digital assets that strengthen your ROI and market positioning.
              </p>
            </motion.div>

            {/* Card 3: What We Do */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-card rounded-2xl p-8 lg:p-10 border-t-2 border-[#00E5FF]/40 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-6 text-[#00E5FF]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">What We Do</h3>
              <ul className="space-y-3">
                {[
                  "Premium Web Engineering",
                  "High-Performance E-Commerce",
                  "Conversion-Led Strategy",
                  "Luxury UI/UX Architecture",
                  "SEO Domination Systems",
                  "Custom SaaS Development"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#8A9BB5] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Why Choose Us */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <span className="inline-block text-sm font-bold text-[#FFD700] uppercase tracking-[0.25em] mb-4">
                  The Edge
               </span>
               <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                  Why Leading Brands Choose <span className="text-gradient-cyan">DigiTech Avenue</span>
               </h2>
               <p className="text-[#8A9BB5] text-lg leading-relaxed mb-10 max-w-xl">
                  We don&apos;t just deliver code. We deliver outcomes. Our agency functions like a high-performance formula 1 team for your digital acceleration.
               </p>

               <div className="space-y-4">
                 {[
                   { title: "No Templates. Just Engineering.", icon: Target },
                   { title: "Psychology-Driven UX Patterns", icon: Globe },
                   { title: "Speed as a Feature (Sub-2s Load)", icon: Zap },
                   { title: "24/7 Priority Support Ecosystem", icon: ShieldCheck },
                 ].map((item, idx) => (
                   <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#0F1724] border border-white/5 hover:border-[#00E5FF]/30 transition-all cursor-default"
                   >
                      <item.icon className="w-5 h-5 text-[#00E5FF]" />
                      <span className="font-bold text-white text-[0.95rem]">{item.title}</span>
                   </motion.div>
                 ))}
               </div>
            </motion.div>

            {/* Right: Founder Image/Message Box */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="absolute -inset-4 bg-gradient-to-tr from-[#00E5FF]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50" />
               <div className="relative bg-[#0F1724] border border-white/10 p-10 md:p-14 rounded-[2.5rem] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-bl-[100px]" />
                  
                  <div className="relative z-10">
                     <svg className="w-12 h-12 text-[#00E5FF] opacity-30 mb-8" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zM12 20h-8v-12h8v12zm12 0h-8v-12h8v12z"/>
                     </svg>
                     <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest font-mono">Visionary Message</h3>
                     <blockquote className="text-[#8A9BB5] text-xl italic leading-relaxed mb-10">
                        &quot;DigiTech Avenue was founded on the principle that digital excellence is not optional. We treat every pixel and every line of code as a critical part of your revenue engine. Our goal is to make you the leader in your industry, visually and technically.&quot;
                     </blockquote>
                     
                     <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#0F1724] flex items-center justify-center font-bold text-2xl text-white shadow-xl">
                           D
                        </div>
                        <div>
                           <p className="font-extrabold text-[#F0F4FF] text-lg uppercase tracking-tight">The Executive Board</p>
                           <p className="text-sm font-bold text-[#00E5FF] font-mono tracking-widest">DIGITECH AVENUE ®</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative bg-gradient-to-br from-[#0F1724] to-[#080C14] border border-white/5 p-12 md:p-20 rounded-[3rem] overflow-hidden text-center"
           >
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10">
                Ready to Engineering <br />
                <span className="text-gradient-gold">Your Success?</span>
              </h2>
              <p className="text-[#8A9BB5] text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
                Whether you&apos;re launching a new venture or upgrading your online presence, we are your strategic partner for growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                 <Link 
                   href="/contact" 
                   className="px-10 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-extrabold rounded-full text-lg shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all"
                 >
                    Get a Quote Today
                 </Link>
                 <a 
                   href="tel:+917996998142" 
                   className="flex items-center gap-3 text-[#F0F4FF] hover:text-[#00E5FF] font-bold transition-colors"
                 >
                    <Phone className="w-5 h-5" />
                    <span>+91 799 699 8142</span>
                 </a>
              </div>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

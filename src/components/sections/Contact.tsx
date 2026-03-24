"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#080C14] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <span className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#F0F4FF] leading-tight mb-8">
                  Let&apos;s Build something <br />
                  <span className="text-gradient-cyan">Great Together.</span>
                </h2>
                <p className="text-[#8A9BB5] text-lg mb-12">
                   Have a project in mind? We respond quickly and provide honest guidance. Let&apos;s discuss how we can engineering your success.
                </p>

                <div className="space-y-8">
                   <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all duration-300">
                         <Mail className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">Email Us</p>
                         <p className="text-[#F0F4FF] text-lg font-medium group-hover:text-[#00E5FF] transition-colors">info@digitechavenue.com</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all duration-300">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">Call Us</p>
                         <p className="text-[#F0F4FF] text-lg font-medium group-hover:text-[#00E5FF] transition-colors">+91 799 699 8142</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all duration-300">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">Visit Us</p>
                         <p className="text-[#F0F4FF] text-lg font-medium">Bengaluru, KA, India</p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-[#0F1724] border border-[rgba(0,229,255,0.1)] inline-flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                   <p className="text-[#00E5FF] text-sm font-bold tracking-wide">Average response time: 2 hours</p>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0F1724] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
             >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-bl-full pointer-events-none" />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest px-1">Full Name</label>
                         <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00E5FF]/50 transition-all text-[#F0F4FF] text-sm"
                            required
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest px-1">Email Address</label>
                         <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00E5FF]/50 transition-all text-[#F0F4FF] text-sm"
                            required
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest px-1">Service</label>
                         <select className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00E5FF]/50 transition-all text-[#8A9BB5] text-sm appearance-none cursor-pointer">
                            <option>Web Development</option>
                            <option>UI/UX Design</option>
                            <option>Mobile Apps</option>
                            <option>Digital Marketing</option>
                            <option>SEO Services</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest px-1">Budget Range</label>
                         <select className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00E5FF]/50 transition-all text-[#8A9BB5] text-sm appearance-none cursor-pointer">
                            <option>$500 - $1,000</option>
                            <option>$1,000 - $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000+</option>
                         </select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold text-[#8A9BB5] uppercase tracking-widest px-1">Project Details</label>
                      <textarea 
                         rows={4}
                         placeholder="Tell us about your project, goals and timeline..." 
                         className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00E5FF]/50 transition-all text-[#F0F4FF] text-sm resize-none"
                         required
                      ></textarea>
                   </div>

                   <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-extrabold text-lg flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-1 transition-all group"
                   >
                      {isSubmitting ? "Engineers working..." : "Send Discovery Request"}
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                   </button>

                   {isSuccess && (
                      <motion.div 
                         initial={{ opacity: 0, y: 10 }} 
                         animate={{ opacity: 1, y: 0 }}
                         className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center font-bold"
                      >
                         Success! We&apos;ve received your request and will be in touch within 2 hours.
                      </motion.div>
                   )}
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

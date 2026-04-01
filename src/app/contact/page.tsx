"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="bg-[#080C14] min-h-screen text-[#F0F4FF] overflow-x-hidden pt-32 pb-20 md:pt-40 md:pb-32">
       {/* Background Decoration */}
       <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#00E5FF]/5 to-transparent pointer-events-none" />
       <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00E5FF]/3 rounded-full blur-[150px] pointer-events-none" />

       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
             
             {/* Left Column: Contact info */}
             <div className="lg:col-span-5">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                >
                   <span className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.25em] mb-4">
                      Let&apos;s talk
                   </span>
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
                      Contact <span className="text-gradient-cyan">The Studio.</span>
                   </h1>
                   <p className="text-[#8A9BB5] text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                      Ready to start your digital acceleration? We respond within 2 hours with honest, data-backed guidance.
                   </p>



                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all">
                               <MapPin className="w-5 h-5" />
                            </div>
                            <h3 className="font-extrabold text-white text-lg tracking-tight uppercase font-mono">Our Hub</h3>
                         </div>
                         <p className="text-[#8A9BB5] text-sm leading-relaxed px-1">
                            Mathikere Extension, <br/>
                            Bengaluru, KA 560054
                         </p>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all">
                               <Mail className="w-5 h-5" />
                            </div>
                            <h3 className="font-extrabold text-white text-lg tracking-tight uppercase font-mono">Email</h3>
                         </div>
                         <a href="mailto:info@digitechavenue.com" className="text-[#8A9BB5] text-sm hover:text-[#00E5FF] transition-colors leading-relaxed px-1 block">
                            info@digitechavenue.com
                         </a>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all">
                               <Phone className="w-5 h-5" />
                            </div>
                            <h3 className="font-extrabold text-white text-lg tracking-tight uppercase font-mono">Support</h3>
                         </div>
                         <a href="tel:+917996998142" className="text-[#8A9BB5] text-sm hover:text-[#00E5FF] transition-colors leading-relaxed px-1 block">
                            +91 799 699 8142
                         </a>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0F1724] border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-all">
                               <MessageCircle className="w-5 h-5" />
                            </div>
                            <h3 className="font-extrabold text-white text-lg tracking-tight uppercase font-mono">WhatsApp</h3>
                         </div>
                         <a href="https://wa.me/917996998142" target="_blank" className="text-[#8A9BB5] text-sm hover:text-[#00E5FF] transition-colors leading-relaxed px-1 block font-bold">
                            Open Chat Window
                         </a>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Right Column: High-End Contact Form */}
             <div className="lg:col-span-7">
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-[#0F1724] border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-14 relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/5 rounded-bl-[4rem] pointer-events-none" />
                   
                   <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 leading-tight">
                      Free <span className="text-gradient-cyan">Project Discovery</span> Consultation.
                   </h2>

                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Name</label>
                            <input 
                               type="text" 
                               placeholder="Your Full Name" 
                               required
                               className="w-full bg-[#080C14] border border-white/10 rounded-2xl px-6 py-5 text-[#F0F4FF] focus:outline-none focus:border-[#00E5FF]/40 transition-all font-medium placeholder:text-white/10"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Phone Number</label>
                            <input 
                               type="tel" 
                               placeholder="+91 99999 99999" 
                               required
                               className="w-full bg-[#080C14] border border-white/10 rounded-2xl px-6 py-5 text-[#F0F4FF] focus:outline-none focus:border-[#00E5FF]/40 transition-all font-medium placeholder:text-white/10"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Service Type</label>
                         <div className="relative">
                            <select required className="w-full bg-[#080C14] border border-white/10 rounded-2xl px-6 py-5 text-[#8A9BB5] focus:outline-none focus:border-[#00E5FF]/40 transition-all font-bold appearance-none cursor-pointer">
                               <option value="" disabled selected>Select a service...</option>
                               <option>Brand Identity & Logo Design</option>
                               <option>Website Design & Development</option>
                               <option>Mobile App Development</option>
                               <option>UI / UX Design</option>
                               <option>Motion & 3D Design</option>
                               <option>SEO & Digital Marketing</option>
                               <option>Social Media Management</option>
                               <option>E-Commerce Solutions</option>
                               <option>Strategy & Consulting</option>
                               <option>Other</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-[10px] font-bold">▾</div>
                         </div>
                      </div>





                      <button 
                         type="submit"
                         disabled={isSubmitting}
                         className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden relative"
                      >
                         <span className="relative z-10 flex items-center gap-3">
                           {isSubmitting ? "Engineers Initializing..." : "Initiate Growth Protocol"}
                           {!isSubmitting && <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                         </span>
                         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>

                      {isSuccess && (
                         <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="p-5 rounded-2xl bg-[#00E5FF]/5 border border-[#00E5FF]/20 text-[#00E5FF] font-bold text-center text-sm"
                         >
                            Protocol Initiated. Our senior strategist will be in touch within 2 hours.
                         </motion.div>
                      )}
                   </form>
                </motion.div>
             </div>
          </div>
       </div>
    </main>
  );
}

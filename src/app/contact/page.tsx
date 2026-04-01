"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
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
    <main style={{ background: "#0d0d1f" }} className="min-h-screen text-white overflow-x-hidden pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
       <div className="dot-grid" />
       
       {/* Background Decoration Blobs */}
       <div style={{ position:"absolute", top:"-10%", right:"-10%", width:"500px", height:"500px", borderRadius:"50%", background:"linear-gradient(135deg,rgba(108,43,217,.15),rgba(232,121,249,.1))", filter:"blur(120px)", pointerEvents:"none", zIndex:0 }} />
       <div style={{ position:"absolute", bottom:"10%", left:"-10%", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(139,69,240,.08)", filter:"blur(100px)", pointerEvents:"none", zIndex:0 }} />

       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
             
             {/* Left Column: Contact info */}
             <div className="lg:col-span-5">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                   <span className="eyebrow-pill">Let&apos;s talk</span>
                   <h1 style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.05 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
                      Contact <span style={{ color: "#a855f7" }}>The Studio.</span>
                   </h1>
                   <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                      Ready to start your digital acceleration? We respond within 2 hours with honest, data-backed guidance.
                   </p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12 mb-16">
                      <a 
                        href="https://www.google.com/maps/dir//Digitech+Avenue,+1st+B+St,+Gokula+Extension,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@19.136512,74.7208704,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d72f81344fd:0x620cecce103a5a98!2m2!1d77.5593855!2d13.0366568?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7]/40 transition-all">
                               <MapPin className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-white text-lg tracking-tight italic">Our Hub</h3>
                         </div>
                         <p className="text-white/30 text-sm hover:text-white transition-colors leading-relaxed px-1 font-medium">
                            Mathikere Extension, <br/>
                            Bengaluru, KA 560054
                         </p>
                      </a>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7]/40 transition-all">
                               <Mail className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-white text-lg tracking-tight italic">Email</h3>
                         </div>
                         <a href="mailto:info@digitechavenue.com" className="text-white/30 text-sm hover:text-white transition-colors leading-relaxed px-1 block font-medium">
                            info@digitechavenue.com
                         </a>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7]/40 transition-all">
                               <Phone className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-white text-lg tracking-tight italic">Support</h3>
                         </div>
                         <a href="tel:+917996998142" className="text-white/30 text-sm hover:text-white transition-colors leading-relaxed px-1 block font-medium">
                            +91 799 699 8142
                         </a>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7]/40 transition-all">
                               <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-white text-lg tracking-tight italic">WhatsApp</h3>
                         </div>
                         <a href="https://wa.link/n5ker4" target="_blank" rel="noopener noreferrer" className="text-[#a855f7] text-sm hover:text-[#e879f9] transition-colors leading-relaxed px-1 block font-bold">
                            Open Chat Window →
                         </a>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Right Column: Contact Form */}
             <div className="lg:col-span-7">
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                   style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}
                   className="rounded-[2.5rem] p-8 md:p-12 lg:p-14 relative overflow-hidden backdrop-blur-xl"
                >
                   <div style={{ background: "linear-gradient(135deg,rgba(168,85,247,.1),transparent)" }} className="absolute top-0 right-0 w-64 h-64 rounded-bl-[5rem] pointer-events-none" />
                   
                   <h2 style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.1 }} className="text-3xl md:text-4xl font-bold text-white mb-10">
                      Free <em style={{ fontStyle: "italic", color: "#e879f9" }}>Project Discovery</em> Consultation.
                   </h2>

                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-1 font-sans">Name</label>
                            <input 
                               type="text" 
                               placeholder="Your Full Name" 
                               required
                               style={{ background: "rgba(255,255,255,.022)", border: "1px solid rgba(255,255,255,.06)" }}
                               className="w-full rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#a855f7]/50 transition-all font-medium placeholder:text-white/10"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-1 font-sans">Phone Number</label>
                            <input 
                               type="tel" 
                               placeholder="+91 99999 99999" 
                               required
                               style={{ background: "rgba(255,255,255,.022)", border: "1px solid rgba(255,255,255,.06)" }}
                               className="w-full rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#a855f7]/50 transition-all font-medium placeholder:text-white/10"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-1 font-sans">Service Type</label>
                         <div className="relative">
                            <select 
                               required 
                               style={{ background: "rgba(255,255,255,.022)", border: "1px solid rgba(255,255,255,.06)" }}
                               className="w-full rounded-2xl px-6 py-5 text-white/60 focus:outline-none focus:border-[#a855f7]/50 transition-all font-bold appearance-none cursor-pointer"
                            >
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
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 text-[12px]">▼</div>
                         </div>
                      </div>

                      <button 
                         type="submit"
                         disabled={isSubmitting}
                         className="btn-pill violet-fill w-full py-7 !text-xs !tracking-[.2em] flex items-center justify-center gap-3 active:scale-95 transition-all group overflow-hidden relative"
                      >
                         <span className="relative z-10 flex items-center gap-3">
                           {isSubmitting ? "Engineers Initializing..." : "Initiate Growth Protocol"}
                           {!isSubmitting && <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                         </span>
                      </button>

                      {isSuccess && (
                         <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="p-5 rounded-2xl bg-white/5 border border-[#a855f7]/20 text-[#a855f7] font-bold text-center text-sm"
                         >
                            Protocol Initiated. Our senior strategist will be in touch within 2 hours.
                         </motion.div>
                      )}
                   </form>
                </motion.div>
             </div>
          </div>

          {/* Map Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
             className="mt-24 rounded-[2.5rem] overflow-hidden border border-white/5 relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent z-10 pointer-events-none" />
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.05436069!2d77.55681057!3d13.0366568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d72f81344fd%3A0x620cecce103a5a98!2sDigitech+Avenue!5e0!3m2!1sen!2sin!4v1711964000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.1) opacity(0.8)" }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-filter"
             />
             <div className="absolute bottom-6 right-6 z-20">
                <a 
                   href="https://www.google.com/maps/dir//Digitech+Avenue,+1st+B+St,+Gokula+Extension,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0366568,77.55681057,17z"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn-pill solid !text-[10px] !px-6 !py-3 flex items-center gap-2"
                >
                   Open in Maps <ArrowUpRight className="w-3 h-3" />
                </a>
             </div>
          </motion.div>
       </div>
    </main>
  );
}

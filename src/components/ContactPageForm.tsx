"use client";

import { useState } from "react";
import { Send, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactPageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@digitechavenue.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Transmission error. Please try direct contact.");
      }
    } catch (error) {
      alert("Transmission error. Please try direct contact.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080C14]/80 backdrop-blur-md p-4">
              <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="bg-[#0F1724] border border-[#00E5FF]/30 rounded-[2.5rem] p-10 max-w-md w-full text-center shadow-[0_0_50px_rgba(0,229,255,0.1)] relative"
              >
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="absolute top-6 right-6 p-2 text-[#8A9BB5] hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="w-20 h-20 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00E5FF]/20">
                      <CheckCircle2 className="w-10 h-10 text-[#00E5FF]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Protocol Initiated</h3>
                  <p className="text-[#8A9BB5] font-medium leading-relaxed mb-8">
                    Your request has been received by our senior engineering team. A strategist will contact you within 2 hours.
                  </p>
                  <button 
                      onClick={() => setIsSuccess(false)}
                      className="w-full py-4 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] rounded-2xl font-black text-lg shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                      Return to Studio
                  </button>
              </motion.div>
          </div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6 relative">
        <input type="hidden" name="_subject" value="New High-Performance Discovery Request - DigiTech Avenue" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Identity</label>
               <input 
                  type="text" 
                  name="name"
                  placeholder="Your Full Name" 
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/40 transition-all font-medium text-sm placeholder:text-white/5"
                  required
               />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Global Phone</label>
               <input 
                  type="tel" 
                  name="phone"
                  placeholder="+1 234 567 890" 
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/40 transition-all font-medium text-sm placeholder:text-white/5"
                  required
               />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
               <label className="text-[10px] font-bold text-[#8A9BB5] uppercase tracking-[0.2em] px-1">Organization / Brand</label>
               <input 
                  type="text" 
                  name="business_name"
                  placeholder="Company Name" 
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/40 transition-all font-medium text-sm placeholder:text-white/5"
               />
            </div>
        </div>

        <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold text-[#F0F4FF] uppercase tracking-widest font-mono">Select Desired Engine</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
                "Web Engineering", "Performance Marketing", 
                "E-Commerce Suite", "PPC Domination", 
                "SMM Acceleration", "Brand Identity", 
                "SEO Mastery", "UI/UX Architecture"
            ].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                      type="checkbox" 
                      name="services"
                      value={service}
                      className="w-5 h-5 rounded border-white/10 bg-[#080C14] text-[#00E5FF] focus:ring-[#00E5FF] checked:bg-[#00E5FF] cursor-pointer appearance-none checked:border-[#00E5FF] border transition-all relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[#00E5FF] after:opacity-0 checked:after:opacity-100"
                  />
                  <span className="text-[#8A9BB5] text-sm group-hover:text-[#00E5FF] font-semibold transition-colors">{service}</span>
                </label>
            ))}
            </div>
        </div>

        <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-black text-xl uppercase tracking-tighter hover:scale-[1.02] active:scale-95 shadow-2xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 mt-8 disabled:opacity-50"
        >
            {isSubmitting ? "Initiating Protocol..." : "Launch Discovery Request"}
            {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
        </button>
      </form>
    </>
  );
}

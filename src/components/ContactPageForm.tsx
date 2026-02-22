"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactPageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Convert services array to string if needed, but FormSubmit handles multiple values with same name usually.
    // However, fetch body FormData handles it.

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
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-6">Thank you for submitting. The team will get back to you shortly.</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                    Close
                </button>
            </motion.div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_subject" value="New Consultation Request - DigitechAvenue" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all placeholder:text-slate-400 text-slate-700"
                required
            />
            </div>
            <div className="space-y-2">
            <input 
                type="tel" 
                name="phone"
                placeholder="Phone no." 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all placeholder:text-slate-400 text-slate-700"
                required
            />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
            <input 
                type="text" 
                name="business_name"
                placeholder="Business's Name" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all placeholder:text-slate-400 text-slate-700"
            />
            </div>
        </div>

        <div className="space-y-4 pt-4">
            <h3 className="font-bold text-slate-900 text-lg">Select a Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
            {[
                "Web Development", "Digital Marketing", 
                "E-commerce", "Google Ads (PPC)", 
                "SMM Services", "ORM Services", 
                "SEO Services", "Graphic designing"
            ].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                <input 
                    type="checkbox" 
                    name="services"
                    value={service}
                    className="w-5 h-5 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] cursor-pointer"
                />
                <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{service}</span>
                </label>
            ))}
            </div>
        </div>

        <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold text-lg tracking-wide uppercase hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Send, Calendar } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Contact() {
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
        setTimeout(() => setIsSuccess(false), 5000); // Hide after 5 seconds
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
    <section id="contact" className="py-12 md:py-16 bg-white relative overflow-hidden">
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

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Share Your <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Project Details for</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Project Inquiry - DigitechAvenue" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="group space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-900 shadow-sm"
                  required
                />
              </div>

              <div className="group space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-900 shadow-sm"
                  required
                />
              </div>

              <div className="group space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                <div className="flex items-center gap-3 w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm">
                  <div className="flex items-center gap-2 pr-3 border-r border-gray-300">
                    <span className="relative flex items-center justify-center w-6 h-4 rounded-sm overflow-hidden shadow-sm">
                      <Image src="/flag.png" alt="India" fill className="object-cover" />
                    </span>
                    <span className="text-gray-700 text-sm font-semibold">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter mobile number"
                    className="w-full outline-none text-gray-900 placeholder:text-gray-400 bg-transparent font-medium"
                    required
                  />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-900 shadow-sm min-h-[120px] resize-y"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Profile & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col items-center max-w-sm mx-auto lg:ml-auto lg:mr-0 pt-2 lg:pt-0"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 mb-7 relative border border-slate-100 group">
              <Image 
                src="/shabaz.jpeg" 
                alt="Sayyad Shabaz" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Name Overlay block matching modern consultant tags */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent p-6 pt-12 text-white text-center">
                 <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight drop-shadow-md pb-1">Sayyad Shabaz</h3>
              </div>
            </div>

            {/* Buttons Stack */}
            <div className="flex flex-col gap-4 w-full">
               <a 
                 href="https://wa.me/917996998142"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white font-bold text-[1.15rem] flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
               >
                  <Calendar className="w-[1.35rem] h-[1.35rem]" strokeWidth={2.5} />
                  Schedule a Meeting
               </a>
               
               <a 
                 href="tel:+917996998142"
                 className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-white border-[1.5px] border-slate-200 text-slate-800 font-bold text-[1.15rem] flex items-center justify-center gap-3 shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
               >
                  <Phone className="w-6 h-6 text-slate-700 group-hover:text-[#2563EB]" strokeWidth={2.2} />
                  +91 799 699 8142
               </a>
               
               <a 
                 href="mailto:info@digitechavenue.com"
                 className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-white border-[1.5px] border-slate-200 text-slate-800 font-bold text-[1.15rem] flex items-center justify-center gap-3 shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group"
               >
                  <Mail className="w-6 h-6 shrink-0 text-slate-700 group-hover:text-[#2563EB]" strokeWidth={2.2} />
                  <span className="truncate">info@digitechavenue.com</span>
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

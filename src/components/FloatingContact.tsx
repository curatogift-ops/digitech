"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingContact() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons Container (Desktop + Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:gap-4 pointer-events-none">
        
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-[#F0F4FF] shadow-2xl hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all pointer-events-auto"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917996998142"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group flex items-center gap-3 h-14 bg-[#25D366] rounded-full px-4 shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300 pointer-events-auto"
        >
          <div className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-[150px]">
            <span className="whitespace-nowrap font-bold text-white text-sm pr-1">Chat on WhatsApp</span>
          </div>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </motion.a>
      </div>

      {/* Sticky Bottom Bar (Mobile Only - Book a Call) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden pointer-events-none">
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F1724]/90 backdrop-blur-xl border-t border-[rgba(0,229,255,0.15)] p-4 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto"
            >
              <a 
                href="tel:+917996998142" 
                className="flex-1 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#F0F4FF] gap-2 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#00E5FF]" /> Call Now
              </a>
              <a 
                href="#contact" 
                className="flex-[2] h-12 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] flex items-center justify-center text-[#080C14] gap-2 font-extrabold text-sm shadow-lg shadow-cyan-500/20"
              >
                <Calendar className="w-4 h-4" /> Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

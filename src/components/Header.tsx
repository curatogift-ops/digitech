"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Linkedin, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "E-Commerce", href: "/services/e-commerce" },
      { label: "Graphic Designing", href: "/services/graphic-designing" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Google Ads (PPC)", href: "/services/google-ads" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080C14]/85 backdrop-blur-2xl shadow-lg shadow-black/30 border-b border-[rgba(0,229,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-0.5 tracking-tight text-[#F0F4FF] group-hover:opacity-90 transition-opacity">
              Digitech<span className="text-gradient-cyan">Avenue</span>
              <span className="text-[10px] align-top relative -top-3 text-[#8A9BB5]">®</span>
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group/nav h-full flex items-center">
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[0.95rem] font-medium text-[#8A9BB5] hover:text-[#00E5FF] transition-colors flex items-center gap-1.5"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-[100%] left-0 pt-4 opacity-0 translate-y-2 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-300 z-50">
                    <div className="glass-card-glow py-2 w-[240px] flex flex-col rounded-xl overflow-hidden">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className="px-5 py-3 text-[0.9rem] font-medium text-[#8A9BB5] hover:text-[#00E5FF] hover:bg-white/5 transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="group relative px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] text-sm font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle — Custom Animated Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-[2px] bg-[#F0F4FF] rounded-full transform transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-[2px] bg-[#00E5FF] rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-full h-[2px] bg-[#F0F4FF] rounded-full transform transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full Screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 lg:hidden bg-[#080C14]/98 backdrop-blur-2xl z-40 flex flex-col pt-24"
          >
            <nav className="container mx-auto px-6 flex flex-col gap-2 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdown && setMobileOpen(false)}
                      className="py-4 text-2xl font-bold text-[#F0F4FF] hover:text-[#00E5FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="p-2"
                      >
                        <ChevronDown className={`w-5 h-5 text-[#8A9BB5] transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l border-[rgba(0,229,255,0.2)]"
                      >
                        {link.dropdown.map(drop => (
                          <Link
                            key={drop.label}
                            href={drop.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-base font-medium text-[#8A9BB5] hover:text-[#00E5FF]"
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Mobile contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-white/10 space-y-4"
              >
                <a href="mailto:info@digitechavenue.com" className="flex items-center gap-3 text-[#8A9BB5] hover:text-[#00E5FF] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@digitechavenue.com</span>
                </a>
                <a href="tel:+917996998142" className="flex items-center gap-3 text-[#8A9BB5] hover:text-[#00E5FF] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 799 699 8142</span>
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a href="#" className="text-[#8A9BB5] hover:text-[#00E5FF] transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-[#8A9BB5] hover:text-[#00E5FF] transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="text-[#8A9BB5] hover:text-[#00E5FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 mb-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] text-center font-bold text-lg shadow-lg shadow-cyan-500/30"
                >
                  Start a Project →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

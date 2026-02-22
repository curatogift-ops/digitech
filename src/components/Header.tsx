"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/#services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "E-Commerce", href: "/services/e-commerce" },
      { label: "Graphic Designing", href: "/services/graphic-designing" },
      { label: "Content Writing", href: "/services/content-writing" },
      { label: "Google Ads (PPC)", href: "/services/google-ads" },
      { label: "SMM Service", href: "/services/smm-service" },
      { label: "ORM Service", href: "/services/orm-service" },
      { label: "SEO Services", href: "/services/seo-services" },
    ]
  },
  { 
    label: "Work", 
    href: "/portfolio",
    dropdown: [
      { label: "Websites Portfolio", href: "/portfolio" },
      { label: "Social Media Portfolio", href: "/social-media-portfolio" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100"
          : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full border-b border-slate-800 bg-slate-900 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 h-10 flex items-center justify-between text-xs font-medium text-slate-300">
          <div className="flex items-center gap-6">
            <a href="tel:+917996998142" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 799 699 8142</span>
            </a>
            <a href="mailto:info@digitechavenue.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@digitechavenue.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-60">Follow Us :</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#E1306C] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#1877F2] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-0.5 tracking-tight text-[#111111] group-hover:opacity-90 transition-opacity font-heading">
              Digitech<span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Avenue</span>
              <span className="text-[10px] align-top relative -top-3 text-slate-400">®</span>
            </h2>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group/nav h-full flex items-center">
                <a
                  href={link.href}
                  className="px-4 py-2 text-[1.05rem] font-medium text-[#111111] hover:text-[#2563EB] transition-colors font-body flex items-center gap-1.5"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/nav:rotate-180" />}
                </a>

                {link.dropdown && (
                  <div className="absolute top-[100%] left-0 pt-4 opacity-0 translate-y-2 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-300 z-50">
                    <div className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 border-t-2 border-t-[#dc2626] py-3 w-[250px] flex flex-col">
                      {link.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className="px-6 py-3.5 text-[0.95rem] font-medium text-[#374151] hover:text-[#111111] hover:bg-slate-50 transition-colors"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://wa.me/917996998142"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow font-heading"
            >
              +91 799 699 8142
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-[#111111]" /> : <Menu className="w-6 h-6 text-[#111111]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <a
                    href={link.href}
                    onClick={() => !link.dropdown && setMobileOpen(false)}
                    className="px-4 py-3 text-base font-semibold text-[#6B7280] hover:text-[#111111] rounded-xl hover:bg-slate-50 transition-all font-body flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {link.dropdown && (
                    <div className="pl-6 flex flex-col gap-1 border-l-2 border-slate-100 ml-6 my-2">
                       {link.dropdown.map(drop => (
                          <a 
                            key={drop.label}
                            href={drop.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2.5 text-sm font-medium text-slate-500 hover:text-[#2563EB]"
                          >
                             {drop.label}
                          </a>
                       ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/917996998142"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-center text-sm font-bold shadow-lg shadow-blue-500/30"
              >
                +91 799 699 8142
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, MessageSquare, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "UI/UX Design", href: "/services/graphic-designing" },
      { name: "Mobile Apps", href: "/services/web-development" },
      { name: "SEO & SEM", href: "/services/seo-services" },
      { name: "E-Commerce", href: "/services/e-commerce" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Portfoilo", href: "/portfolio" },
      { name: "Our Process", href: "/#process" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Help Center", href: "/#faq" },
      { name: "Whitepapers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#080C14] pt-20 overflow-hidden border-t border-white/5">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent z-10" />
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/2 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-28">
           
           {/* Logo and Tagline (Left) */}
           <div className="lg:col-span-4 max-w-sm">
              <Link href="/" className="inline-block group mb-6">
                 <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-0.5 tracking-tight text-[#F0F4FF] group-hover:opacity-90 transition-opacity">
                    Digitech<span className="text-gradient-cyan">Avenue</span>
                    <span className="text-[10px] align-top relative -top-3 text-[#8A9BB5]">®</span>
                 </h2>
              </Link>
              <p className="text-[#8A9BB5] text-lg leading-relaxed mb-10">
                 We engineering premium digital experiences that turn visitors into revenue. Stand apart from 99% of agency websites.
              </p>
              
              {/* Newsletter */}
              <div className="relative max-w-xs">
                 <h4 className="text-sm font-bold text-[#F0F4FF] mb-4 uppercase tracking-[0.1em]">Stay Updated</h4>
                 <div className="flex bg-[#0F1724] border border-white/10 p-1.5 rounded-full hover:border-[#00E5FF]/40 transition-all focus-within:border-[#00E5FF]/60 shadow-inner group">
                    <input 
                       type="email" 
                       placeholder="Email Address" 
                       className="flex-1 bg-transparent px-4 py-2 outline-none text-sm text-[#F0F4FF] placeholder:text-[#8A9BB5]"
                    />
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] flex items-center justify-center text-[#080C14] shadow-lg group-hover:scale-95 transition-all">
                       <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Link Columns */}
           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {footerLinks.map((column) => (
                 <div key={column.title}>
                    <h4 className="text-sm font-bold text-[#F0F4FF] mb-6 uppercase tracking-[0.1em]">{column.title}</h4>
                    <ul className="space-y-4">
                       {column.links.map((link) => (
                          <li key={link.name}>
                             <Link href={link.href} className="text-[#8A9BB5] text-sm hover:text-[#00E5FF] transition-colors">{link.name}</Link>
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>

        {/* Contact and Trust Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/5 mb-12">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-[#0F1724] border border-white/10 flex items-center justify-center text-[#00E5FF]">
                  <Mail className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-xs font-bold text-[#F0F4FF] uppercase tracking-wider mb-0.5">Contact</p>
                  <p className="text-[#8A9BB5] text-sm">info@digitechavenue.com</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-[#0F1724] border border-white/10 flex items-center justify-center text-[#00E5FF]">
                  <Phone className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-xs font-bold text-[#F0F4FF] uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-[#8A9BB5] text-sm">+91 799 699 8142</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-[#0F1724] border border-white/10 flex items-center justify-center text-[#00E5FF]">
                  <MapPin className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-xs font-bold text-[#F0F4FF] uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-[#8A9BB5] text-sm">Bengaluru, Karnataka, India</p>
               </div>
            </div>
        </div>

        {/* Socials and Copyright Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 opacity-80">
           <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A9BB5] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A9BB5] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A9BB5] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/917996998142" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8A9BB5] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"><MessageSquare className="w-5 h-5" /></a>
           </div>

           <div className="text-center md:text-right">
              <p className="text-[#8A9BB5] text-sm mb-1 uppercase tracking-wider font-mono">Copyright © {new Date().getFullYear()} DigiTech Avenue.</p>
              <div className="flex items-center justify-center md:justify-end gap-2 text-xs text-[#8A9BB5] mt-1">
                 <ShieldCheck className="w-3.5 h-3.5" />
                 <span>Verified Secure Agency Partner</span>
                 <span className="mx-1">•</span>
                 <Globe className="w-3.5 h-3.5 ml-1" />
                 <span>99.9% Uptime SLA</span>
              </div>
           </div>
        </div>
      </div>

      {/* Extreme bottom line with cyan glow */}
      <div className="h-1 bg-gradient-to-r from-[#00E5FF]/50 via-transparent to-[#00E5FF]/50 animate-pulse" />
    </footer>
  );
}

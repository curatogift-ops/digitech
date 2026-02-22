"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowRight, ChevronRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#18181B] text-white mt-64 md:mt-48 lg:mt-32 font-body">
      
      {/* 1. Floating CTA Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 z-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          {/* Blue Left Border Line */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#2563EB]" />
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-tight font-heading">
              Let&apos;s Get Your Project Started!
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Still waiting for a Website & Digital marketing agency for your Business?
              Call Now! And get the best website development & Digital Marketing services for your business.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 flex-shrink-0 relative z-10">
            <span className="text-[#111111] font-bold text-lg">Just A Call Away!</span>
            <a 
              href="tel:+917996998142"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold text-lg flex items-center gap-3 transition-all hover:-translate-y-1"
            >
              <PhoneCall className="w-5 h-5" />
              <span>+91 799 699 8142</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="pt-64 md:pt-48 lg:pt-40 pb-12 px-4 md:px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               {/* Using text logo if image not available, or placeholder */}
               <h2 className="text-3xl font-extrabold flex items-center gap-1 font-heading">
                 Digitech<span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Avenue</span>
                 <span className="text-[10px] align-top relative -top-3">®</span>
               </h2>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              DigitechAvenue is the Best Website Development & Digital Marketing Company for your Brand & Business. Because We care about your Business as our Business.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "Social Media Marketing", href: "/services/smm-service" },
                { label: "Graphic Designing", href: "/services/graphic-designing" },
                { label: "E-commerce Management", href: "/services/e-commerce" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px] group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] group-hover:text-white transition-all">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/#services" },
                { label: "Contact Us", href: "/contact" },
                { label: "Our Portfolio", href: "/portfolio" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                     <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px] group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] group-hover:text-white transition-all">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@digitechavenue.com" className="flex items-start gap-3 text-gray-300 hover:text-white group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#06B6D4] mt-0.5 transition-colors" />
                  <span className="text-sm">info@digitechavenue.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+917996998142" className="flex items-start gap-3 text-gray-300 hover:text-white group">
                   <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#06B6D4] mt-0.5 transition-colors" />
                   <span className="text-sm">+91 799 699 8142</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-300">
                 <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                 <span className="text-sm leading-relaxed">
                   1st B St, Gokula Extension, Mathikere Extension, Mathikere, Bengaluru, Karnataka 560054
                 </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-end gap-6 mt-12 border-t border-gray-800 pt-8">
           <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] hover:text-white transition-all">
             <Facebook className="fill-current w-5 h-5" /> Facebook
           </a>
           <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] hover:text-white transition-all">
             <Instagram className="w-5 h-5" /> Instagram
           </a>
           <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] hover:text-white transition-all">
             <Linkedin className="fill-current w-5 h-5" /> Linkedin
           </a>
            <a href="https://wa.me/917996998142" className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] hover:text-white transition-all">
             <MessageCircle className="w-5 h-5" /> Whatsapp
           </a>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm font-medium">
          <p>Copyright © 2018-{new Date().getFullYear()} . DigitechAvenue</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
             <Link href="/terms" className="hover:underline decoration-white/50 underline-offset-4">Terms & Conditions</Link>
             <span>:</span>
             <Link href="/privacy" className="hover:underline decoration-white/50 underline-offset-4">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

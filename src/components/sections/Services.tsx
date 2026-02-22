"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Settings, Check } from "lucide-react";

export function Services() {
  const cards = [
    {
      title: "Web Development",
      image: "/services/webdev.png",
      items: [
        "Business Website",
        "E-Commerce Website",
        "Portfolio Website",
        "Online Learning Website",
        "Landing pages",
        "Job Portals",
      ]
    },
    {
      title: "Digital Marketing",
      image: "/services/marketing.png",
      items: [
        "Website Enhancement",
        "Online Marketing",
        "ORM Service",
        "Online Presence",
        "PPC Google Ads",
        "SEO Friendly Content",
      ]
    },
    {
      title: "Graphic Designing",
      image: "/services/design.png",
      items: [
        "Logo Design",
        "Packaging Design",
        "Social Media Creatives",
        "Banner & Poster Design",
        "Brochure Design",
        "Web & App UI Design",
      ]
    },
    {
      title: "E-Commerce",
      image: "/services/ecommerce.png",
      items: [
        "E-Commerce Website",
        "Amazon Listing",
        "Flipkart Listing",
        "Myntra Listing",
        "Facebook Marketplace",
        "Google Marketplace",
      ]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative dotted circles (similar to image) */}
      <div className="absolute top-12 left-8 md:left-[10%] w-[120px] h-[120px] border-[1.5px] border-dashed border-[#ec4899]/30 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute -top-10 right-4 md:right-[20%] w-[180px] h-[180px] border-[1.5px] border-dashed border-[#ec4899]/20 rounded-full animate-[spin_50s_linear_infinite_reverse] pointer-events-none" />
      <div className="absolute bottom-12 left-4 md:left-[15%] w-[150px] h-[150px] border-[1.5px] border-dashed border-[#ec4899]/30 rounded-full animate-[spin_80s_linear_infinite] pointer-events-none" />
      <div className="absolute -bottom-16 right-8 md:right-[5%] w-[200px] h-[200px] border-[1.5px] border-dashed border-[#ec4899]/20 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-full mb-6 shadow-sm z-20 relative"
          >
            <Settings className="w-4 h-4 text-[#ef4444] animate-[spin_4s_linear_infinite]" />
            Featured Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.2] font-heading"
          >
            We provide additional services that will <br className="hidden lg:block" />
            Grow your Business
          </motion.h2>
        </div>

        {/* 4-Column Grid Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white rounded-2xl md:rounded-[2rem] pt-6 md:pt-8 pb-8 md:pb-10 px-3 sm:px-6 flex flex-col items-center shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group relative z-10"
            >
              {/* Illustration Image */}
              <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] mb-4 sm:mb-6 relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 mix-blend-multiply">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill
                  sizes="(max-width: 768px) 110px, 200px"
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-sm" 
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#111111] mb-3 sm:mb-6 text-center font-heading leading-tight w-full max-w-[200px]">
                {card.title}
              </h3>
              
              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3.5 w-full flex-grow">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#374151] font-medium text-[0.675rem] sm:text-[0.95rem] group/item">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#111111] opacity-70 mr-1.5 sm:mr-2.5 mt-0.5 sm:mt-1 flex-shrink-0 group-hover/item:text-[#2563EB] group-hover/item:opacity-100 transition-colors" strokeWidth={3} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

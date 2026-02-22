"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const accordionData = [
  {
    title: "Best Quality Designs",
    content: "Creative designs are a necessity if you want your brand to stand out in today's era. Hence Digitech Avenue provides you designs that depict creativity at its best.",
  },
  {
    title: "24x7 Live Support",
    content: "We provide round-the-clock support to ensure your business runs smoothly without any interruptions. Our team is always ready to assist you.",
  },
  {
    title: "Result Oriented Projects",
    content: "Our strategies are focused entirely on achieving measurable results. We track performance and optimize continuously for your success.",
  },
  {
    title: "Best ROI Techniques",
    content: "We utilize advanced analytics and optimized marketing techniques to ensure you get the maximum return on your investment.",
  },
  {
    title: "Experienced Professionals",
    content: "Our team consists of highly skilled and experienced professionals dedicated to delivering top-tier digital marketing and web development solutions.",
  },
];

export function WhyUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Initialize first item as open

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Text & Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start lg:pr-10 xl:pr-16 lg:pt-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2563EB] leading-[1.2] font-heading mb-4">
              Why Digitech Avenue ?
            </h2>
            <h3 className="text-lg font-bold text-[#374151] mb-6">
              Digitech Avenue - Website Design Company
            </h3>
            
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed text-left mb-10">
              The cutting-edge strategies accompanied with the personalized approach makes Digitech Avenue the best choice for the brands globally. We provide you the complete range of online marketing services from developing a website to converting it to a brand.
            </p>

            {/* Accordion Component */}
            <div className="w-full flex border-t border-slate-200 flex-col">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-slate-200 group">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none transition-colors"
                  >
                    <span className="text-[1.05rem] font-semibold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </span>
                    <span className="ml-4 flex-shrink-0 text-slate-800 transition-transform duration-300">
                      {openIndex === index ? <Minus className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginBottom: 20 },
                          collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#4B5563] text-[0.95rem] leading-relaxed pr-8">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[550px] h-full rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-slate-100 border border-slate-100">
              <Image 
                src="/homepage images/why-us-team.png" 
                alt="Digitech Avenue team collaboration" 
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

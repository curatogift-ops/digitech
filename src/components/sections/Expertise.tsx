"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Expertise() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start lg:pr-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.2] font-heading mb-8">
              We Expertise in Low Cost Website Design Company Digital Services
            </h2>

            <div className="space-y-10">
              {/* Service 1 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  {/* Custom Check Icon matching the screenshot but using theme blue */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2" strokeDasharray="60"/>
                    <circle cx="12" cy="12" r="7" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M9 12.5L11 14.5L15 9.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-2 font-heading tracking-tight">
                    Digital Marketing
                  </h3>
                  <p className="text-[#4B5563] text-sm md:text-base leading-relaxed text-justify">
                    Digitech Avenue offers SEO services, PPC services, social media marketing services, web design services, and many more services. We build strategies for our clients acquisition, engagement & retention that delivers results.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2" strokeDasharray="60"/>
                    <circle cx="12" cy="12" r="7" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M9 12.5L11 14.5L15 9.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-2 font-heading tracking-tight">
                    Web Development
                  </h3>
                  <p className="text-[#4B5563] text-sm md:text-base leading-relaxed text-justify">
                    Digitech Avenue is an Expert Web Development Company And Use The Best Technologies And Platforms in order To Deliver High-Quality Products. We have extensive experience developing sites of all types, complexities and budgets.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-bold text-white bg-[#2563EB] rounded-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              CONTACT US
            </a>
          </motion.div>

          {/* Right Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Background shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-blue-50/60 rounded-l-full -z-10" />

            <div className="relative w-full max-w-[580px] h-full flex items-center gap-4 md:gap-6 pr-4 lg:pr-8">
              {/* Left Image (Taller) */}
              <div className="w-1/2 h-[75%] rounded-[2.5rem] md:rounded-[3.5rem] rounded-bl-sm overflow-hidden shadow-2xl relative z-10 translate-y-4">
                <Image 
                  src="/homepage images/expertise-1.png" 
                  alt="Web Development Discussing" 
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Right Image (Shorter, slightly offset) */}
              <div className="w-1/2 h-[60%] rounded-[2.5rem] md:rounded-[3.5rem] rounded-tr-sm overflow-hidden shadow-2xl relative z-20 -translate-y-8">
                <Image 
                  src="/homepage images/expertise-2.png" 
                  alt="Digital Marketing Team Meeting" 
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

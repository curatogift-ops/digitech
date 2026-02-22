"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "THE TRAVEL BOOK",
    image: "/projects/curato-gift.png",
    bgColor: "bg-[#2563EB]", // Blue to match theme instead of red
  },
  {
    title: "GETWINGS AVIATIONS",
    image: "/projects/rr-trust.png",
    bgColor: "bg-[#111111]", // Black 
  },
  {
    title: "STYLUS ARCADE",
    image: "/projects/sider-lehenga.png",
    bgColor: "bg-[#2563EB]", 
  },
  {
    title: "A SAFE EMBRACE",
    image: "/projects/sider-lehenga.png",
    bgColor: "bg-[#111111]", 
  },
  {
    title: "BEATWISSE",
    image: "/projects/curato-gift.png",
    bgColor: "bg-[#2563EB]", 
  },
  {
    title: "NEXT PRO",
    image: "/projects/rr-trust.png",
    bgColor: "bg-[#111111]", 
  },
];

export function RecentWork() {
  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[1400px]">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563EB] mb-4 font-heading"
          >
            Our Portfolio !
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-[#111111] font-bold font-heading leading-relaxed max-w-3xl mx-auto"
          >
            We work with our partners to let their brand thrive to the best as we strongly believe that "Together, we build better"
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer border border-slate-100 shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              {/* Image Window (The scrolling part) */}
              <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden bg-[#F8FAFC]">
                {/* Scrolling Background Layer */}
                <div 
                  className="w-full h-full bg-top bg-no-repeat transition-all duration-[5s] ease-in-out group-hover:bg-bottom"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: '100% auto'
                  }}
                />
              </div>

              {/* Title Bar Block */}
              <div className={`${project.bgColor} py-5 px-4 text-center w-full transition-colors duration-300`}>
                <h3 className="text-white text-lg sm:text-xl font-bold uppercase font-heading tracking-wide">
                  {project.title}
                </h3>
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-white bg-[#2563EB] rounded-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95"
          >
            EXPLORE MORE
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

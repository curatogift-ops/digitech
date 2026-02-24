"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "THE TRAVEL BOOK",
    image: "/projects/curato-gift.png",
    bgColor: "bg-[#2563EB]",
  },
  {
    title: "GETWINGS AVIATIONS",
    image: "/projects/rr-trust.png",
    bgColor: "bg-[#111111]",
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
  {
    title: "DEWY LUPIN",
    image: "/projects/curato-gift.png",
    bgColor: "bg-[#2563EB]",
  },
  {
    title: "EPICSWP",
    image: "/projects/rr-trust.png",
    bgColor: "bg-[#111111]",
  },
  {
    title: "SAMZAL",
    image: "/projects/sider-lehenga.png",
    bgColor: "bg-[#2563EB]",
  }
];

export function PortfolioContent() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 px-4 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-60" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 mb-6 uppercase tracking-wider"
           >
             Case Studies
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-slate-900 mb-8 leading-tight tracking-tight"
           >
             Our Website Design <br />
             <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Projects</span>
           </motion.h1>


        </div>
      </section>



      {/* 3. PORTFOLIO GRID */}
      <section className="pb-24 pt-4 md:pt-8 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
               {projects.map((project, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                   className="flex flex-col group cursor-pointer border border-slate-100 shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
                 >


                   {/* Title Bar Block */}
                   <div className={`${project.bgColor} py-5 px-4 text-center w-full transition-colors duration-300`}>
                     <h3 className="text-white text-lg sm:text-xl font-bold uppercase font-heading tracking-wide">
                       {project.title}
                     </h3>
                   </div>
                   
                 </motion.div>
               ))}
            </div>
         </div>
      </section>


    </main>
  );
}

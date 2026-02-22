"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Search, TrendingUp, Palette, Smartphone, Megaphone, Share2, ArrowRight, CheckCircle2 } from "lucide-react";

const mainServices = [
  {
    title: "Website Design & Development",
    description: "We build modern, responsive websites designed for speed, SEO, and conversion.",
    icon: Globe,
    features: [
      "Business website design",
      "Custom website development",
      "E-commerce websites",
      "Landing page design",
      "Mobile responsive websites",
      "Website redesign services"
    ],
    footer: "Every website is optimized for Google search and mobile performance."
  },
  {
    title: "SEO Services for Business Growth",
    description: "Our SEO services help businesses rank higher on Google and attract qualified customers.",
    icon: Search,
    features: [
      "Technical SEO optimization",
      "Local SEO for businesses",
      "On-page SEO improvements",
      "Keyword research strategy",
      "SEO content structure",
      "Google indexing setup"
    ],
    footer: "SEO is a long-term growth engine."
  },
  {
    title: "UI/UX Design Services",
    description: "Professional interface design improves user experience and customer trust.",
    icon: Palette,
    features: [
      "Clean modern interfaces",
      "Conversion-focused layouts",
      "Mobile-first designs",
      "Brand-consistent visuals"
    ],
    footer: "Good design builds credibility instantly."
  },
  {
    title: "Digital Marketing Solutions",
    description: "We help businesses grow with targeted marketing strategies.",
    icon: Megaphone,
    features: [
      "Search engine marketing",
      "Social media marketing",
      "Conversion optimization",
      "Analytics tracking"
    ],
    footer: ""
  }
];

export function ServiceContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F9FAFB] relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-semibold text-[#2563EB] mb-6"
           >
             <span className="flex h-2 w-2 relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             Services
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 mb-6 leading-tight"
           >
             Professional Website & <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Digital Marketing Services</span>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
           >
             We provide complete digital solutions for businesses that want strong online presence, better search rankings, and higher customer conversions.
           </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-8 border border-white shadow-sm group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-[#2563EB]" />
                   </div>

                   <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">
                     {service.title}
                   </h2>
                   
                   <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     {service.description}
                   </p>

                   <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                   </ul>

                   {service.footer && (
                     <div className="pt-6 border-t border-slate-100">
                        <p className="text-sm font-semibold text-slate-500 italic">
                          "{service.footer}"
                        </p>
                     </div>
                   )}
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-[#18181B] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Start your project with a <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">free consultation.</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a href="/#contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2">
                    Get Free Consultation <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Smartphone, Zap } from "lucide-react";

export function Benefits() {
  const reasons = [
    { text: "SEO-friendly website architecture", icon: TrendingUp },
    { text: "Fast-loading performance websites", icon: Zap },
    { text: "Modern user experience design", icon: Smartphone },
    { text: "Transparent pricing", icon: CheckCircle2 },
    { text: "Free demo before commitment", icon: Users },
    { text: "Long-term support", icon: CheckCircle2 },
  ];

  const results = [
    { title: "Google rankings", value: "Higher" },
    { title: "Customer trust", value: "Stronger" },
    { title: "Conversion rates", value: "Better" },
    { title: "Online visibility", value: "Wider" },
    { title: "Brand credibility", value: "More" },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[96px] mix-blend-multiply" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-100/50 rounded-full blur-[96px] mix-blend-multiply" />
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Why Choose Us */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[#111111]">
                Trusted Web <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Development Company</span>
              </h2>
              <p className="text-lg text-[#6B7280]">
                Businesses choose Digitech Avenue because we focus on results, not just design. We design websites that look professional and rank on Google.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="font-medium text-[#111111]">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Results That Matter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="p-8 lg:p-10 rounded-3xl bg-white shadow-2xl shadow-blue-900/5 border border-blue-50"
          >
            <div className="space-y-6 text-center mb-8">
               <h3 className="text-2xl font-bold text-[#111111]">Websites Built for Growth</h3>
               <p className="text-[#6B7280]">Our goal is simple: create websites that generate leads. A website is not an expense — it is a business investment.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {results.map((res, index) => (
                 <div key={index} className="p-4 rounded-2xl bg-[#F8FAFC] text-center hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group">
                    <div className="text-sm font-semibold text-[#6B7280] mb-1">{res.title}</div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent group-hover:scale-105 transition-transform">{res.value}</div>
                 </div>
               ))}
            </div>
            
            <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium border border-[#10B981]/20">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Proven Results
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

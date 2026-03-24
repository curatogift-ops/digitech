"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter / Personal",
    price: "₹25,000",
    equivalent: "$300",
    label: "Perfect for Portfolio & Startups",
    features: [
      "5-8 Premium Custom Pages",
      "Full Mobile Optimization",
      "Basic SEO Architecture",
      "Contact Form Integration",
      "Fast 10-14 Day Delivery",
      "1 Month Free Support"
    ],
    accent: "border-white/5",
    buttonText: "Start My Journey",
  },
  {
    name: "Business Engine",
    price: "₹45,000",
    equivalent: "$550",
    label: "Growth Dedicated Platforms",
    popular: true,
    features: [
      "Up to 15 Premium Pages",
      "E-Commerce Functionality",
      "Advanced Lead Capturing",
      "Speed Performance Audit",
      "Advanced SEO Dominance",
      "15-20 Day Delivery",
      "3 Months Premium Support"
    ],
    accent: "border-[#00E5FF]/40 bg-[rgba(0,229,255,0.02)]",
    buttonText: "Accelerate Growth",
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    equivalent: "Scalable",
    label: "SaaS & Scale-Up Solutions",
    features: [
      "Custom SaaS Engineering",
      "Native Mobile Applications",
      "Full Brand Identity Suite",
      "Dedicated Project Manager",
      "Priority API Integrations",
      "Long-term SLA Maintenance",
      "Unlimited Revisions"
    ],
    accent: "border-[#FFD700]/30 bg-[rgba(255,215,0,0.01)]",
    buttonText: "Consult Our Experts",
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-5xl mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-xs font-bold text-[#00E5FF] uppercase tracking-[0.25em] mb-6"
           >
             Transparent Value
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
           >
             Premium Quality. <br />
             <span className="text-gradient-cyan">Strategic Pricing.</span>
           </motion.h1>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto font-medium"
           >
             No hidden fees. No templates. Just high-performance digital engineering that delivers massive ROI.
           </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-[1400px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border ${plan.accent} glass-card hover:-translate-y-2 transition-all duration-500 overflow-hidden group`}
                >
                  {plan.popular && (
                    <div className="absolute top-6 right-8 px-4 py-1.5 rounded-full bg-[#00E5FF] text-[#080C14] text-[0.7rem] font-black uppercase tracking-[0.1em] z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-10">
                     <h3 className="text-xl font-bold text-[#8A9BB5] uppercase tracking-widest mb-2 group-hover:text-[#F0F4FF] transition-colors">{plan.name}</h3>
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl md:text-5xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-[#8A9BB5] text-sm uppercase tracking-widest font-mono"> / {plan.equivalent}</span>
                     </div>
                     <p className="text-sm font-semibold text-[#00E5FF] mb-8 font-mono">{plan.label}</p>
                     
                     <div className="space-y-4 mb-10">
                        {plan.features.map(feat => (
                           <div key={feat} className="flex items-center gap-3 text-[#F0F4FF]">
                              <Check className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                              <span className="text-sm font-medium">{feat}</span>
                           </div>
                        ))}
                     </div>

                     <Link 
                       href="/contact" 
                       className={`w-full py-5 rounded-2xl flex items-center justify-center font-extrabold text-lg gap-2 transition-all ${plan.popular ? 'bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] shadow-lg shadow-cyan-500/20' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                     >
                       {plan.buttonText} 
                       <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                   Common <br /> <span className="text-gradient-cyan">Pricing Inquiries</span>
                 </h2>
                 <p className="text-[#8A9BB5] text-lg font-medium max-w-sm mb-12">
                   Everything you need to know before we engineer your project.
                 </p>
                 <div className="w-20 h-20 rounded-2xl bg-[#0F1724] border border-white/10 flex items-center justify-center text-[#FFD700]">
                    <HelpCircle className="w-10 h-10" />
                 </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                 {[
                   { q: "Is maintenance included in the pricing?", a: "Yes, our Business and Enterprise plans include a specific support period (3 months to 1 year) to ensure smooth operations." },
                   { q: "Can I pay in installments?", a: "We typically work on a 50% deposit and 50% on launch milestone. Longer projects can be split into 3-4 milestone-based payments." },
                   { q: "What is your hourly rate?", a: "We prefer fixed performance-based pricing, but our consulting and maintenance hourly rate is $45-$60 depending on technical requirements." },
                   { q: "Do you offer discounts for non-profits?", a: "Absolutely. We are committed to supporting causes we believe in. Contact us for a specialized charity/NGO rate." }
                 ].map(item => (
                    <div key={item.q} className="p-8 rounded-3xl bg-[#0F1724] border border-white/5 group hover:border-[#00E5FF]/20 transition-all">
                       <h4 className="text-xl font-bold text-white mb-4">{item.q}</h4>
                       <p className="text-[#8A9BB5] leading-relaxed font-medium">{item.a}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative bg-gradient-to-br from-[#0F1724] to-[#080C14] border border-white/5 p-12 md:p-24 rounded-[3.5rem] overflow-hidden text-center"
           >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
              <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 max-w-4xl mx-auto">
                No Commitment. <br />
                <span className="text-gradient-cyan">Just Possibilities.</span>
              </h2>
              <Link 
                href="/contact" 
                className="inline-flex px-12 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#080C14] font-extrabold rounded-full text-lg shadow-2xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                Discuss Your Project Free
              </Link>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

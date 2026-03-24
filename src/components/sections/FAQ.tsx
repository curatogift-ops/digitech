"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our web development and branding projects transition from concept to launch within 4 to 6 weeks. Smaller MVPs can be delivered in as little as 3 weeks depending on complexity.",
  },
  {
    question: "What is your typical pricing structure?",
    answer: "We offer tailored pricing based on project deliverables. Our starter business packages begin with a fixed performance fee, while enterprise solutions are quoted based on technical requirements and timeline.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, DigiTech Avenue is a global-first agency. We have successfully delivered over 200 projects for clients across 7+ countries, utilizing seamless digital collaboration tools.",
  },
  {
    question: "Will my website be SEO-optimized from day one?",
    answer: "Absolutely. SEO is not an afterthought for us — it is built into the site architecture, code, and content from the very first line of development to ensure immediate visibility on Google.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we treat every client relationship as a long-term partnership. We provide monthly maintenance, security updates, and performance optimization to ensure your digital asset never stops growing.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "We specialize in high-impact website redesigns. We take your current site, analyze its performance metrics, and rebuild it into a conversion-focused machine with a modern luxury aesthetic.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#080C14] relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/2 rounded-full blur-[150px] pointer-events-none" />

       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
             
             {/* Left Column: Heading */}
             <div className="lg:col-span-5">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="lg:sticky lg:top-32"
                >
                   <span className="inline-block text-sm font-bold text-[#00E5FF] uppercase tracking-[0.2em] mb-4">
                      Knowledge Base
                   </span>
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F0F4FF] leading-tight mb-6">
                      Have <span className="text-gradient-cyan">Questions?</span> We have Answers.
                   </h2>
                   <p className="text-[#8A9BB5] text-lg max-w-sm mb-10">
                      Everything you need to know about our workflow, pricing, and services.
                   </p>
                   
                   {/* Decorative help icon */}
                   <div className="hidden lg:flex w-24 h-24 rounded-2xl bg-[#0F1724] border border-white/5 items-center justify-center text-[#00E5FF] shadow-lg rotate-6">
                      <HelpCircle className="w-10 h-10" />
                   </div>
                </motion.div>
             </div>

             {/* Right Column: Accordion */}
             <div className="lg:col-span-7 flex flex-col gap-4">
                {faqData.map((item, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className={`group border border-white/5 rounded-2xl transition-all duration-300 ${openIndex === i ? 'bg-[#0F1724] border-[#00E5FF]/30' : 'bg-transparent hover:border-white/10'}`}
                   >
                       <button
                          onClick={() => toggleFAQ(i)}
                          className="w-full text-left px-6 py-6 md:px-8 flex items-start justify-between gap-4"
                       >
                          <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-[#00E5FF]' : 'text-[#F0F4FF] group-hover:text-[#F0F4FF]'}`}>
                             {item.question}
                          </span>
                          <span className={`mt-1 flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'rotate-180 text-[#00E5FF]' : 'text-[#8A9BB5]'}`}>
                             {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                          </span>
                       </button>

                       <AnimatePresence initial={false}>
                          {openIndex === i && (
                             <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                             >
                                <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5">
                                   <p className="text-[#8A9BB5] text-base md:text-lg leading-relaxed">
                                      {item.answer}
                                   </p>
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}

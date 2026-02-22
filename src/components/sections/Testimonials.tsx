"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    name: "Nikhil Kumar",
    initial: "N",
    stars: 5,
    text: "I want to express my experience with DigitechAvenue Digital Marketing for their exceptional work. Their team's expertise is second to none.",
    color: "bg-purple-600",
  },
  {
    name: "Yash",
    initial: "Y",
    stars: 5,
    text: "We partnered with DigitechAvenue to boost our online presence and generate more leads—and the results have been phenomenal. Highly recommended!",
    color: "bg-blue-600",
  },
  {
    name: "Sarah Jenkins",
    initial: "S",
    stars: 5,
    text: "Delighted with the exceptional services! From strategy to execution, they were unparalleled, and their dedication was impressive.",
    color: "bg-pink-600",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight font-heading"
          >
            What Our <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Client&apos;s Say</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mt-6 rounded-full"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-lg flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header (Avatar + Name) */}
              <div className="p-5 lg:p-6 flex items-center gap-4 border-b border-slate-200">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 ${testimonial.color}`}>
                  {testimonial.initial}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{testimonial.name}</h3>
                  <div className="flex text-[#FBBF24] gap-0.5 mt-1.5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body (Review Text) */}
              <div className="p-5 lg:p-6 flex-1">
                <p className="text-[#374151] text-[0.95rem] leading-[1.6]">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

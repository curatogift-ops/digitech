"use client";

import { motion } from "framer-motion";
import { Lightbulb, Info, PenTool, BarChart3, MoveRight } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    icon: BarChart3,
    title: "How SEO Improves Business Growth",
    description: "Learn how search engine optimization drives organic traffic and generates high-quality leads for your business."
  },
  {
    icon: Info,
    title: "Website Mistakes Companies Make",
    description: "Avoid common pitfalls that hurt your website's performance and conversion rates. We break down the top errors."
  },
  {
    icon: PenTool,
    title: "Design Strategies That Increase Sales",
    description: "Discover how user experience and visual design influence customer buying decisions and trust."
  },
  {
    icon: Lightbulb,
    title: "Digital Marketing Best Practices",
    description: "Stay ahead with the latest strategies in digital marketing, from social media to email campaigns."
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100"
          >
            Insights & Knowledge
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 font-heading"
          >
            Learn How to Grow <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Your Business Online</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#6B7280]"
          >
            We believe informed clients make better decisions. Explore insights on key digital topics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex items-start gap-6"
            >
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-50 items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
                <topic.icon className="w-6 h-6 text-[#6B7280] group-hover:text-[#2563EB] transition-colors" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="w-10 h-10 sm:hidden rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                   <topic.icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">{topic.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {topic.description}
                </p>
                <div className="pt-2">
                   <span className="text-sm font-semibold text-[#111111] group-hover:text-[#2563EB] inline-flex items-center transition-colors">
                      Read More <MoveRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

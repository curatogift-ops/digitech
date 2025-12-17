"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Share Your Requirement",
        description: "Tell us what kind of website you need."
    },
    {
        number: "2",
        title: "We Design a Demo for you free of cost",
        description: "Design first, payment later,so you feel confident, safe, and clear from day one."
    },
    {
        number: "3",
        title: "Go Live!",
        description: "Review, approve, and launch your new website."
    }
];

export function Process() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Simple 3-Step Process
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-8 h-8 rounded bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 pt-0.5">
                                    {step.title}
                                </h3>
                            </div>

                            <hr className="w-10 border-blue-200 mb-6" />

                            <p className="text-slate-600 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-32 bg-background text-white relative overflow-hidden">
            <div className="container px-6 mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-12 leading-tight"
                >
                    Let’s build your next <br /> powerful{" "}
                    <span className="relative inline-block px-2">
                        website
                        <svg
                            className="absolute inset-0 w-full h-full text-yellow pointer-events-none"
                            viewBox="0 0 100 60"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            <motion.path
                                d="M5,30 C5,10 95,10 95,30 C95,50 5,50 5,30"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </svg>
                    </span>
                    .
                </motion.h2>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-black text-xl font-bold rounded-full flex items-center gap-3 mx-auto hover:bg-gray-100 transition-colors"
                >
                    Get started <ArrowRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Floating Decor */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"
            />

            {/* 3D Star approximation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 left-10 opacity-50 pointer-events-none"
            >
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neon-purple w-32 h-32">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </motion.div>
        </section>
    );
}

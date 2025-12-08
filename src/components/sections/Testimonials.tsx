"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-24 bg-white text-black rounded-t-[3rem] -mt-10 relative z-20" id="testimonials">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        See how <span className="text-neon-purple">DigitechAvenue</span> transformed businesses around the world.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Card 3: Photo (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-100 rounded-3xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6">
                            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold shadow-sm">
                                Designer at Work
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Client Celebrating */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 bg-slime-green/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="text-center relative z-10">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold text-black mb-2">100% Satisfaction Rate</h3>
                            <p className="text-gray-600">Across 40+ countries</p>
                        </div>
                        {/* Doodles */}
                        <svg className="absolute top-10 right-10 w-12 h-12 text-neon-purple animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <svg className="absolute bottom-10 left-10 w-16 h-16 text-slime-green opacity-50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10,50 Q25,25 50,50 T90,50" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

const benefits = [
    { text: "Fast Delivery", color: "bg-neon-purple" },
    { text: "Pixel-Perfect Design", color: "bg-slime-green" },
    { text: "SEO Friendly", color: "bg-bright-orange" },
    { text: "High-Performance", color: "bg-yellow" },
    { text: "Conversion-Optimized", color: "bg-pink-500" },
    { text: "Fully Responsive", color: "bg-blue-500" },
];

export function Benefits() {
    return (
        <section className="py-32 bg-background text-white relative overflow-hidden">
            <div className="container px-6 mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-16 max-w-4xl mx-auto"
                >
                    Benefits that <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-slime-green">elevate your brand</span> and online identity.
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                            className={`px-8 py-4 rounded-full text-lg md:text-xl font-bold text-black ${benefit.color} cursor-default shadow-lg hover:shadow-xl transition-shadow`}
                        >
                            {benefit.text}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            <section className="relative flex items-center justify-center overflow-visible bg-background pt-24 md:pt-32 pb-20 md:pb-28 px-4">
                {/* Background Gradients/Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-slime-green/10 rounded-full blur-[120px]"
                    />
                    {/* Floating Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                </div>

                <div className="container relative z-10 mx-auto max-w-6xl">
                    {/* Text Content */}
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-slime-green animate-pulse" />
                                <span className="text-sm md:text-base font-medium text-white/80">Available for new projects</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1] mb-3 md:mb-5">
                                Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-slime-green">future</span> of your online presence.
                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                                We create stunning digital experiences that help brands grow. From pixel-perfect designs to high-performance code.
                            </p>

                            {/* Stats/Features Row */}
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                                    <span className="text-base md:text-lg text-white/70">Fast Delivery</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-slime-green" />
                                    <span className="text-base md:text-lg text-white/70">Premium Quality</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex justify-center mb-6">
                                <motion.button
                                    onClick={() => setIsFormOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-base md:text-lg"
                                >
                                    Get Started <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.button>
                            </div>

                            {/* Decorative accent line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "200px" }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="h-1 bg-gradient-to-r from-neon-purple to-transparent rounded-full mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

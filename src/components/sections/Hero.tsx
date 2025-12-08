"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
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

            <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-slime-green animate-pulse" />
                            <span className="text-xs font-medium text-white/80">Available for new projects</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4 md:mb-6">
                            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-slime-green">future</span> of your online presence.
                        </h1>
                        <p className="text-base md:text-lg text-white/60 mb-6 md:mb-8 max-w-lg leading-relaxed">
                            We create stunning digital experiences that help brands grow. From pixel-perfect designs to high-performance code.
                        </p>

                        {/* Stats/Features Row */}
                        <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-neon-purple" />
                                <span className="text-sm md:text-sm text-white/70">Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-slime-green" />
                                <span className="text-sm md:text-sm text-white/70">Premium Quality</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-transform hover:scale-105 flex items-center gap-2 text-sm md:text-base">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Decorative accent line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="h-1 bg-gradient-to-r from-neon-purple to-transparent rounded-full mt-6 md:mt-8"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

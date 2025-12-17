"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Truck, Crown, Clock, Layout } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const heroImages = [
    "/images/projects/Curato.png",
    "/images/projects/RR.png",
    "/images/projects/Security.png",
    "/images/projects/Sidar.png"
];

export function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            <section className="relative flex flex-col pt-20 md:pt-24 pb-0 bg-blue-50 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-20">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
                        >
                            Get Your Business <br className="hidden lg:block" />
                            Online Today <Globe className="inline-block w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-2" />
                        </motion.h1>

                        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                            Professional business websites starting at <span className="font-bold text-slate-900">₹5,000</span> only! e-commerce stores from <span className="font-bold text-slate-900">₹9,999</span>. Fast, responsive, and SEO-ready.
                        </p>

                        {/* CTA Buttons - Outlined Style */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2"
                            >
                                Designs <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all"
                            >
                                Pricing
                            </motion.button>
                        </div>


                    </div>

                    {/* Right Column: Image Presentation */}
                    <div className="flex-1 w-full max-w-[600px] md:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2"
                        >
                            {/* Browser Mockup Header */}
                            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center gap-2 px-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            {/* Content */}
                            <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={heroImages[currentImageIndex]}
                                        alt="Website Preview"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover object-top absolute inset-0"
                                    />
                                </AnimatePresence>
                                {/* Overlay Card Effect (like in reference) */}
                                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] z-10">
                                    <h4 className="text-xl font-serif text-slate-800 mb-1">Our Projects</h4>
                                    <p className="text-xs text-slate-600">Latest Works</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Feature Bar (Dark Blue) */}
                <div className="bg-slate-900 py-8 w-full border-t-4 border-blue-500">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <div className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5">
                                    <Truck className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm md:text-base">Express Delivery</h4>
                                    <p className="text-xs text-white/60">Get online in 3-5 days</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <div className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5">
                                    <Crown className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm md:text-base">Affordable Pricing</h4>
                                    <p className="text-xs text-white/60">Starting at just ₹5000</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <div className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm md:text-base">Support 24/7</h4>
                                    <p className="text-xs text-white/60">We are happy to help you anytime.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <div className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5">
                                    <Layout className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm md:text-base">Advance Designs</h4>
                                    <p className="text-xs text-white/60">SEO optimized & Mobile Friendly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Database, TrendingUp, Smartphone, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Website Development",
        description: "High-performance websites tailored to your brand with modern UX/UI and SEO. Build your own custom website solutions.",
    },
    {
        icon: Database,
        title: "Software Development",
        description: "Robust backends, APIs and scalable systems designed for reliability. Build your own custom software solutions.",
    },
    {
        icon: TrendingUp,
        title: "Consulting",
        description: "Hands-on guidance to plan, audit and accelerate your product roadmap. Get expert guidance on your technology strategy and project management.",
    },
    {
        icon: Smartphone,
        title: "App & Dashboard Development",
        description: "Custom mobile applications and powerful dashboard solutions for data visualization and management.",
    },
];

export function Services() {
    return (
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 left-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-slime-green/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6">
                        Services
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-white/90 mb-3 md:mb-4">
                        Four core offerings to build and scale your product
                    </p>
                    <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
                        From concept to deployment, I deliver end-to-end solutions that drive growth and innovation.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/0 to-slime-green/0 group-hover:from-neon-purple/5 group-hover:to-slime-green/5 transition-all duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex p-3 rounded-2xl bg-white/10 group-hover:bg-neon-purple/20 transition-all duration-300">
                                            <service.icon className="w-8 h-8 text-white group-hover:text-neon-purple transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-neon-purple transition-colors duration-300">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

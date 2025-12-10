"use client";

import { motion } from "framer-motion";
import { Code, Share2, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Website Development",
        description: "Custom websites built with cutting-edge technology. From landing pages to complex web applications.",
        features: [
            "Responsive Design",
            "Fast Performance",
            "SEO Optimized",
            "Modern Tech Stack",
        ],
        gradient: "from-neon-purple to-purple-600",
        iconBg: "bg-neon-purple/20",
        iconColor: "text-neon-purple",
    },
    {
        icon: Share2,
        title: "Social Media Services",
        description: "Grow your brand presence across all social platforms with strategic content and engagement.",
        features: [
            "Content Creation",
            "Brand Strategy",
            "Community Management",
            "Analytics & Insights",
        ],
        gradient: "from-blue-500 to-cyan-500",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-500",
    },
    {
        icon: TrendingUp,
        title: "SEO Services",
        description: "Boost your visibility and rank higher on search engines with our proven SEO strategies.",
        features: [
            "Keyword Research",
            "On-Page SEO",
            "Technical SEO",
            "Link Building",
        ],
        gradient: "from-slime-green to-green-500",
        iconBg: "bg-slime-green/20",
        iconColor: "text-slime-green",
    },
];

export function Services() {
    return (
        <section id="services" className="relative py-20 md:py-32 bg-background overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.3, 0.2],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slime-green/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-slime-green" />
                        <span className="text-sm font-medium text-white/80">Our Services</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6">
                        What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-slime-green">Provide</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
                        Comprehensive digital solutions to elevate your brand and drive growth
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                            <div className="relative h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className={`relative w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-white/70 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                                            <span className="text-sm text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link */}
                                <div className={`flex items-center gap-2 ${service.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <span className="text-sm font-semibold">Learn More</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

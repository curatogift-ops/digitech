"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
    {
        name: "Landing Page",
        price: "2,999",
        description: "Perfect for getting started with a professional online presence",
        features: [
            "Single page design",
            "Responsive layout",
            "SEO optimized",
            "Fast loading",
            "Contact form",
            "Social media integration",
        ],
        popular: false,
    },
    {
        name: "Full Website",
        price: "4,999",
        description: "Complete website solution for your business",
        features: [
            "Multi-page website (5-7 pages)",
            "Custom design",
            "Fully responsive",
            "SEO optimized",
            "Contact forms",
            "Admin panel",
            "Free 1 month support",
            "Fast performance",
        ],
        popular: true,
    },
    {
        name: "E-commerce",
        price: "9,999",
        description: "Full-featured online store to sell your products",
        features: [
            "Product catalog",
            "Shopping cart",
            "Payment integration",
            "Order management",
            "User accounts",
            "Admin dashboard",
            "SEO optimized",
            "Free 2 months support",
        ],
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="relative py-20 md:py-32 bg-background overflow-hidden">
            {/* Background Effects */}
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
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"
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
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6">
                        Pricing
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-white/90 mb-3 md:mb-4">
                        Simple, transparent pricing
                    </p>
                    <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
                        Choose the perfect plan for your business. All plans include quality code and modern design.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className={`relative h-full p-8 bg-white/5 backdrop-blur-md border rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 ${plan.popular ? "border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.4)]" : "border-white/10 hover:border-white/20"
                                }`}>
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 right-8">
                                        <div className="bg-neon-purple text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                                            POPULAR
                                        </div>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-5xl md:text-6xl font-extrabold text-white">₹{plan.price}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-white/70 mb-8">
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-neon-purple" />
                                            </div>
                                            <span className="text-sm md:text-base text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-200 ${plan.popular
                                        ? "bg-neon-purple text-white hover:bg-neon-purple/90"
                                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                                    }`}>
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Website",
        price: "4,999",
        description: "Complete website solution for your business",
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Contact Form",
            "Social Media Integration",
            "1 Year Support",
            "Fast Loading Speed"
        ],
        popular: false,
        category: "Service Website"
    },
    {
        name: "E-commerce",
        price: "9,999",
        description: "Full-featured online store to sell your products",
        features: [
            "Product Management",
            "Payment Gateway",
            "Order Management",
            "Customer Dashboard",
            "Analytics Integration",
            "Mobile Responsive"
        ],
        popular: true, // Data kept, but visual effects removed as requested
        category: "E-commerce"
    },
    {
        name: "Custom App",
        price: "19,999",
        description: "Tailored software solution for complex needs",
        features: [
            "Custom Functionality",
            "Database Design",
            "API Integration",
            "Admin Panel",
            "Scalable Architecture",
            "Priority Support"
        ],
        popular: false,
        category: "Web Application"
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-20 relative overflow-hidden bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                            Simple, transparent pricing
                        </h2>
                    </motion.div>

                    <p className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                        Quality work shouldn&apos;t break the bank.
                    </p>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your business. All plans include quality code and modern design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative p-8 rounded-3xl bg-white transition-all duration-300 border shadow-lg border-gray-100 hover:shadow-xl group"
                        >
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-gray-700">
                                    {plan.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900">₹{plan.price}</span>
                                    <span className="text-slate-500 font-medium">/ project</span>
                                </div>
                                <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                                    {plan.description}
                                </p>

                                <motion.a
                                    href="https://wa.me/918652111486"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </motion.a>
                            </div>

                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 mt-0.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                        <span className="text-sm md:text-base text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

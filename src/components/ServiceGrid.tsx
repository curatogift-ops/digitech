"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Search,
    Share2,
    Database,
    Settings,
    Layout,
    PenTool,
    Image as ImageIcon,
    Type,
    ArrowRight
} from "lucide-react";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: any;
    color: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Website Building",
        description: "Custom-built, high-performance websites that represent your brand and scale with your business.",
        icon: Globe,
        color: "blue"
    },
    {
        id: 2,
        title: "SEO Optimization",
        description: "Dominate search results and drive organic traffic with our data-driven SEO strategies.",
        icon: Search,
        color: "emerald"
    },
    {
        id: 3,
        title: "Social Media Marketing",
        description: "Engage your audience and build a loyal community across all digital social platforms.",
        icon: Share2,
        color: "purple"
    },
    {
        id: 4,
        title: "CRM Solutions",
        description: "Streamline your customer relationships and operations with custom-tailored CRM systems.",
        icon: Database,
        color: "orange"
    },
    {
        id: 5,
        title: "Admin Panels",
        description: "Powerful internal tools designed to give you complete control over your business data.",
        icon: Settings,
        color: "rose"
    },
    {
        id: 6,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful digital products that your users will love using.",
        icon: Layout,
        color: "indigo"
    },
    {
        id: 7,
        title: "Logo Design",
        description: "Unique and memorable visual identities that capture the essence of your business.",
        icon: PenTool,
        color: "amber"
    },
    {
        id: 8,
        title: "Post & Creative Design",
        description: "Stunning graphics for social media and advertising that demand attention.",
        icon: ImageIcon,
        color: "cyan"
    }
];

export function ServiceGrid() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className={`mb-6 inline-flex p-4 rounded-2xl bg-${service.color}-50 text-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8" />
                            </div>

                            {/* Gradient Background Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                                    Explore More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

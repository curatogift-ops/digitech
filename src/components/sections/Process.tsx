"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenLine, Rocket } from "lucide-react";

interface Step {
    id: string;
    number: string;
    title: string;
    description: string;
    details?: string;
    icon: any;
    color: string;
}

const steps: Step[] = [
    {
        id: "01",
        number: "01",
        title: "Share Your Requirement",
        description: "Tell us what kind of website you need.",
        icon: MessageCircle,
        color: "#F59E0B", // Vibrant Saturated Yellow/Amber
    },
    {
        id: "02",
        number: "02",
        title: "Free Demo Design",
        description: "We design a demo for you free of cost.",
        details: "Design first, payment later - so you feel confident, safe, and clear from day one.",
        icon: PenLine,
        color: "#EF4444", // Vibrant Saturated Red
    },
    {
        id: "03",
        number: "03",
        title: "Go Live!",
        description: "Review, approve, and launch your new website.",
        icon: Rocket,
        color: "#06B6D4", // Vibrant Saturated Cyan/Blue
    },
];

export function Process() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold text-[#1e293b] mb-6 tracking-tight"
                    >
                        3 Simple Steps to Launch Your Website
                    </motion.h2>
                    <p className="text-[#64748b] text-base md:text-lg font-medium leading-relaxed">
                        Our easy, risk-free process to get your website up and running in no time.
                    </p>
                </div>

                {/* Process Steps Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Card Wrapper */}
                    <div className="bg-white rounded-[48px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 p-10 md:p-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start relative">
                            {/* Connecting Lines (Desktop) */}
                            <div className="hidden md:block absolute top-[85px] left-[15%] right-[15%] h-[2px] z-0">
                                <div className="w-full h-full flex items-center justify-between">
                                    <div className="w-full h-px bg-slate-200 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300" />
                                    </div>
                                    <div className="w-full h-px bg-slate-200 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300" />
                                    </div>
                                </div>
                            </div>

                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex flex-col items-center text-center relative z-10"
                                >
                                    {/* Circle Badge Design */}
                                    <div className="relative mb-10 group">
                                        {/* Outer Ring (Light Color Background) */}
                                        <div
                                            className="w-[160px] h-[160px] rounded-full flex items-center justify-center p-1"
                                            style={{
                                                backgroundColor: `${step.color}15`,
                                            }}
                                        >
                                            {/* Middle Ring (Solid Color) */}
                                            <div
                                                className="w-full h-full rounded-full flex items-center justify-center p-2"
                                                style={{ backgroundColor: step.color }}
                                            >
                                                {/* Inner White Ring */}
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-3">
                                                    {/* Center Circle (White Background) */}
                                                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                                                        <span className="text-4xl font-black mb-1 text-[#2d3748]">{step.number}</span>
                                                        <div className="w-6 h-6 flex items-center justify-center" style={{ color: step.color }}>
                                                            <step.icon className="w-5 h-5 fill-current" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Side Dots */}
                                        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-5 h-5 rounded-full border-3 border-white shadow-sm flex items-center justify-center bg-white">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: index === 0 ? step.color : "transparent" }} />
                                        </div>
                                        <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 rounded-full border-3 border-white shadow-sm flex items-center justify-center bg-white">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: index === 2 ? "transparent" : step.color }} />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="px-4">
                                        <span className="text-sm font-bold uppercase tracking-[0.2em] mb-3 block" style={{ color: step.color }}>
                                            Step {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-[#1e293b] mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#64748b] text-base leading-relaxed max-w-[280px] mx-auto">
                                            {step.description}
                                            {step.details && <span className="block mt-4 text-sm font-medium opacity-90 leading-relaxed">{step.details}</span>}
                                        </p>
                                    </div>

                                    {/* Connecting Line (Mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden flex flex-col items-center h-16 mt-6">
                                            <div className="w-px h-full bg-slate-200" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 -mt-1" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceGrid } from "@/components/ServiceGrid";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
            <Header />

            {/* Hero Section for Services */}
            <div className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
                            Our Capabilities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Solutions tailored to <br />
                            <span className="text-blue-500">Scale your Business</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10">
                            From concept to code, we provide end-to-end digital services that help modern companies grow, innovate, and lead.
                        </p>
                    </motion.div>
                </div>
            </div>

            <ServiceGrid />

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Delivering Excellence <br />
                                through <span className="text-blue-600">Pure Innovation</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We don't just build websites; we build business tools that solve real problems. Our approach is rooted in deep strategy and executed with master-level engineering.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Cutting-edge technology stack",
                                    "User-centric design methodology",
                                    "Agile delivery & fast turnarounds",
                                    "Dedicated post-launch support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="https://wa.me/918652111486"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
                            >
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden border border-slate-200 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                                {/* Displaying a placeholder-like aesthetic since we don't have an image path here yet */}
                                <div className="p-12 h-full flex flex-col justify-center">
                                    <div className="h-2 w-24 bg-blue-500 rounded-full mb-8" />
                                    <div className="h-10 w-full bg-slate-200 rounded-2xl mb-4" />
                                    <div className="h-10 w-3/4 bg-slate-200 rounded-2xl mb-4" />
                                    <div className="h-40 w-full bg-slate-200 rounded-2xl" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

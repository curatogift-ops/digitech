"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectGrid } from "@/components/ProjectGrid";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
            <Header />
            <div className="pt-32 pb-0">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="max-w-3xl mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Our Digital <br />
                                <span className="text-blue-600">Masterpieces</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                We combine strategy, design, and engineering to build products that redefine industries. Explore our latest work and the impact we&apos;ve created.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <ProjectGrid />
            </div>
            <Footer />
        </main>
    );
}

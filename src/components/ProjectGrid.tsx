"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    size: "large" | "medium" | "small";
}

const projects: Project[] = [
    {
        id: 1,
        title: "Curato",
        category: "Web Development",
        description: "A premium e-commerce experience built for performance and scale.",
        image: "/images/projects/Curato.png",
        size: "large"
    },
    {
        id: 2,
        title: "RRSolutions",
        category: "Fintech",
        description: "Modern financial platform with seamless user flows.",
        image: "/images/projects/RR.png",
        size: "medium"
    },
    {
        id: 3,
        title: "Cyber Shield",
        category: "Security",
        description: "Advanced dashboard for real-time threat monitoring.",
        image: "/images/projects/Security.png",
        size: "small"
    },
    {
        id: 4,
        title: "Sidar Labs",
        category: "Design",
        description: "Creative portfolio for a world-class design agency.",
        image: "/images/projects/Sidar.png",
        size: "medium"
    }
];

export function ProjectGrid() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px] md:auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.21, 0.45, 0.32, 0.9]
                            }}
                            className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 ${project.size === "large" ? "md:col-span-8 md:row-span-2" :
                                project.size === "medium" ? "md:col-span-4 md:row-span-2" :
                                    "md:col-span-4 md:row-span-1"
                                }`}
                        >
                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-transform duration-500">
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold backdrop-blur-md text-blue-300 border border-blue-500/30">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                                            {project.title}
                                        </h3>
                                        <p className="max-w-md text-sm text-slate-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="absolute bottom-8 right-8 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform hover:scale-110 active:scale-95">
                                            <ArrowUpRight className="h-6 w-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

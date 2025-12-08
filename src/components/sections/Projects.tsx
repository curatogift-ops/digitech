"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Curato Gift",
        description: "A luxury gift hampers e-commerce platform featuring premium curated gift baskets for all occasions. Complete online store with product catalog, shopping cart, and seamless checkout.",
        image: "/projects/curato-gift.png",
        tags: ["React", "Next.js", "E-commerce", "Node.js", "MongoDB"],
        liveUrl: "https://www.curatogift.com/",
        category: "E-commerce",
    },
    {
        title: "RR Trust Capital Solutions",
        description: "Integrated finance platform offering loans and DSA partnerships. Features multi-bank network integration, loan application processing, and partner management system.",
        image: "/projects/rr-trust.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
        liveUrl: "https://www.rrtrustcapitalsolutions.com/",
        category: "Finance Platform",
    },
    {
        title: "Sider Lehenga",
        description: "Premium fashion e-commerce platform specializing in designer lehengas and ethnic wear. Features product categories, shopping cart, discount management, and complete checkout system for wedding and festive attire.",
        image: "/projects/sider-lehenga.png",
        tags: ["React", "Next.js", "E-commerce", "Vercel", "Responsive Design"],
        liveUrl: "https://sidar-lehanga.vercel.app/",
        category: "E-commerce",
    },
    {
        title: "Stable & Secure Security Services",
        description: "Professional security guard services website for Ahmedabad. Features service listings, industry solutions, contact forms, and information about residential, corporate, and event security services.",
        image: "/projects/security-services.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Landing Page", "Service Website"],
        liveUrl: "https://curatogift-ops.github.io/security/",
        category: "Service Website",
    },
];

export function Projects() {
    return (
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
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
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"
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
                        Projects
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-white/90 mb-3 md:mb-4">
                        Real work, shipped to production
                    </p>
                    <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
                        Selected builds spanning product sites, full-stack apps and e-commerce. Each card links to production and source.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                {/* Project Image */}
                                <div className="relative h-64 md:h-80 bg-black overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-200"
                                        >
                                            <ExternalLink className="w-6 h-6 text-white" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 md:p-8">
                                    {/* Category Badge */}
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-neon-purple bg-neon-purple/10 border border-neon-purple/20 rounded-full">
                                        {project.category}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-lg border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

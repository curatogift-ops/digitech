"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Curato",
        category: "Web Development",
        image: "/images/projects/Curato.png"
    },
    {
        id: 2,
        title: "RR",
        category: "Digital Solutions",
        image: "/images/projects/RR.png"
    },
    {
        id: 3,
        title: "Security",
        category: "Cybersecurity",
        image: "/images/projects/Security.png"
    },
    {
        id: 4,
        title: "Sidar",
        category: "Web Design",
        image: "/images/projects/Sidar.png"
    }
];

export function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const [isDragging, setIsDragging] = useState(false);

    const onDragEnd = (event: any, info: any) => {
        setIsDragging(false);
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            handleNext();
        } else if (info.offset.x > swipeThreshold) {
            handlePrev();
        }
    };

    return (
        <div className="relative w-full min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-slate-50 py-20">
            {/* Carousel Container */}
            <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center perspective-1000 my-10">
                <AnimatePresence initial={false} mode="popLayout">
                    {projects.map((project, index) => {
                        // Calculate offset from active index
                        // Handle infinite wrap-around visual logic simply by limiting to standard view 
                        // For a proper carousel, we need circular indexing logic for positions
                        // But for 5 items, typically we just render them based on position relative to active

                        let offset = index - activeIndex;

                        // Handle wrapping for correct positioning if needed, 
                        // but simple centering for now.

                        // Improved circular distance logic for rendering
                        const total = projects.length;
                        const distance = (index - activeIndex + total + total / 2) % total - total / 2; // -2, -1, 0, 1, 2 range-ish

                        // We only want to show 3 items: -1, 0, 1 essentially
                        if (Math.abs(distance) > 1) return null;

                        return (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    scale: distance === 0 ? 1 : 0.85,
                                    rotateY: distance * 45, // Increased rotation for better 3D effect
                                    rotateZ: 0,
                                    x: distance * 280, // Adjusted spacing
                                    zIndex: 10 - Math.abs(distance),
                                    opacity: 1,
                                    filter: distance === 0 ? "blur(0px) brightness(1)" : "blur(2px) brightness(0.7)",
                                    cursor: isDragging ? "grabbing" : "grab"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150, // Softer spring
                                    damping: 25,    // Less bouncy
                                    mass: 1
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.05}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={onDragEnd}
                                onClick={() => !isDragging && setActiveIndex(index)}
                                className="absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200"
                                style={{
                                    width: "350px", // Slightly smaller for better mobile fit
                                    height: "500px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover pointer-events-none" // prevent image drag interfering
                                />
                                {distance === 0 && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-white/80 font-medium tracking-widest uppercase text-sm">{project.category}</p>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 mt-12 z-20">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-lg hover:scale-110 active:scale-95 group"
                    aria-label="Previous Project"
                >
                    <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-black" />
                </button>

                <div className="flex gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? "bg-blue-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-lg hover:scale-110 active:scale-95 group"
                    aria-label="Next Project"
                >
                    <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-black" />
                </button>
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
}

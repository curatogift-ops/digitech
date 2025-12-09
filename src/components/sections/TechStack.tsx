"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone } from "lucide-react";

const techCategories = [
    {
        icon: Code2,
        title: "Frontend Development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
        icon: Server,
        title: "Backend Development",
        skills: ["Node.js", "Express", "Python", "Django"],
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        skills: ["React Native", "Flutter", "Mobile-First Design"],
    },
];

export function TechStack() {
    return (
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-slime-green/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/0 to-slime-green/0 group-hover:from-neon-purple/5 group-hover:to-slime-green/5 transition-all duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex p-3 rounded-2xl bg-white/10 group-hover:bg-neon-purple/20 transition-all duration-300">
                                            <category.icon className="w-8 h-8 text-white group-hover:text-neon-purple transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                                        {category.title}
                                    </h3>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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

"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Zap className="w-6 h-6 text-neon-purple fill-neon-purple group-hover:rotate-12 transition-transform" />
                    <span className="text-xl font-bold tracking-tight text-white">
                        digitechavenue
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-white/70 transition-colors rounded-full hover:text-white hover:bg-white/10"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <motion.a
                    href="#pricing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                    Get Started
                </motion.a>
            </div>
        </header>
    );
}

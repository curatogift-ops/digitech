"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
];

export function BottomNav() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-1 px-3 py-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 text-xs md:text-sm font-medium text-white/70 transition-colors rounded-full hover:text-neon-purple hover:bg-white/5"
                    >
                        {item.name}
                    </Link>
                ))}
            </motion.nav>
        </div>
    );
}

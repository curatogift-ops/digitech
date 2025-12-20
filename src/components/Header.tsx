"use client";

import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/#pricing" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                        DigitechAvenue
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors rounded-full hover:text-black hover:bg-black/5"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <motion.a
                    href="https://wa.me/918652111486"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-black/80 transition-colors"
                >
                    Get Started
                </motion.a>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-black hover:bg-black/5 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
                    >
                        <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="px-4 py-3 text-base font-medium text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/918652111486"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="mt-2 px-6 py-3 bg-black text-white text-base font-bold rounded-full hover:bg-black/90 transition-colors text-center"
                            >
                                Get Started
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

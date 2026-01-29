"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        requirement: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@digitechavenue.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Quote Request - DigitechAvenue",
                    _template: "table"
                })
            });

            if (response.ok) {
                // Show success animation
                setIsSubmitted(true);

                // Reset form and close after animation
                setTimeout(() => {
                    setFormData({ name: "", phone: "", requirement: "" });
                    setIsSubmitted(false);
                    onClose();
                }, 1500);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error submitting form. Please check your internet connection.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-md bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute -top-20 -right-20 w-60 h-60 bg-neon-purple/20 rounded-full blur-[80px]"
                                />
                                <motion.div
                                    animate={{
                                        opacity: [0.2, 0.4, 0.2],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-slime-green/10 rounded-full blur-[80px]"
                                />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                            >
                                <X className="w-5 h-5 text-white/70" />
                            </button>

                            {/* Success Animation */}
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-neon-purple/90 to-slime-green/90 backdrop-blur-xl"
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                                delay: 0.2
                                            }}
                                        >
                                            <CheckCircle2 className="w-20 h-20 text-white mb-4" />
                                        </motion.div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-2xl font-bold text-white mb-2"
                                        >
                                            Thank You!
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="text-white/90"
                                        >
                                            We&apos;ll get back to you soon!
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Form Content */}
                            <div className="relative z-10 p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        Let&apos;s Get Started
                                    </h2>
                                    <p className="text-white/60">
                                        Fill in your details and we&apos;ll reach out to you
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>



                                    {/* Phone Input */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    {/* Requirement Dropdown */}
                                    <div>
                                        <label htmlFor="requirement" className="block text-sm font-medium text-white/80 mb-2">
                                            Requirement
                                        </label>
                                        <select
                                            id="requirement"
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all appearance-none"
                                        >
                                            <option value="" className="bg-[#1a1a1a] text-gray-400">Select Service</option>
                                            <option value="website" className="bg-[#1a1a1a]">Website</option>
                                            <option value="app" className="bg-[#1a1a1a]">App</option>
                                            <option value="crm" className="bg-[#1a1a1a]">CRM</option>
                                            <option value="custom-software" className="bg-[#1a1a1a]">Custom Software</option>
                                            <option value="logo" className="bg-[#1a1a1a]">Logo</option>
                                            <option value="digital-marketing" className="bg-[#1a1a1a]">Digital Marketing</option>
                                            <option value="seo" className="bg-[#1a1a1a]">SEO</option>
                                        </select>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3.5 bg-gradient-to-r from-neon-purple to-slime-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-neon-purple/50 transition-all flex items-center justify-center gap-2 mt-6"
                                    >
                                        Send Message <Send className="w-4 h-4" />
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

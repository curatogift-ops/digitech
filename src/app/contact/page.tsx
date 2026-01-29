"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
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
                    _subject: "New Contact Request - DigitechAvenue",
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", phone: "" });
                // Reset success message after 3 seconds
                setTimeout(() => setIsSubmitted(false), 3000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error submitting form.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Get in touch with us. We are here to help you grow your business.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden bg-white rounded-3xl shadow-xl">
                        
                        {/* Map & Info Column */}
                        <div className="bg-slate-900 p-10 text-white relative flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                            
                            {/* Contact Details */}
                            <div className="space-y-8 relative z-10 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Call Us</h3>
                                        <p className="text-slate-300 font-medium">+91 79969 98142</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                                        <p className="text-slate-300">
                                            1st B St, Gokula Extension, Mathikere Extension,<br />
                                            Mathikere, Bengaluru, Karnataka 560054
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="rounded-2xl overflow-hidden h-64 border border-slate-700 relative z-10 shadow-lg">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.993510967397!2d77.55836267597157!3d13.036104713467471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6f1c48545b%3A0xe5a285d68117d919!2sDigitech%20Avenue!5e0!3m2!1sen!2sin!4v1706553812345!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="p-10 lg:p-16 flex items-center">
                            <div className="w-full">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
                                <p className="text-slate-500 mb-8">We will call you back shortly.</p>

                                {isSubmitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3"
                                    >
                                       <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center">✓</div>
                                       <div>
                                            <p className="font-bold">Message Sent!</p>
                                            <p className="text-sm">We will contact you on your provided number.</p>
                                       </div>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                                placeholder="+91 00000 00000"
                                            />
                                        </div>

                                        <button 
                                            type="submit"
                                            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
                                        >
                                            Submit <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

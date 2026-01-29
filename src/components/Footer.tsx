"use client";

import { Zap, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-gray-200 pt-10 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Image 
                                src="/images/Group 115.svg"
                                alt="DigitechAvenue" 
                                width={250} 
                                height={70} 
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Building digital experiences that drive growth and innovation. Expert web development solutions for modern businesses.
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.instagram.com/digitech.avenue/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full border border-gray-200 text-pink-600 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/digitech-avenue-1483473a7/?originalSubdomain=in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full border border-gray-200 text-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/web-development" className="text-slate-600 hover:text-black hover:underline transition-all">Web Development</Link></li>
                            <li><Link href="/services/app-development" className="text-slate-600 hover:text-black hover:underline transition-all">App Development</Link></li>
                            <li><Link href="/services/ui-ux-design" className="text-slate-600 hover:text-black hover:underline transition-all">UI/UX Design</Link></li>
                            <li><Link href="/services/seo-optimization" className="text-slate-600 hover:text-black hover:underline transition-all">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-slate-600 hover:text-black hover:underline transition-all">About Us</Link></li>
                            <li><Link href="/projects" className="text-slate-600 hover:text-black hover:underline transition-all">Projects</Link></li>
                            <li><Link href="/#testimonials" className="text-slate-600 hover:text-black hover:underline transition-all">Testimonials</Link></li>
                            <li><Link href="/contact" className="text-slate-600 hover:text-black hover:underline transition-all">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-slate-600">
                                <Mail className="w-4 h-4" />
                                <span>Info@digitechavenue.com</span>
                            </li>
                            <li className="text-slate-600">
                                1st B St, Gokula Extension, Mathikere Extension, Mathikere, Bengaluru, Karnataka 560054
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} DigitechAvenue. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-sm text-slate-500 hover:text-black transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

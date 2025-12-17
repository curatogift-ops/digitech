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
                                src="/logo.png"
                                alt="DigitechAvenue"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Building digital experiences that drive growth and innovation. Expert web development solutions for modern businesses.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">Web Development</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">App Development</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">UI/UX Design</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">SEO Optimization</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">About Us</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">Projects</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">Testimonials</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-black hover:underline transition-all">Contact</a></li>
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

                <div className="border-t border-gray-200 pt-8 flex justify-center items-center">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} DigitechAvenue. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Code2, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Web Development Services | DigitechAvenue",
    description: "Custom web development services to build fast, responsive, and SEO-friendly websites. React, Next.js, and modern technologies for your business.",
    keywords: ["web development", "website design", "custom websites", "react development", "nextjs developers", "responsive web design"],
    openGraph: {
        title: "Web Development Services | DigitechAvenue",
        description: "Transform your digital presence with our expert web development services.",
        images: ["/homepage images/digitechavenue.logo.png"],
    }
};

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 overflow-hidden relative">
                 {/* Background Elements */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Custom Web <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Development</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            We build high-performance, secure, and scalable websites tailored to your unique business goals using the latest technologies.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Built for Performance & Growth</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A website is more than just an online address; it’s your most powerful marketing tool. We ensure your site drives conversions and engages users.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Blazing Fast Speed</h3>
                                        <p className="text-slate-600">Optimized for speed to ensure low bounce rates and higher search rankings.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Responsive</h3>
                                        <p className="text-slate-600">Flawless experience on all devices, from mobile phones to large desktops.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Scalable</h3>
                                        <p className="text-slate-600">Built with best practices to grow with your business and keep data safe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                             {/* Placeholder for an illustrative image or code snippet mockup */}
                             <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <Code2 className="w-32 h-32 opacity-20" />
                             </div>
                             {/* Abstract Decorative elements */}
                             <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full blur-[80px] opacity-50" />
                             <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-[100px] opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack CTA */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Ready to build your dream website?</h2>
                    <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                        Start Your Project <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

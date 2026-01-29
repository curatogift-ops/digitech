import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Smartphone, Layers, Boxes, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "App Development Services | DigitechAvenue",
    description: "Custom mobile app development for iOS and Android. React Native and Flutter experts building user-centric mobile experiences.",
    keywords: ["app development", "mobile apps", "ios development", "android development", "react native", "flutter", "mobile solutions"],
    openGraph: {
        title: "App Development Services | DigitechAvenue",
        description: "Turn your idea into a powerful mobile application.",
        images: ["/homepage images/digitechavenue.logo.png"],
    }
};

export default function AppDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0F172A] overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">Mobile Solutions</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Smart Mobile <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">App Development</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            We create engaging, intuitive, and feature-rich mobile applications for iOS and Android that users love to use.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-emerald-50 transition-colors">
                            Build Your App <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative h-[600px] bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex items-center justify-center">
                              <Smartphone className="w-40 h-40 text-slate-200" />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500/20 rounded-full blur-[80px]" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience Matters</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                In a mobile-first world, your app needs to stand out. Our development process focuses on performance, usability, and design.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Cross-Platform Excellence</h3>
                                        <p className="text-slate-600">Cost-effective development using React Native & Flutter without compromising quality.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                                        <Boxes className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Architecture</h3>
                                        <p className="text-slate-600">Backend systems designed to handle millions of users and data points.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Performant & Fluid</h3>
                                        <p className="text-slate-600">60 FPS animations and snappy interactions for a premium user feel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Tech Stack CTA */}
             <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Have an app idea?</h2>
                    <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
                        Discuss Your Idea <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

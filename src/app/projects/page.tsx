"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
            <Header />
            <div className="pt-32 pb-16">
                <div className="text-center mb-16 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our Latest <span className="text-blue-600">Masterpieces</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">

                    </p>
                </div>

                <ProjectCarousel />
            </div>
            <Footer />
        </main>
    );
}

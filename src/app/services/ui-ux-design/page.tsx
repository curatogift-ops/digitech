import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Palette, Layout, MousePointerClick,  MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
    title: "UI/UX Design Services | DigitechAvenue",
    description: "User Interface and User Experience design services. We craft beautiful, intuitive, and user-friendly digital products using Figma and modern design principles.",
    keywords: ["ui design", "ux design", "web design", "app design", "prototyping", "wireframing", "figma", "user experience"],
    openGraph: {
        title: "UI/UX Design Services | DigitechAvenue",
        description: "Design that delights users and drives business results.",
        images: ["/homepage images/digitechavenue.logo.png"],
    }
};

export default function UiUxDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-950 overflow-hidden relative">
                 {/* Background Elements */}
                 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-pink-400 font-bold tracking-wider uppercase text-sm mb-4 block">Creative Design</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Design that <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Inspires & Converts</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We blend aesthetics with usability to create digital products that are not only beautiful but also intuitive and effective.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-pink-50 transition-colors">
                            Start Designing <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-6">
                                <Layout className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Wireframing & Prototyping</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Visualizing the structure and flow of your product before writing a single line of code.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                                <Palette className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Visual Design</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Crafting a stunning visual identity with typography, color theory, and modern UI trends.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                                <MousePointerClick className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Interaction Design</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Creating engaging micro-interactions and animations that delight users at every touchpoint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Workflow/Tools Section */}
             <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tools of the Trade</h2>
                         <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                             We use industry-standard tools like Figma, Adobe XD, and Illustrator to deliver pixel-perfect designs that developers love to implement.
                         </p>
                         <ul className="space-y-4">
                             <li className="flex items-center gap-3 text-slate-700 font-medium">
                                 <MonitorPlay className="w-5 h-5 text-indigo-500" />
                                 High-Fidelity Mockups
                             </li>
                             <li className="flex items-center gap-3 text-slate-700 font-medium">
                                 <MonitorPlay className="w-5 h-5 text-indigo-500" />
                                 Interactive Prototypes
                             </li>
                             <li className="flex items-center gap-3 text-slate-700 font-medium">
                                 <MonitorPlay className="w-5 h-5 text-indigo-500" />
                                 Design Systems & Style Guides
                             </li>
                         </ul>
                    </div>
                    <div className="flex-1 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">
                         <h3 className="text-2xl font-bold mb-4">Why Good Design Matters?</h3>
                         <p className="opacity-90 leading-relaxed mb-6">
                             Users form an opinion about your website in 0.05 seconds. 94% of first impressions are design-related. Good design builds trust.
                         </p>
                         <a href="/contact" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors">
                             Audit My Design
                         </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

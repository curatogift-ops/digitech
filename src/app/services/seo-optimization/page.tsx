import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart3, Globe, Search, RefreshCw, LineChart, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "SEO Optimization Services | DigitechAvenue",
    description: "Professional SEO services to improve your search engine rankings, drive organic traffic, and grow your business. On-page, Off-page, and Technical SEO.",
    keywords: ["seo optimization", "search engine optimization", "seo services", "digital marketing", "organic traffic", "seo audit", "technical seo"],
    openGraph: {
        title: "SEO Optimization Services | DigitechAvenue",
        description: "Dominate search results and drive organic traffic.",
        images: ["/homepage images/digitechavenue.logo.png"],
    }
};

export default function SeoOptimizationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-emerald-950 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/20 via-slate-900/0 to-transparent pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">Growth Marketing</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Rank Higher, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Grow Faster</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            Data-driven SEO strategies that put your business in front of the right audience at the right time.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                            Get Free SEO Audit <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete SEO Solutions</h2>
                        <p className="text-slate-600 text-lg">We don&apos;t just guess; we engineer your success through proven methodologies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                         {/* Card 1 */}
                         <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                             <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                                 <Search className="w-8 h-8" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 mb-3">On-Page SEO</h3>
                             <p className="text-slate-600 leading-relaxed text-sm">
                                 Optimizing content, meta tags, headers, and internal structure to make your pages relevant to search queries.
                             </p>
                         </div>
                         
                         {/* Card 2 */}
                         <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                             <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6">
                                 <Settings className="w-8 h-8" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 mb-3">Technical SEO</h3>
                             <p className="text-slate-600 leading-relaxed text-sm">
                                 Improving site speed, mobile-friendliness, crawlability, and indexing to ensure search engines love your site.
                             </p>
                         </div>

                         {/* Card 3 */}
                         <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                             <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-6">
                                 <Globe className="w-8 h-8" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 mb-3">Off-Page SEO</h3>
                             <p className="text-slate-600 leading-relaxed text-sm">
                                 Building high-quality backlinks and domain authority to establish your brand's credibility and trust.
                             </p>
                         </div>
                    </div>
                </div>
            </section>

             {/* Results Section */}
             <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Results That Matter</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                SEO is an investment, not a cost. We focus on metrics that drive actual business value—leads, sales, and revenue.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Target className="w-5 h-5 text-emerald-500" />
                                    Targeted Keyword Ranking
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <LineChart className="w-5 h-5 text-emerald-500" />
                                    Increase Organic Traffic
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <RefreshCw className="w-5 h-5 text-emerald-500" />
                                    Continuous Optimization
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                             <div className="grid grid-cols-2 gap-4">
                                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                                     <div className="text-4xl font-bold text-emerald-600 mb-2">300%</div>
                                     <div className="text-slate-500 text-sm">Traffic Growth</div>
                                 </div>
                                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                                     <div className="text-4xl font-bold text-emerald-600 mb-2">#1</div>
                                     <div className="text-slate-500 text-sm">Page Rankings</div>
                                 </div>
                                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center col-span-2">
                                     <div className="text-4xl font-bold text-emerald-600 mb-2">10k+</div>
                                     <div className="text-slate-500 text-sm">Keywords Ranked</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Settings({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    )
}

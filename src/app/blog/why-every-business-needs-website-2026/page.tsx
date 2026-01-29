
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRef } from "react";

// For client components we must omit export metadata.
// To handle metadata properly in a real app, use layout.tsx or a separate server component wrapper.
// Here we focus on the requested 3D Visuals.

export default function BlogPost() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFDFD] selection:bg-blue-500/30 selection:text-blue-900 overflow-x-hidden">
      <Header />
      
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-purple-400/10 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/blog/main-image.png"
              alt="Professional Website Development"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-[#FDFDFD]" />
          </div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/90 mb-8 font-medium">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">Business Growth</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 29, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              Why Every Business Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Professional Website</span> in 2026
            </h1>

            <div className="flex justify-center gap-4">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Link href="#content" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                   Start Reading
                 </Link>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Content Card */}
      <div id="content" className="relative z-10 -mt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          >
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent opacity-50 rounded-bl-[100px] pointer-events-none" />

            {/* Back Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-12 group"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-colors">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              Back to Insights
            </Link>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="lead text-2xl font-medium text-slate-700 leading-relaxed mb-12 border-l-4 border-blue-500 pl-6">
                In 2026, the first thing customers do before trusting a business is search online. Is your business ready to be found?
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-6">Why a Website Is No Longer Optional</h2>
                <p className="text-slate-600">
                  If your business doesn’t have a professional website, you’re already losing potential customers — even before they contact you. A website is no longer just a digital brochure; it is your <strong>online office, sales executive, and brand representative</strong>, working for your business 24/7.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">1</span>
                Customers Search Before They Trust
              </h3>
              <p className="mb-8">
                Before calling, messaging, or visiting, people Google your business name. A clean, professional website instantly creates confidence and shows that your business is real, active, and reliable.
              </p>
              
              <div className="my-10 grid md:grid-cols-2 gap-6">
                 <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                       Without a Website
                    </h4>
                     <ul className="space-y-3">
                        {['Lost trust immediately', 'Missed potential leads', 'Lower brand value'].map(i => (
                           <li key={i} className="flex items-center gap-3 text-red-800 text-sm font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {i}
                           </li>
                        ))}
                     </ul>
                 </div>
                 <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                       With a Professional Site
                    </h4>
                     <ul className="space-y-3">
                        {['Instant Credibility', '24/7 Lead Collection', 'Higher Conversion Rates'].map(i => (
                           <li key={i} className="flex items-center gap-3 text-green-800 text-sm font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> {i}
                           </li>
                        ))}
                     </ul>
                 </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">2</span>
                 Build Instant Credibility
              </h3>
              <p>
                Your website reflects how serious you are about your business. It tells visitors that you care about quality and customer experience.
              </p>

              {/* Secondary Image with 3D Float */}
              <motion.div 
                 whileHover={{ y: -5 }}
                 className="relative aspect-[16/6] w-full my-12 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/blog/secondary-image.png"
                  alt="Business Growth Strategy"
                  fill
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-white font-medium">
                    Modern Solutions for Modern Businesses
                 </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">3</span>
                 Your Silent Salesperson
              </h3>
              <p>
                Unlike social media or physical offices, a website works day and night. It explains your services automatically and collects leads even while you sleep.
              </p>

              {/* Enhanced CTA Section */}
              <div className="mt-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-6">Ready to Grow with Digitech Avenue?</h3>
                   <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="flex-1">
                         <p className="text-slate-300 mb-6">
                             We don&apos;t just build websites; we build business solutions. Get a dynamic, e-commerce ready site starting at just <span className="text-green-400 font-bold">₹4,999</span>.
                         </p>
                         <div className="flex flex-wrap gap-3">
                            {['Pay After Demo', 'Zero Risk', 'Mobile Friendly'].map(tag => (
                               <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/5">{tag}</span>
                            ))}
                         </div>
                      </div>
                      <div className="flex flex-col gap-4 justify-center min-w-[200px]">
                          <Link 
                            href="/services" 
                            className="w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50"
                          >
                            View Services
                          </Link>
                          <Link 
                            href="https://wa.me/917996998142" 
                            target="_blank"
                            className="w-full text-center px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                          >
                            WhatsApp Us <ChevronRight className="w-4 h-4" />
                          </Link>
                      </div>
                   </div>
                   <div className="pt-6 border-t border-white/10 flex items-center justify-between text-sm text-slate-400">
                      <span>Limited time offer for 2026</span>
                      <Link href="/" className="hover:text-white transition-colors">Visit Homepage</Link>
                   </div>
                </div>
              </div>

            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </main>
  );
}


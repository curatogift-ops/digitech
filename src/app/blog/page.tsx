
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Metadata cannot be exported from a "use client" file.
// We'll move metadata to a layout or separate file if strictly needed by Next.js App Router rules.
// For this single-file "use client" conversion, we omit the export metadata or handle it in a parent layout.
// Since this was previously a server component, we should strictly split this if we want metadata. 
// However, for the sake of the visual design requested (which needs heavy interactivity), 
// we will make this a client component. 
// USER NOTE: You may need to add metadata in a separate layout.tsx for this route if SEO title is critical here.

const blogPosts = [
  {
    title: 'Why Every Business Needs a Professional Website in 2026',
    slug: 'why-every-business-needs-website-2026',
    excerpt: 'In 2026, a website is no longer just a digital brochure. It is your online office, sales executive, and brand representative working 24/7.',
    date: 'January 29, 2026',
    readTime: '5 min read',
    image: '/images/blog/main-image.png',
    category: 'Business Growth',
  },
];

function Card({ post }: { post: typeof blogPosts[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-900/40"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl">
        {/* Image Container with 3D Tilt Effect feel */}
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-64 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full relative"
          >
             <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
            
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-md rounded-full shadow-lg border border-blue-400/30">
                {post.category}
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
            <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-bold text-blue-600 group/btn"
            >
              Read Full Article 
              <span className="ml-2 p-1 bg-blue-50 rounded-full transition-transform group-hover/btn:translate-x-1 group-hover/btn:bg-blue-100">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-[40%] h-[40%] bg-pink-400/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Digitech Avenue Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Resources
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Unlock the secrets of web development, business growth, and digital strategy. 
              Read expert takes on navigating the digital landscape in 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-12 px-6 pb-32">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {blogPosts.map((post) => (
              <Card key={post.slug} post={post} />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
               <p className="text-slate-400 font-medium">More articles coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}


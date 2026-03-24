"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Sparkles, Search, ArrowUpRight } from "lucide-react";

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
  {
     title: 'Mastering SEO: The 2026 Conversion Roadmap',
     slug: 'mastering-seo-2026',
     excerpt: 'How to navigate the evolving search landscape and turn search traffic into loyal customers with advanced schema and performance.',
     date: 'February 12, 2026',
     readTime: '8 min read',
     image: '/images/blog/seo-image.png',
     category: 'SEO Strategy',
  },
  {
     title: 'UI/UX Design Trends for High-Conversion SaaS',
     slug: 'ui-ux-design-trends-2026',
     excerpt: 'Discover the aesthetics and functional patterns that are defining the next generation of premium software interfaces.',
     date: 'March 05, 2026',
     readTime: '6 min read',
     image: '/images/blog/ui-ux-image.png',
     category: 'Design Engineering',
  }
];

function BlogCard({ post, index }: { post: typeof blogPosts[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full rounded-[2.5rem] border border-white/5 bg-[#0F1724]/40 backdrop-blur-xl overflow-hidden hover:border-[#00E5FF]/30 transition-all duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 229, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col overflow-hidden">
        {/* Image */}
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-64 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full relative bg-[#080C14] flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-grid-pattern opacity-20" />
             <Sparkles className="w-12 h-12 text-[#00E5FF]/20" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] to-transparent opacity-60" />
             
             <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#080C14] bg-[#00E5FF] rounded-full shadow-lg">
                  {post.category}
                </span>
             </div>
          </motion.div>
        </Link>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow relative z-20">
          <div className="flex items-center gap-6 text-[0.7rem] font-bold text-[#8A9BB5] mb-4 uppercase tracking-[0.15em] font-mono">
             <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#00E5FF]" /> {post.date}</span>
             <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#00E5FF]" /> {post.readTime}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight group-hover:text-[#00E5FF] transition-colors tracking-tight">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-[#8A9BB5] text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-6 border-t border-white/5">
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00E5FF] group/btn"
            >
              Examine Article 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden pt-32 pb-20 md:pt-44 md:pb-32">
       {/* Background Grid & Glows */}
       <div className="absolute inset-x-0 top-0 h-[600px] bg-grid-pattern opacity-10 pointer-events-none" />
       <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />

       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-[1400px]">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-xs font-bold text-[#00E5FF] uppercase tracking-[0.25em] mb-8"
             >
                <Sparkles className="w-4 h-4" />
                <span>Intelligence & Strategy</span>
             </motion.div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
               Advanced Insights <br />
               <span className="text-gradient-cyan">For Digital Domination</span>
             </h1>
             
             <p className="text-lg md:text-xl text-[#8A9BB5] leading-relaxed max-w-2xl mx-auto font-medium">
               Expert strategies on web engineering, performance marketing, and the future of the digital economy.
             </p>
          </div>

          {/* Search Bar (Fake/Visual) */}
          <div className="max-w-xl mx-auto mb-20 relative px-4">
             <div className="absolute inset-0 bg-[#00E5FF]/10 blur-2xl opacity-20" />
             <div className="relative flex items-center bg-[#0F1724] border border-white/5 rounded-2xl p-2 focus-within:border-[#00E5FF]/30 transition-all">
                <Search className="w-5 h-5 text-[#8A9BB5] ml-4" />
                <input 
                   type="text" 
                   placeholder="Search library..." 
                   className="flex-1 bg-transparent px-4 py-3 outline-none text-sm text-white font-medium placeholder:text-[#8A9BB5]/50" 
                />
                <button className="px-6 py-3 bg-[#080C14] border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-[#00E5FF]">Filter</button>
             </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* Empty Space / Pagination stub */}
          <div className="mt-24 text-center">
             <div className="inline-flex items-center gap-4 text-[#8A9BB5] text-xs font-bold uppercase tracking-[0.2em] font-mono">
                <span className="w-10 h-[1px] bg-white/10" />
                End of Library
                <span className="w-10 h-[1px] bg-white/10" />
             </div>
          </div>
       </div>
    </main>
  );
}

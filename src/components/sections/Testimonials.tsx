"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
    name: string;
    time: string;
    rating: number;
    review: string;
    badge?: string;
}

const reviews: Review[] = [
    {
        name: "Lalit Kumar",
        time: "3 weeks ago",
        rating: 5,
        review: "Good experience and timely delivery with clear communication. Very professional service provider. Best experience ever.",
        badge: "New"
    },
    {
        name: "Sumaiya Syed",
        time: "2 weeks ago",
        rating: 5,
        review: "Great experience, genuine service. First I thought this was fake, but they built my trust. Achha service hai.",
        badge: "New"
    },
    {
        name: "Faizan Khan",
        time: "2 weeks ago",
        rating: 5,
        review: "Professional team with a clear strategy and timely delivery. They focus on results and communicate well. Reliable digital marketing agency.",
        badge: "New"
    },
    {
        name: "Sruthilaya",
        time: "2 weeks ago",
        rating: 5,
        review: "Professional service and smooth experience. Happy with the results.",
        badge: "New"
    },
    {
        name: "Vasim Khatri",
        time: "15 hours ago",
        rating: 5,
        review: "Great web development service with clean design and smooth functionality. Fast loading and works perfectly on mobile and computer. Very satisfied.",
        badge: "New"
    },
    {
        name: "Antique World House",
        time: "2 weeks ago",
        rating: 4,
        review: "Good service.",
        badge: "New"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/50 blur-[100px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-200/50 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-6"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="font-bold text-slate-700 text-sm">Rated 5.0 on Google Reviews</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#64748b] text-lg font-medium leading-relaxed"
                    >
                        Success stories from businesses we&apos;ve helped grow.
                    </motion.p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Google Icon */}
                            <div className="absolute top-8 right-8 w-8 h-8">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} 
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                                &quot;{review.review}&quot;
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

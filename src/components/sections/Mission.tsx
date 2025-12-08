"use client";

import { motion } from "framer-motion";

export function Mission() {
    return (
        <section className="py-24 bg-white text-black rounded-t-[3rem] -mt-10 relative z-20">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                    >
                        We create <span className="text-neon-purple">stunning digital experiences</span> that help <span className="text-slime-green">brands grow</span>.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}

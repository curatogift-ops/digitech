"use client";

import { motion } from "framer-motion";

export function Consultation() {
  const stats = [
    { value: "1,600+", label: "PROJECTS COMPLETED" },
    { value: "300+", label: "ACTIVE CLIENTS" },
    { value: "7+", label: "COUNTRIES" },
    { value: "5+", label: "YEARS EXPERIENCE" },
  ];

  return (
    <section id="consultation" className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col justify-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] font-heading mb-3">
                Get A FREE Consultation!
              </h2>
              <p className="text-[#374151] font-medium text-base">
                Connect with us and start your Digital Journey...
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm"
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="relative">
                <select
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm appearance-none text-slate-500"
                  required
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphic-designing">Graphic Designing</option>
                  <option value="e-commerce">E-Commerce</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Business's Name"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="City/Country"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm"
                />
              </div>

              {/* Row 4 */}
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-colors text-sm resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#2563EB] text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 active:scale-[0.98]"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* RIGHT: Text Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center lg:pl-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.2] font-heading mb-6">
              We always solve better <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Digital Marketing Solution</span>
            </h2>
            
            <p className="text-base sm:text-[1.05rem] text-[#4B5563] leading-relaxed mb-12 max-w-2xl">
              It is not enough to build a reputation online; moreover you also have to maintain it. We not only help you reach the customers, but also educate them on your brand. With time, you will have a loyal customer base.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-extrabold text-[#2563EB] mb-2 font-heading tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[0.75rem] font-bold text-[#6B7280] uppercase tracking-wider leading-tight w-min md:w-auto">
                    {stat.label.split(" ").map((word, i) => (
                      <span key={i} className="block md:inline">{word} </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

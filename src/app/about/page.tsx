import type { Metadata } from "next";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DigitechAvenue",
  description: "DigitechAvenue is a professional website design and digital solutions agency dedicated to helping businesses establish a strong, credible, and results-driven online presence.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06B6D4]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            We Build Digital Assets That <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Drive Business Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            DigitechAvenue is a professional website design and digital solutions agency dedicated to helping businesses establish a strong, credible, and results-driven online presence.
          </p>
        </div>
      </section>

      {/* Intro & Who We Are Section */}
      <section className="relative z-20 -mt-16 md:-mt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Who We Are */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#2563EB] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">Who We Are</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We partner with startups, entrepreneurs, and growing businesses that seek more than just a visually appealing website.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our work combines strategic thinking, modern design, and performance-driven development to create digital platforms that attract attention, build trust, and generate enquiries.
              </p>
            </div>

            {/* Card 2: Our Commitment */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#06B6D4] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#06B6D4] transition-colors">Our Commitment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe a successful website should do more than exist — it should <strong>perform</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment is to build digital assets that strengthen your brand image, improve customer trust, and contribute directly to your business success.
              </p>
            </div>

            {/* Card 3: What We Do */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#2563EB] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">What We Do</h3>
              <p className="text-slate-600 mb-4 text-sm">DigitechAvenue provides end-to-end digital solutions tailored to your brand:</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                {[
                  "Custom Website Design & Development",
                  "Business, Portfolio & eCommerce Websites",
                  "Website Redesign & Optimization",
                  "SEO-Friendly Website Structure",
                  "Landing Pages & Lead Funnels",
                  "UI/UX Design & Branding"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-2 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              A Structured & Transparent Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a proven workflow to ensure clarity, consistency, and measurable outcomes at every stage of the project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                id: "01",
                title: "Understand",
                desc: "We dive deep into your business goals, audience, and requirements."
              },
              {
                id: "02",
                title: "Plan",
                desc: "We create a strategic roadmap and wireframes tailored to your needs."
              },
              {
                id: "03",
                title: "Design",
                desc: "Our team crafts modern, visually appealing, and user-friendly designs."
              },
              {
                id: "04",
                title: "Develop",
                desc: "We build your platform using the latest technologies for speed and scalability."
              },
              {
                id: "05",
                title: "Optimize",
                desc: "We ensure SEO-readiness, performance, and mobile responsiveness."
              },
              {
                id: "06",
                title: "Launch",
                desc: "We deploy your project and provide support to ensure a smooth takeoff."
              }
            ].map((step, idx) => (
              <div key={step.id} className="relative pl-4 group">
                <div className="absolute top-0 left-0 text-6xl font-bold text-slate-100 -z-10 group-hover:text-slate-200 transition-colors select-none">
                  {step.id}
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors">{step.id}. {step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message & Compelling Reasons */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content: Why Choose Us */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Businesses Choose <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">DigitechAvenue</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Businesses work with us because we prioritise outcomes, not just deliverables. We treat each website as a growth investment, not a routine project.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Tailored, Custom-Built Solutions", content: "We don't rely on generic templates. We build solutions that fit your specific business needs." },
                  { title: "Modern, Premium Design Standards", content: "Your website is your digital face. We ensure it looks professional, credible, and premium." },
                  { title: "Conversion-Focused Strategy", content: "We design with the end-goal in mind: turning visitors into paying customers." },
                  { title: "SEO-Ready Development", content: "Our development practices ensure your site is ready to rank and perform well on search engines." },
                  { title: "Clear Communication & Reliability", content: "We believe in transparency. You'll always know where your project stands." },
                  { title: "On-Time Delivery", content: "We value your time. We stick to deadlines and deliver high-quality work on schedule." },
                  { title: "Ongoing Support & Partnership", content: "We are in it for the long haul, providing support even after the project is live." },
                ].map((item, idx) => (
                  <details key={idx} className="group bg-white rounded-xl border border-slate-200 open:border-[#2563EB] transition-colors">
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-semibold text-slate-800 marker:hidden">
                      <span>{item.title}</span>
                      <span className="text-[#2563EB] group-open:rotate-45 transition-transform duration-300 font-bold text-2xl leading-none">+</span>
                    </summary>
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-2">
                      {item.content}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            
            {/* Right Side - Founder's Message */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 p-8 md:p-10">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -z-0" />
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Founder’s Message</h3>
                  <blockquote className="text-slate-600 italic leading-relaxed mb-6">
                    &quot;DigitechAvenue was created with a simple belief — businesses deserve websites that genuinely help them grow, not just look good. Every project we take on is approached with responsibility, precision, and a focus on results. Our goal is to deliver work that our clients are proud to present and confident to scale with.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4 mt-8">
                     <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">D</div>
                     <div>
                        <p className="font-bold text-slate-900">Founder</p>
                        <p className="text-sm text-slate-500">DigitechAvenue</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2563EB]/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#06B6D4]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="max-w-xl">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Let’s Build Something That Works</h2>
                     <p className="text-slate-300 text-lg mb-2">Whether you are launching a new venture, upgrading your online presence, or optimising for growth.</p>
                     <p className="text-slate-400">DigitechAvenue is ready to help you move forward with confidence.</p>
                  </div>
                  <div className="flex flex-col items-center gap-4 shrink-0">
                     <p className="text-slate-300 font-semibold">Just A Call Away!!</p>
                     <a 
                        href="tel:+917996998142" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                     >
                        <Phone className="w-5 h-5" />
                        <span>+91 799 699 8142</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

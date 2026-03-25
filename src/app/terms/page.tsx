"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Globe, CreditCard, Clock, AlertCircle, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Services Overview",
      content: "Digitech Avenue provides digital services including but not limited to Website Design & Development, Social Media Management, Content Creation, Logo Design, and Ads & Branding. Specific deliverables, timelines, and pricing are discussed and finalized before project initiation.",
      icon: <Globe className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "2. Project Initiation & Payment",
      content: [
        "All projects require an advance payment to initiate work.",
        "The advance amount confirms project booking and resource allocation.",
        "Advance payments are non-refundable once work has started.",
        "Payment structure may vary based on project size and will be communicated clearly."
      ],
      icon: <CreditCard className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "3. Pricing & Revisions",
      content: [
        "Prices are based on agreed scope and requirements.",
        "Minor revisions are included as per the selected package.",
        "Additional changes or features outside scope may incur extra charges."
      ],
      icon: <FileText className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "4. Client Responsibilities",
      content: [
        "Provide accurate content, materials, and approvals on time.",
        "Respond promptly to avoid delays.",
        "Maintain respectful and professional communication.",
        "Delays caused by missing inputs may impact delivery timelines."
      ],
      icon: <Clock className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "5. Intellectual Property & Ownership",
      content: "All designs, source files, website files, creatives, and code created by Digitech Avenue remain our intellectual property until full payment is received. Upon completion and final payment, ownership rights are transferred to the client as per the agreed scope.",
      icon: <Shield className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "6. Website Deployment & Hosting",
      content: [
        "If hosting is provided by Digitech Avenue, the website remains hosted with us until project completion.",
        "Migration to third-party hosting is supported after final payment.",
        "Hosting-related issues from third-party providers are not our responsibility."
      ],
      icon: <Globe className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "7. Confidentiality",
      content: "Both parties agree to maintain confidentiality of shared information, data, and credentials unless legally required.",
      icon: <Shield className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "8. Delays, Holds & Termination",
      content: [
        "Digitech Avenue reserves the right to pause a project if payments are delayed.",
        "Terminate services in case of non-payment, policy violations, or abusive behavior.",
        "In such cases, completed work remains the property of Digitech Avenue."
      ],
      icon: <AlertCircle className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "9. Refund & Cancellation Policy",
      content: [
        "Advance payments are non-refundable.",
        "Refunds, if applicable, are evaluated on a case-by-case basis.",
        "No refunds are provided for completed or partially completed work."
      ],
      icon: <CreditCard className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "10. Limitation of Liability",
      content: "Digitech Avenue is not liable for business losses due to website downtime, third-party tool, hosting, or platform issues, or client-provided content or legal compliance.",
      icon: <AlertCircle className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "11. Legal Compliance & Disputes",
      content: [
        "Digitech Avenue operates ethically and lawfully.",
        "Any disputes shall first be attempted to resolve mutually.",
        "All disputes are subject to the jurisdiction of India."
      ],
      icon: <Shield className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "12. Modifications to Terms",
      content: "Digitech Avenue reserves the right to update these Terms & Conditions at any time. Continued use of services implies acceptance of updated terms.",
      icon: <FileText className="w-5 h-5 text-[#FFD700]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#080C14] text-[#F0F4FF] overflow-x-hidden pt-32 pb-20 md:pt-44 md:pb-32">
       {/* Background Grid & Glows */}
       <div className="absolute inset-x-0 top-0 h-[600px] bg-grid-pattern opacity-10 pointer-events-none" />
       
       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-[0.65rem] font-black text-[#00E5FF] uppercase tracking-[0.25em] mb-8"
             >
                Legal Framework
             </motion.div>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                Terms & <br />
                <span className="text-gradient-cyan">Conditions.</span>
             </h1>
             <p className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto font-medium">
                Our operational protocols designed to ensure transparency, professionalism, and mutual growth for every partnership.
             </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
             {sections.map((section, index) => (
                <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.05, duration: 0.5 }}
                   className="group glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-[#00E5FF]/20 transition-all duration-300"
                >
                   <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="p-4 rounded-2xl bg-[#0F1724] border border-white/5 group-hover:border-[#00E5FF]/40 transition-colors">
                         {section.icon}
                      </div>
                      <div className="flex-1">
                         <h2 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-[#00E5FF] transition-colors leading-tight">
                            {section.title}
                         </h2>
                         <div className="text-[#8A9BB5] leading-relaxed font-medium">
                            {Array.isArray(section.content) ? (
                               <ul className="space-y-4">
                                  {section.content.map((item, i) => (
                                     <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2.5 shrink-0 opacity-40" />
                                        <span className="text-sm md:text-base">{item}</span>
                                     </li>
                                  ))}
                               </ul>
                            ) : (
                               <p className="text-sm md:text-base">{section.content}</p>
                            )}
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Contact Support Footer Card */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mt-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0F1724] to-[#080C14] border border-white/5 text-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-bl-full pointer-events-none" />
             <h2 className="text-3xl font-extrabold text-white mb-6">Verification Needed?</h2>
             <p className="text-[#8A9BB5] text-lg mb-10 max-w-xl mx-auto font-medium">
                If you have any questions regarding these operational protocols, our legal team is available for clarification.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                   href="tel:+917996998142" 
                   className="flex items-center gap-3 px-8 py-4 bg-[#080C14] border border-white/10 rounded-full text-[#F0F4FF] font-bold hover:bg-white/5 transition-all shadow-lg"
                >
                   <Phone className="w-5 h-5 text-[#00E5FF]" />
                   <span>+91 799 699 8142</span>
                </a>
                <Link 
                   href="/contact" 
                   className="flex items-center gap-2 text-[#00E5FF] font-bold hover:gap-3 transition-all"
                >
                   Institutional Inquiries <ArrowUpRight className="w-5 h-5" />
                </Link>
             </div>
          </motion.div>
       </div>
    </main>
  );
}

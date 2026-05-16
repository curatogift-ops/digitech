"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Database, Cookie, Bell, Phone, ArrowUpRight, UserCheck, FileLock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Privacy Commitment",
      content: "At DigiTech Avenue, we recognize the importance of your digital privacy. This policy outlines our protocols for collecting, using, and safeguarding the personal information you entrust to us when interacting with our digital platforms and services.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "2. Information We Collect",
      content: [
        "Personal Identifiers: Name, email address, phone number, and company details provided via inquiry forms.",
        "Usage Data: IP addresses, browser types, device identifiers, and page interaction statistics.",
        "Professional Context: Information regarding your project requirements and business goals shared during discovery calls.",
        "Cookies: Small data files used to enhance site performance and analyze traffic patterns."
      ],
      icon: <Database className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "3. Strategic Use of Data",
      content: [
        "Service Delivery: Engineering and customizing digital assets based on your specific requirements.",
        "Communication: Providing project updates, responding to inquiries, and sharing industry insights.",
        "Optimization: Analyzing user behavior to improve our UI/UX architecture and site performance.",
        "Security: Monitoring for fraudulent activities and ensuring the integrity of our digital infrastructure."
      ],
      icon: <Eye className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "4. Cookie & Tracking Protocol",
      content: "We utilize cookies and similar tracking technologies to understand how visitors engage with our ecosystem. This data helps us deliver a more personalized and frictionless experience. You can manage your cookie preferences through your browser settings, though some features may be limited.",
      icon: <Cookie className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "5. Data Protection & Security",
      content: "DigiTech Avenue implements institutional-grade security measures, including SSL encryption and secure database protocols, to prevent unauthorized access, disclosure, or alteration of your personal data. We treat your information as a critical asset.",
      icon: <Lock className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "6. Information Sharing Architecture",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "Trusted Partners: Data may be shared with vetted service providers (e.g., hosting, CRM) solely to facilitate our services.",
        "Legal Mandates: We may disclose information if required by law or to protect the rights and safety of DigiTech Avenue.",
        "Asset Transfers: In the event of a merger or acquisition, your data remains protected under this policy."
      ],
      icon: <FileLock className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: "7. User Empowerment & Rights",
      content: [
        "Access & Rectification: You have the right to request access to or correction of your personal data.",
        "Data Deletion: You may request the erasure of your information from our active databases.",
        "Opt-Out: You can unsubscribe from our marketing communications at any time via the link provided in emails.",
        "Inquiries: For any data-related requests, contact our privacy officer at info@digitechavenue.com."
      ],
      icon: <UserCheck className="w-5 h-5 text-[#00E5FF]" />
    },
    {
      title: "8. Policy Modifications",
      content: "DigiTech Avenue reserves the right to update this Privacy Policy to reflect changes in our operational practices or legal requirements. We encourage periodic review of this page to stay informed about our data protection strategies.",
      icon: <Bell className="w-5 h-5 text-[#FFD700]" />
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
                Data Protection
             </motion.div>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                Privacy <br />
                <span className="text-gradient-cyan">Protocols.</span>
             </h1>
             <p className="text-lg md:text-xl text-[#8A9BB5] max-w-2xl mx-auto font-medium">
                Our commitment to safeguarding your digital footprint and maintaining transparency in our data engineering practices.
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
             <h2 className="text-3xl font-extrabold text-white mb-6">Privacy Inquiries?</h2>
             <p className="text-[#8A9BB5] text-lg mb-10 max-w-xl mx-auto font-medium">
                If you have questions regarding your data or our privacy framework, our security team is ready to assist.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                   href="mailto:info@digitechavenue.com" 
                   className="flex items-center gap-3 px-8 py-4 bg-[#080C14] border border-white/10 rounded-full text-[#F0F4FF] font-bold hover:bg-white/5 transition-all shadow-lg"
                >
                   <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
                   <span>info@digitechavenue.com</span>
                </a>
                <Link 
                   href="/contact" 
                   className="flex items-center gap-2 text-[#00E5FF] font-bold hover:gap-3 transition-all"
                >
                   Request Data Audit <ArrowUpRight className="w-5 h-5" />
                </Link>
             </div>
          </motion.div>
       </div>
    </main>
  );
}

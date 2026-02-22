"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Shield, Globe, CreditCard, Clock, AlertCircle, Phone } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Services Overview",
      content: "Digitech Avenue provides digital services including but not limited to Website Design & Development, Social Media Management, Content Creation, Logo Design, and Ads & Branding. Specific deliverables, timelines, and pricing are discussed and finalized before project initiation.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "2. Project Initiation & Payment",
      content: [
        "All projects require an advance payment to initiate work.",
        "The advance amount confirms project booking and resource allocation.",
        "Advance payments are non-refundable once work has started.",
        "Payment structure may vary based on project size and will be communicated clearly."
      ],
      icon: <CreditCard className="w-6 h-6 text-green-600" />
    },
    {
      title: "3. Pricing & Revisions",
      content: [
        "Prices are based on agreed scope and requirements.",
        "Minor revisions are included as per the selected package.",
        "Additional changes or features outside scope may incur extra charges."
      ],
      icon: <FileText className="w-6 h-6 text-purple-600" />
    },
    {
      title: "4. Client Responsibilities",
      content: [
        "Provide accurate content, materials, and approvals on time.",
        "Respond promptly to avoid delays.",
        "Maintain respectful and professional communication.",
        "Delays caused by missing inputs may impact delivery timelines."
      ],
      icon: <Clock className="w-6 h-6 text-orange-600" />
    },
    {
      title: "5. Intellectual Property & Ownership",
      content: "All designs, source files, website files, creatives, and code created by Digitech Avenue remain our intellectual property until full payment is received. Upon completion and final payment, ownership rights are transferred to the client as per the agreed scope.",
      icon: <Shield className="w-6 h-6 text-teal-600" />
    },
    {
      title: "6. Website Deployment & Hosting",
      content: [
        "If hosting is provided by Digitech Avenue, the website remains hosted with us until project completion.",
        "Migration to third-party hosting is supported after final payment.",
        "Hosting-related issues from third-party providers are not our responsibility."
      ],
      icon: <Globe className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "7. Confidentiality",
      content: "Both parties agree to maintain confidentiality of shared information, data, and credentials unless legally required.",
      icon: <Shield className="w-6 h-6 text-slate-600" />
    },
    {
      title: "8. Delays, Holds & Termination",
      content: [
        "Digitech Avenue reserves the right to pause a project if payments are delayed.",
        "Terminate services in case of non-payment, policy violations, or abusive behavior.",
        "In such cases, completed work remains the property of Digitech Avenue."
      ],
      icon: <AlertCircle className="w-6 h-6 text-red-600" />
    },
    {
      title: "9. Refund & Cancellation Policy",
      content: [
        "Advance payments are non-refundable.",
        "Refunds, if applicable, are evaluated on a case-by-case basis.",
        "No refunds are provided for completed or partially completed work."
      ],
      icon: <CreditCard className="w-6 h-6 text-pink-600" />
    },
    {
      title: "10. Limitation of Liability",
      content: "Digitech Avenue is not liable for business losses due to website downtime, third-party tool, hosting, or platform issues, or client-provided content or legal compliance.",
      icon: <AlertCircle className="w-6 h-6 text-gray-600" />
    },
    {
      title: "11. Legal Compliance & Disputes",
      content: [
        "Digitech Avenue operates ethically and lawfully.",
        "Any disputes shall first be attempted to resolve mutually.",
        "All disputes are subject to the jurisdiction of India."
      ],
      icon: <Shield className="w-6 h-6 text-blue-800" />
    },
    {
      title: "12. Modifications to Terms",
      content: "Digitech Avenue reserves the right to update these Terms & Conditions at any time. Continued use of services implies acceptance of updated terms.",
      icon: <FileText className="w-6 h-6 text-slate-800" />
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6 font-display">
              Terms & Conditions
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Welcome to <strong>Digitech Avenue</strong>. By accessing our website or availing our services, you agree to comply with the following Terms & Conditions. These terms ensure transparency, professionalism, and mutual trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed">
                    {Array.isArray(section.content) ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-slate-900 rounded-3xl text-white text-center shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-slate-300 mb-6">
              If you have any questions regarding these Terms & Conditions, please contact us.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="font-medium">+91 799 699 8142</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

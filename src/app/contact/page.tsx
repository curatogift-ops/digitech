import type { Metadata } from "next";
import { ContactPageForm } from "@/components/ContactPageForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Web Design Agency | Digitech Avenue",
  description: "Contact Digitech Avenue for professional web design and digital marketing services. We respond quickly and provide honest guidance.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col h-full">
            <span className="text-[#2563EB] font-bold text-lg mb-4 tracking-wide uppercase">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Contact Digitech Avenue
            </h1>
            <div className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl space-y-4">
              <p className="font-medium text-slate-900">
                Let’s discuss your website or digital marketing project. 
                We respond quickly and provide honest guidance.
              </p>
              <p>
                Whether you need a new website, SEO services, or marketing strategy, our team is ready to help. 
                Tell us about your project and we will provide a free consultation.
              </p>
            </div>

            <div className="mb-10 p-4 bg-slate-50 border border-slate-100 rounded-xl">
               <p className="font-bold text-slate-900 text-center uppercase tracking-wider text-sm">
                 Professional support • Transparent process • Long-term Relationship
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-auto">
              {/* Item 1: Office */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Our Office</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                    1st B St, Gokula Extension, Mathikere Extension, <br/>
                    Mathikere, Bengaluru, Karnataka 560054
                  </p>
                </div>
              </div>

              {/* Item 2: Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Information</h3>
                  <a href="mailto:info@digitechavenue.com" className="text-slate-600 text-sm hover:text-[#2563EB] transition-colors block">
                    info@digitechavenue.com
                  </a>

                </div>
              </div>

              {/* Item 3: Calling */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Calling Support</h3>
                  <a href="tel:+917996998142" className="text-slate-600 text-sm hover:text-[#2563EB] transition-colors block">
                    +91 799 699 8142
                  </a>

                </div>
              </div>

              {/* Item 4: Whatsapp */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Whatsapp Support</h3>
                  <a href="https://wa.me/917996998142" target="_blank" className="text-slate-600 text-sm hover:text-[#2563EB] transition-colors block">
                    +91 799 699 8142
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 lg:p-12 relative overflow-hidden">
             {/* Decorative top border */}
             <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
             
             <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
               Get A <span className="text-[#2563EB]">FREE</span> Consultation!
             </h2>

             <ContactPageForm />
          </div>
        </div>
      </div>
    </main>
  );
}

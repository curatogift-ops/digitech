"use client";

import { InquiryForm } from "@/components/InquiryForm";

const MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.05436069!2d77.55681057!3d13.0366568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d72f81344fd%3A0x620cecce103a5a98!2sDigitech+Avenue!5e0!3m2!1sen!2sin!4v1711964000000!5m2!1sen!2sin";

export default function ContactPage() {
  return (
    <main className="page-pad">
      <section className="wrap" style={{ paddingBottom: 64 }}>
        <div className="contact-grid" style={{ alignItems: "start" }}>
          <div className="page-hero" style={{ paddingTop: 8 }}>
            <p className="kicker">Contact</p>
            <h1>Tell us about the project.</h1>
            <p className="lede">We reply within one business day with an honest read on fit, timeline, and a price range.</p>
            <div style={{ display: "grid", gap: 16, marginTop: 28 }}>
              <div>
                <strong>Studio</strong>
                <p style={{ color: "var(--muted)" }}>Mathikere, Bengaluru, Karnataka 560054</p>
              </div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@digitechavenue.com">info@digitechavenue.com</a></p>
              </div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+917996998142">+91 799 699 8142</a></p>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <p><a href="https://wa.link/n5ker4" target="_blank" rel="noopener noreferrer">Open a chat</a></p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
        <div className="map-frame">
          <iframe title="DigiTech Avenue on Google Maps" src={MAP} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </main>
  );
}

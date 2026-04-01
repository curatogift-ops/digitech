"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { title: "Services", links: [
    { name: "Brand Identity",   href: "/services/graphic-designing" },
    { name: "Web Design & Dev", href: "/services/web-development" },
    { name: "Motion & 3D",      href: "/services/web-development" },
    { name: "Digital Products", href: "/services/web-development" },
    { name: "SEO & Growth",     href: "/services/seo-services" },
  ]},
  { title: "Company", links: [
    { name: "About Us",  href: "/about" },
    { name: "Our Work",  href: "/portfolio" },
    { name: "Process",   href: "/#process" },
    { name: "Careers",   href: "#" },
    { name: "Blog",      href: "/blog" },
  ]},
  { title: "Contact", links: [
    { name: "info@digitechavenue.com", href: "mailto:info@digitechavenue.com" },
    { name: "+91 799 699 8142",        href: "tel:+917996998142" },
    { name: "Bengaluru, Karnataka",       href: "https://www.google.com/maps/dir//Digitech+Avenue,+1st+B+St,+Gokula+Extension,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@19.136512,74.7208704,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d72f81344fd:0x620cecce103a5a98!2m2!1d77.5593855!2d13.0366568?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Book a Discovery Call",   href: "/contact" },
  ]},
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com" },
  { Icon: Twitter,   label: "X / Twitter",href: "https://x.com" },
];

export function Footer() {
  return (
    <footer style={{ background: "#13132b", borderTop: "1px solid rgba(255,255,255,.06)", position: "relative", zIndex: 1 }} className="ft-root">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top grid */}
        <div className="ft-top">
          {/* Brand */}
          <div>
            <div style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1rem,3.5vw,1.35rem)", fontWeight:700, fontStyle:"italic", color:"#fff", marginBottom:"12px", letterSpacing:"-.01em" }}>
              Digitech<em style={{ fontStyle:"normal", color:"#e879f9" }}>Avenue</em><em style={{ fontStyle:"normal", color:"#a855f7" }}>.</em>
            </div>
            <p style={{ fontSize:".8rem", lineHeight:1.75, color:"rgba(255,255,255,.32)", maxWidth:"220px", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:"20px" }}>
              Building extraordinary digital experiences for ambitious companies — from Bengaluru to the world.
            </p>
            <div style={{ display:"flex", gap:"9px" }}>
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="ft-social">
                  <Icon style={{ width:"15px", height:"15px" }} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {footerLinks.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize:".52rem", letterSpacing:".16em", textTransform:"uppercase", color:"#fff", marginBottom:"16px", fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle:"none" }}>
                {col.links.map(l => (
                  <li key={l.name} style={{ marginBottom:"10px" }}>
                    <Link href={l.href} className="ft-link" style={{ fontSize:"clamp(.76rem,1.5vw,.8rem)", color:"rgba(255,255,255,.32)", transition:"color .3s", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="ft-bar">
          <span style={{ fontSize:".54rem", letterSpacing:".1em", color:"rgba(255,255,255,.22)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            &copy; {new Date().getFullYear()} DigiTechAvenue. All rights reserved.
          </span>
          <div style={{ display:"flex", gap:"18px", fontSize:".54rem", letterSpacing:".1em", color:"rgba(255,255,255,.22)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            <Link href="/terms" className="ft-link">Privacy Policy</Link>
            <Link href="/terms" className="ft-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .ft-root { padding: 52px 16px 28px; }
        @media(min-width:640px)  { .ft-root { padding: 64px 32px 32px; } }
        @media(min-width:1024px) { .ft-root { padding: 72px 48px 36px; } }
        @media(min-width:1280px) { .ft-root { padding: 72px 72px 36px; } }

        .ft-top { display:grid; grid-template-columns:1fr; gap:36px; margin-bottom:44px; }
        @media(min-width:540px)  { .ft-top { grid-template-columns:1fr 1fr; } }
        @media(min-width:960px)  { .ft-top { grid-template-columns:1.8fr 1fr 1fr 1fr; } }

        .ft-bar { border-top:1px solid rgba(255,255,255,.05); padding-top:20px; display:flex; flex-direction:column; gap:8px; }
        @media(min-width:540px) { .ft-bar { flex-direction:row; justify-content:space-between; align-items:center; } }

        .ft-social { width:34px; height:34px; border:1px solid rgba(255,255,255,.09); border-radius:50%; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,.32); transition:all .3s; }
        .ft-social:hover { border-color:rgba(255,255,255,.28) !important; color:#fff !important; background:rgba(255,255,255,.06) !important; }
        .ft-link:hover { color:#fff !important; }
      `}</style>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactItems = [
  { Icon: Mail,   label: "Email",    val: "info@digitechavenue.com", href: "mailto:info@digitechavenue.com" },
  { Icon: Phone,  label: "Phone",    val: "+91 799 699 8142",        href: "tel:+917996998142" },
  { Icon: MapPin, label: "Location", val: "Bangalore, Karnataka, India", href: "#" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,.03)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "12px", padding: "12px 18px",
  outline: "none", color: "#fff",
  fontSize: "clamp(.82rem,1.8vw,.9rem)",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  transition: "border-color .3s",
};

export function Contact() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setOk(true); (e.target as HTMLFormElement).reset(); setTimeout(() => setOk(false), 5000); }, 1500);
  };

  const focus = (e: React.FocusEvent<any>) => (e.target.style.borderColor = "rgba(139,69,240,.45)");
  const blur  = (e: React.FocusEvent<any>) => (e.target.style.borderColor = "rgba(255,255,255,.08)");

  return (
    <section id="contact-form" style={{ background: "transparent", position: "relative", overflow: "hidden", zIndex: 1 }} className="cf-section">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="cf-layout">
          {/* Left info */}
          <motion.div initial={{ opacity:0, x:-22 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
            <div className="eyebrow-pill" style={{ marginBottom:"18px" }}>Get In Touch</div>
            <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.8rem,5vw,3.2rem)", fontWeight:700, lineHeight:1.06, marginBottom:"16px" }}>
              Let&apos;s Build something<br />
              <em style={{ fontStyle:"italic", color:"#e879f9" }}>Great Together.</em>
            </h2>
            <p style={{ fontSize:"clamp(.84rem,1.8vw,.9rem)", lineHeight:1.78, color:"rgba(255,255,255,.4)", marginBottom:"32px", fontFamily:"'Plus Jakarta Sans',sans-serif", maxWidth:"360px" }}>
              Have a project in mind? We respond quickly and provide honest guidance. Let&apos;s engineer your success.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
              {contactItems.map(({ Icon, label, val, href }) => (
                <a key={label} href={href} className="ci-row">
                  <div className="ci-icon"><Icon style={{ width:"18px", height:"18px", color:"#a855f7" }} strokeWidth={1.5} /></div>
                  <div>
                    <div style={{ fontSize:".5rem", letterSpacing:".14em", textTransform:"uppercase", color:"#a855f7", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, marginBottom:"2px" }}>{label}</div>
                    <div className="ci-val" style={{ fontSize:"clamp(.82rem,1.8vw,.9rem)", color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif", transition:"color .3s" }}>{val}</div>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7, delay:.1 }}>
            <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:"22px", padding:"clamp(24px,5vw,44px) clamp(20px,4vw,36px)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, right:0, width:"140px", height:"140px", background:"radial-gradient(circle at 100% 0%,rgba(139,69,240,.1),transparent 70%)", pointerEvents:"none" }} />
              <form onSubmit={onSubmit} style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
                <div className="cf-2col">
                  <div>
                    <label className="cf-label">Full Name</label>
                    <input type="text" placeholder="Jane Doe" required style={inputBase} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label className="cf-label">Email Address</label>
                    <input type="email" placeholder="jane@example.com" required style={inputBase} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label className="cf-label">Service Needed</label>
                  <select style={{ ...inputBase, cursor:"pointer", color:"rgba(255,255,255,.5)" }} onFocus={focus} onBlur={blur}>
                    {["Brand Identity","Web Design & Dev","Digital Products","SEO & Growth","Strategy & Consulting"].map(o=><option key={o} style={{ background:"#0d0d1f" }}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="cf-label">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your project, goals and timeline..." required style={{ ...inputBase, resize:"none" }} onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" disabled={sending} className="cf-submit" style={{ background: sending ? "rgba(139,69,240,.5)" : "#fff", color: sending ? "#fff" : "#0d0d1f" }}>
                  {sending ? "Sending…" : "Send Discovery Request"}
                  {!sending && <Send style={{ width:"13px", height:"13px" }} />}
                </button>
                {ok && (
                  <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} style={{ padding:"14px", borderRadius:"10px", background:"rgba(74,222,128,.08)", border:"1px solid rgba(74,222,128,.18)", color:"#4ade80", fontSize:".84rem", textAlign:"center", fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                    Submitted! We&apos;ll be in touch within 2 hours.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .cf-section { padding: 64px 16px; }
        @media(min-width:640px)  { .cf-section { padding: 80px 32px; } }
        @media(min-width:1024px) { .cf-section { padding: 100px 48px; } }
        @media(min-width:1280px) { .cf-section { padding: 110px 72px; } }

        .cf-layout { display:grid; grid-template-columns:1fr; gap:44px; }
        @media(min-width:1024px) { .cf-layout { grid-template-columns:5fr 7fr; gap:60px; } }

        .cf-2col { display:grid; grid-template-columns:1fr; gap:16px; }
        @media(min-width:540px) { .cf-2col { grid-template-columns:1fr 1fr; } }

        .cf-label { font-size:.5rem; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.28); display:block; margin-bottom:7px; font-family:'Plus Jakarta Sans',sans-serif; }

        .cf-submit {
          width:100%; padding:15px; border-radius:100px;
          border:none; cursor:pointer; font-weight:700;
          font-size:.66rem; letter-spacing:.1em; text-transform:uppercase;
          font-family:'Plus Jakarta Sans',sans-serif;
          transition:transform .2s, box-shadow .2s;
          box-shadow:0 6px 24px rgba(255,255,255,.11);
          display:flex; align-items:center; justify-content:center; gap:7px;
        }
        .cf-submit:hover:not(:disabled) { transform:translateY(-3px); box-shadow:0 10px 32px rgba(255,255,255,.2); }

        .ci-row { display:flex; align-items:center; gap:16px; text-decoration:none; }
        .ci-icon { width:46px; height:46px; border-radius:13px; flex-shrink:0; background:rgba(139,69,240,.1); border:1px solid rgba(139,69,240,.18); display:flex; align-items:center; justify-content:center; transition:background .3s, border-color .3s; }
        .ci-row:hover .ci-icon { background:rgba(139,69,240,.2) !important; border-color:rgba(139,69,240,.4) !important; }
        .ci-row:hover .ci-val  { color:#a855f7 !important; }

        input::placeholder, textarea::placeholder { color:rgba(255,255,255,.18); }
        select option { color:#fff; }
      `}</style>
    </section>
  );
}

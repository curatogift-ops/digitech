"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function CTABanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="contact" style={{ background: "transparent", position: "relative", overflow: "hidden", zIndex: 1, textAlign: "center" }} className="cta-section">
      {/* Radial glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(139,69,240,.12) 0%,transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"28%", left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(139,69,240,.14),transparent)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"28%", left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(232,121,249,.09),transparent)", pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:"720px", margin:"0 auto" }}>
        <motion.p initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ fontFamily:"'Fraunces',serif", fontSize:".6rem", letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.28)", marginBottom:"18px", fontStyle:"italic" }}>
          — Let&apos;s Create Something Amazing —
        </motion.p>

        <motion.h2 initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1, duration:.7 }} style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(2.4rem,8vw,6.5rem)", fontWeight:700, lineHeight:1.0, letterSpacing:"-.025em", marginBottom:"20px" }}>
          Ready to Build<br />
          <em style={{ fontStyle:"italic", color:"#e879f9" }}>Something</em><br />
          Legendary?
        </motion.h2>

        <motion.p initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.2 }} style={{ fontSize:"clamp(.88rem,1.8vw,1rem)", color:"rgba(255,255,255,.4)", maxWidth:"400px", margin:"0 auto 36px", lineHeight:1.8, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Have a project in mind? Drop your email and we&apos;ll get back within 24 hours with a free strategy call.
        </motion.p>

        <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.3 }} className="cta-btns">
          <a href="mailto:info@digitechavenue.com" className="btn-pill solid">info@digitechavenue.com →</a>
          <Link href="/contact" className="btn-pill violet-fill">Book a Free Call</Link>
        </motion.div>

        {/* Email row */}
        <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.4 }} className="cta-email-row">
          <input
            type="email" placeholder="Your email address…" value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            style={{
              flex:1, background:"rgba(255,255,255,.05)", border:"1.5px solid rgba(255,255,255,.09)",
              borderRadius:"100px", padding:"13px 20px", outline:"none",
              fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:".88rem", color:"#fff",
              transition:"border-color .3s", minWidth:0,
            }}
            onFocus={e => e.target.style.borderColor = "rgba(139,69,240,.5)"}
            onBlur={e  => e.target.style.borderColor = "rgba(255,255,255,.09)"}
          />
          <button onClick={handleSend} className="cta-send-btn" style={{ background: sent ? "#4ade80" : "#fff" }}>
            {sent ? "Sent!" : "Let's Talk →"}
          </button>
        </motion.div>
      </div>

      <style>{`
        .cta-section { padding: 80px 16px; }
        @media(min-width:640px)  { .cta-section { padding: 100px 32px; } }
        @media(min-width:1280px) { .cta-section { padding: 130px 72px; } }

        .cta-btns {
          display: flex; flex-wrap: wrap; gap: 12px;
          justify-content: center; margin-bottom: 0;
        }

        .cta-email-row {
          display: flex; gap: 10px;
          max-width: 460px; margin: 36px auto 0;
          flex-direction: column;
        }
        @media(min-width:480px) { .cta-email-row { flex-direction: row; } }

        .cta-send-btn {
          padding: 13px 24px; color: #0d0d1f;
          border: none; border-radius: 100px; cursor: pointer;
          font-size:.62rem; letter-spacing:.12em; text-transform:uppercase;
          font-weight:700; font-family:'Plus Jakarta Sans',sans-serif;
          transition:background .3s, transform .2s; white-space:nowrap;
          flex-shrink:0;
        }
        .cta-send-btn:hover { transform: scale(1.04); }
        input::placeholder { color: rgba(255,255,255,.22); }
      `}</style>
    </div>
  );
}

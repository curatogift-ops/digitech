"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const facts = [
  { label: "Headquarters",       value: "Bengaluru, Karnataka, India" },
  { label: "Founded",            value: "2019" },
  { label: "Team Size",          value: "50+ specialists" },
  { label: "Awards Won",         value: "18+ industry awards" },
  { label: "Revenue Generated",  value: "$2B+ for clients" },
];

const numCells: any[] = [];

export function ValueProp() {
  return (
    <div id="about" style={{ background: "transparent", position: "relative", zIndex: 1 }} className="ab-section">
      <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="eyebrow-pill">
        About DigiTechAvenue
      </motion.div>

      <div className="ab-grid">
        {/* Left */}
        <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.9rem,6.5vw,4.2rem)", fontWeight:700, lineHeight:1.05, marginBottom:"20px" }}>
            We Don&apos;t<br />Just Build{" "}
            <em style={{ fontStyle:"italic", color:"#e879f9" }}>Websites.</em><br />
            We Build Futures.
          </h2>
          <p style={{ fontSize:"clamp(.85rem,1.8vw,.92rem)", lineHeight:1.85, color:"rgba(255,255,255,.42)", marginBottom:"12px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            We build growth engines. Since 2019, DigiTechAvenue has partnered with visionary startups and Fortune 500 companies to create digital experiences that truly matter — in Bengaluru and across the globe.
          </p>
          <p style={{ fontSize:"clamp(.85rem,1.8vw,.92rem)", lineHeight:1.85, color:"rgba(255,255,255,.42)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            Our cross-disciplinary team works without silos. Every deliverable is more coherent, more beautiful, and more effective because of it.
          </p>

          <div style={{ marginTop:"28px" }}>
            {facts.map(f => (
              <div key={f.label} className="fact-row">
                <span>{f.label}</span>
                <strong style={{ color:"#fff", fontWeight:600 }}>{f.value}</strong>
                <span style={{ color:"#a855f7" }}>→</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          {/* Visual box */}
          <div style={{ width:"100%", aspectRatio:"4/3", borderRadius:"16px", overflow:"hidden", position:"relative", background:"#1a1a38", border:"1px solid rgba(255,255,255,.07)" }}>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0d0d2a 0%,#1a1050 40%,#2d1575 75%,#3b1880 100%)" }} />
            <div style={{ position:"absolute", inset:0, opacity:.055, backgroundImage:"radial-gradient(rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize:"26px 26px" }} />
            <div style={{ position:"absolute", bottom:"-18px", right:"-6px", fontFamily:"'Fraunces',serif", fontSize:"clamp(5rem,20vw,12rem)", fontWeight:700, fontStyle:"italic", color:"rgba(255,255,255,.04)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>DTA</div>
            <a 
              href="https://www.google.com/maps/dir//Digitech+Avenue,+1st+B+St,+Gokula+Extension,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@19.136512,74.7208704,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d72f81344fd:0x620cecce103a5a98!2m2!1d77.5593855!2d13.0366568?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position:"absolute", background:"#fff", color:"#0d0d1f", fontSize:".52rem", letterSpacing:".1em", textTransform:"uppercase", padding:"6px 12px", fontWeight:700, borderRadius:"100px", top:"14px", left:"14px", fontFamily:"'Plus Jakarta Sans',sans-serif", display:"flex", alignItems:"center", gap:"5px", transition: "transform .2s", zIndex: 10 }}
              className="hover:scale-105"
            >
              <MapPin style={{ width:"10px", height:"10px" }} />Bengaluru, India
            </a>
            <div style={{ position:"absolute", background:"#fff", color:"#0d0d1f", fontSize:".52rem", letterSpacing:".1em", textTransform:"uppercase", padding:"6px 12px", fontWeight:700, borderRadius:"100px", bottom:"14px", right:"14px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Est. 2019</div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .ab-section { padding: 64px 16px; }
        @media(min-width:640px)  { .ab-section { padding: 80px 32px; } }
        @media(min-width:1024px) { .ab-section { padding: 100px 48px; } }
        @media(min-width:1280px) { .ab-section { padding: 110px 72px; } }

        .ab-grid { display:grid; grid-template-columns:1fr; gap:48px; margin-top:44px; }
        @media(min-width:960px) { .ab-grid { grid-template-columns:1fr 1fr; gap:72px; align-items:start; } }

        .fact-row {
          display:flex; align-items:center; justify-content:space-between;
          padding:12px 0; border-bottom:1px solid rgba(255,255,255,.07);
          font-size:clamp(.78rem,1.6vw,.82rem); color:rgba(255,255,255,.4);
          gap:10px; flex-wrap:wrap; font-family:'Plus Jakarta Sans',sans-serif;
          transition:color .3s;
        }
        .fact-row:hover { color: rgba(255,255,255,.65) !important; }

        .ab-stat-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px; }
      `}</style>
    </div>
  );
}

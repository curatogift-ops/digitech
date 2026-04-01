"use client";

import { motion } from "framer-motion";
import { Search, Target, PenTool, Rocket } from "lucide-react";

const steps = [
  { num: "Step 01", Icon: Search,  name: "Discover", desc: "We dig deep into your business, audience, and competition — uncovering what makes you genuinely different." },
  { num: "Step 02", Icon: Target,  name: "Define",   desc: "We establish the strategy, brand architecture, and creative direction that guides every decision forward." },
  { num: "Step 03", Icon: PenTool, name: "Design",   desc: "Pixel-perfect execution with iterative prototyping, real user testing, and obsessive attention to detail." },
  { num: "Step 04", Icon: Rocket,  name: "Deliver",  desc: "We launch with precision, then stay on board — optimizing performance and continuously scaling results." },
];

export function Process() {
  return (
    <div id="process" style={{ background: "transparent", position: "relative", zIndex: 1 }} className="proc-section">
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
        <div className="eyebrow-pill">How We Work</div>
        <h2 className="sec-title">Our <span>Process</span></h2>
        <p style={{ fontSize:"clamp(.85rem,1.8vw,.95rem)", lineHeight:1.75, color:"rgba(255,255,255,.4)", maxWidth:"420px", marginTop:"14px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          A high-performance journey from concept to market launch, designed to deliver measurable results.
        </p>
      </motion.div>

      <div className="proc-grid">
        {steps.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity:0, y:22 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay: i*.12, duration:.5 }}
            className="proc-card"
          >
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
              <span style={{ fontSize:".5rem", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{s.num}</span>
              <div className="proc-icon">
                <s.Icon style={{ width:"18px", height:"18px", color:"#fff" }} strokeWidth={1.5} />
              </div>
            </div>
            {/* Watermark */}
            <div style={{ position:"absolute", bottom:"-18px", right:"14px", fontFamily:"'Fraunces',serif", fontSize:"5.5rem", fontWeight:700, fontStyle:"italic", color:"rgba(255,255,255,.025)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>
              {String(i+1).padStart(2,"0")}
            </div>
            <div className="proc-title">{s.name}</div>
            <div style={{ fontSize:"clamp(.82rem,1.8vw,.88rem)", lineHeight:1.78, color:"rgba(255,255,255,.4)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .proc-section { padding: 64px 16px; }
        @media(min-width:640px)  { .proc-section { padding: 80px 32px; } }
        @media(min-width:1024px) { .proc-section { padding: 100px 48px; } }
        @media(min-width:1280px) { .proc-section { padding: 110px 72px; } }

        .proc-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 14px; margin-top: 44px;
        }
        @media(min-width:600px)  { .proc-grid { grid-template-columns: 1fr 1fr; } }
        @media(min-width:1024px) { .proc-grid { grid-template-columns: repeat(4,1fr); } }

        .proc-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px;
          padding: 24px 20px;
          position: relative; overflow: hidden;
          transition: background .3s, border-color .3s, transform .35s;
        }
        @media(min-width:1280px) { .proc-card { padding: 34px 28px; } }

        .proc-icon {
          width:38px; height:38px; flex-shrink:0;
          background: linear-gradient(135deg,#6c2bd9,#e879f9);
          border-radius:11px;
          display:flex; align-items:center; justify-content:center;
          transition:transform .3s;
        }
        .proc-title {
          font-family:'Fraunces',serif;
          font-size:clamp(1.15rem,2.8vw,1.5rem);
          font-weight:700; color:#fff; margin-bottom:10px; transition:color .3s;
        }
        .proc-card:hover { background: rgba(139,69,240,.08) !important; border-color: rgba(139,69,240,.3) !important; transform: translateY(-5px) !important; }
        .proc-card:hover .proc-title { color: #a855f7 !important; }
        .proc-card:hover .proc-icon  { transform: rotate(-8deg) scale(1.1); }
      `}</style>
    </div>
  );
}

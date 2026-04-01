"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { num: "01 / 05", tag: "Branding + Web",    name: "NovaTech Platform",  bg: "linear-gradient(145deg,#0d1b3e,#1a2d6e,#1e3a8a)", glow: "radial-gradient(circle at 70% 20%,rgba(139,69,240,.28),transparent 55%)" },
  { num: "02 / 05", tag: "UX + Development",  name: "Aether Finance",     bg: "linear-gradient(145deg,#1a0d3e,#3b1278,#5b21b6)", glow: "radial-gradient(circle at 30% 70%,rgba(232,121,249,.18),transparent 55%)" },
  { num: "03 / 05", tag: "Motion + Identity", name: "Pulse Creative",     bg: "linear-gradient(145deg,#0a2818,#0f4a2a,#166534)", glow: "radial-gradient(circle at 75% 25%,rgba(255,255,255,.10),transparent 50%)" },
  { num: "04 / 05", tag: "E-Commerce + CRO",  name: "Ember Commerce",     bg: "linear-gradient(145deg,#2d1515,#5c1a1a,#991b1b)", glow: "radial-gradient(circle at 40% 75%,rgba(232,121,249,.18),transparent 55%)" },
  { num: "05 / 05", tag: "SaaS + Product",    name: "Vanta Dashboard",    bg: "linear-gradient(145deg,#0a1628,#0e2442,#1e3a5f)", glow: "radial-gradient(circle at 60% 30%,rgba(139,69,240,.2),transparent 55%)" },
];

export function RecentWork() {
  return (
    <div id="work" style={{ background: "transparent", overflow: "hidden", position: "relative", zIndex: 1 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:.7 }}
        className="rw-header"
      >
        <div>
          <div className="eyebrow-pill">Selected Work</div>
          <h2 className="sec-title">Work That <em>Moves</em> People</h2>
        </div>
        <Link href="/portfolio" className="rw-all-btn">
          All Projects <span className="rw-arrow">→</span>
        </Link>
      </motion.div>

      {/* Scrollable track */}
      <div
        id="workTrack"
        className="rw-track"
        onMouseDown={e => {
          const el = e.currentTarget;
          el.style.cursor = "grabbing";
          const startX = e.pageX - el.offsetLeft;
          const sL = el.scrollLeft;
          const onMove = (ev: MouseEvent) => (el.scrollLeft = sL - (ev.pageX - el.offsetLeft - startX) * 1.4);
          const onUp  = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity:0, y:22 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay: i*.1, duration:.5 }}
            className="rw-card"
            style={{ background: p.bg }}
          >
            <div style={{ position:"absolute", inset:0, background: p.glow }} />
            {/* Badge */}
            <div style={{
              position:"absolute", top:"14px", right:"14px", zIndex:2,
              fontSize:".5rem", letterSpacing:".16em",
              color:"rgba(255,255,255,.2)", background:"rgba(255,255,255,.07)",
              borderRadius:"100px", padding:"4px 10px", backdropFilter:"blur(8px)",
              fontFamily:"'Plus Jakarta Sans',sans-serif",
            }}>{p.num}</div>
            {/* Info */}
            <div className="rw-info">
              <div style={{ fontSize:".5rem", letterSpacing:".16em", textTransform:"uppercase", color:"#a855f7", marginBottom:"6px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.tag}</div>
              <div style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.15rem,3.5vw,1.7rem)", fontWeight:700, color:"#fff", marginBottom:"12px" }}>{p.name}</div>
              <Link href="/portfolio" className="rw-cs-pill">Case Study ↗</Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drag hint */}
      <div className="rw-hint">← Drag to explore →</div>

      <style>{`
        /* Header */
        .rw-header {
          display: flex; flex-direction: column; gap: 20px;
          padding: 64px 16px 36px;
        }
        @media(min-width:640px)  { .rw-header { padding: 80px 32px 44px; } }
        @media(min-width:768px)  { .rw-header { flex-direction: row; align-items: flex-end; justify-content: space-between; } }
        @media(min-width:1024px) { .rw-header { padding: 100px 48px 52px; } }
        @media(min-width:1280px) { .rw-header { padding: 110px 72px 56px; } }

        /* All-projects button */
        .rw-all-btn {
          display: inline-flex; align-items: center; gap: 9px;
          font-size:.62rem; letter-spacing:.12em; text-transform:uppercase;
          color:rgba(255,255,255,.38); background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.09); border-radius:100px;
          padding:9px 18px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:500;
          transition:color .3s, border-color .3s; align-self:flex-start;
        }
        .rw-arrow { transition: transform .3s; display:inline-block; }
        .rw-all-btn:hover { color:#fff !important; border-color:rgba(255,255,255,.25) !important; }
        .rw-all-btn:hover .rw-arrow { transform: translateX(4px); }

        /* Track */
        .rw-track {
          display: flex; gap: 14px;
          padding: 0 16px 60px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; cursor: grab;
        }
        .rw-track::-webkit-scrollbar { display: none; }
        @media(min-width:640px)  { .rw-track { padding: 0 32px 64px; gap:16px; } }
        @media(min-width:1024px) { .rw-track { padding: 0 48px 72px; } }
        @media(min-width:1280px) { .rw-track { padding: 0 72px 80px; } }

        /* Card */
        .rw-card {
          flex: 0 0 clamp(220px, 72vw, 420px);
          scroll-snap-align: start;
          aspect-ratio: 3/4;
          border-radius: 16px;
          position: relative; overflow: hidden;
          border: 1px solid rgba(255,255,255,.07);
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .rw-card:hover { transform: translateY(-7px); box-shadow: 0 20px 48px rgba(108,43,217,.2); }

        /* Info overlay */
        .rw-info {
          position: absolute; inset: 0; z-index: 3;
          background: linear-gradient(to top,rgba(4,4,18,.96) 0%,transparent 52%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 22px 20px; border-radius: 16px;
        }
        @media(hover:hover) { .rw-info { opacity:0; transition:opacity .4s; } .rw-card:hover .rw-info { opacity:1; } }

        /* Case-study pill */
        .rw-cs-pill {
          display: inline-flex; align-items: center; gap:5px;
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.1);
          border-radius: 100px; padding: 5px 13px;
          font-size: .5rem; letter-spacing:.1em; text-transform:uppercase;
          color: rgba(255,255,255,.65); font-family:'Plus Jakarta Sans',sans-serif;
          transition: background .3s, color .3s; align-self: flex-start;
        }
        .rw-cs-pill:hover { background:#fff !important; color:#0d0d1f !important; }

        /* Drag hint */
        .rw-hint {
          padding: 0 16px 40px;
          font-size:.5rem; letter-spacing:.14em; text-transform:uppercase;
          color:rgba(255,255,255,.22); animation: nudge 2s ease infinite;
          font-family:'Plus Jakarta Sans',sans-serif;
        }
        @media(min-width:640px)  { .rw-hint { padding: 0 32px 48px; } }
        @media(min-width:1280px) { .rw-hint { padding: 0 72px 56px; } }
      `}</style>
    </div>
  );
}

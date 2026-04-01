"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  { stars: 5, quote: "DigiTechAvenue transformed our digital presence. Conversion rate went up 226% in Q1 after launch. They architect growth, not just websites.", initials: "NK", name: "Nikhil Kumar", role: "CMO, NovaTech Inc." },
  { stars: 5, quote: "Best agency we've ever worked with. The attention to detail is unreal. They delivered a product our competitors are still trying to copy.", initials: "SK", name: "Sophia Kim", role: "Founder, Aether Finance" },
  { stars: 5, quote: "Our brand identity is absolutely stunning. DigiTechAvenue understood our vision immediately and elevated it beyond what we imagined.", initials: "JP", name: "James Park", role: "CEO, Pulse Creative" },
  { stars: 5, quote: "Organic traffic up 180%, bounce rate down 45%. The ROI since the rebrand has been phenomenal. Incredible work from the whole DTA team.", initials: "AL", name: "Anika Lenz", role: "Marketing Director, Ember Commerce" },
];

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const cardW = () => {
    const c = railRef.current?.querySelector(".t-card") as HTMLElement;
    return c ? c.offsetWidth + 14 : 300;
  };
  const go = (n: number) => {
    const clamped = Math.max(0, Math.min(n, testimonials.length - 1));
    setCurrent(clamped);
    railRef.current?.scrollTo({ left: clamped * cardW(), behavior: "smooth" });
  };

  return (
    <div id="testimonials" style={{ background: "#13132b", overflow: "hidden", position: "relative", zIndex: 1 }} className="t-section">
      <div style={{ position:"absolute", top:"50%", left:"-8%", transform:"translateY(-50%)", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(139,69,240,.09) 0%,transparent 65%)", pointerEvents:"none" }} />

      {/* Header */}
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
        <div className="eyebrow-pill">What Clients Say</div>
        <h2 className="sec-title">Real Results,<br /><em>Real People</em></h2>
      </motion.div>

      {/* Rail */}
      <div ref={railRef} className="t-rail">
        {testimonials.map((t, i) => (
          <motion.div key={i} className="t-card" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*.1, duration:.5 }}>
            <div style={{ display:"flex", gap:"3px", marginBottom:"16px" }}>
              {Array(t.stars).fill(0).map((_,j) => <Star key={j} style={{ width:"13px", height:"13px", color:"#e879f9", fill:"#e879f9" }} />)}
            </div>
            <p style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(.9rem,2.2vw,1.05rem)", fontStyle:"italic", lineHeight:1.62, color:"#fff", marginBottom:"24px" }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:"13px" }}>
              <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:"linear-gradient(135deg,#6c2bd9,#e879f9)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Fraunces',serif", fontSize:".85rem", color:"#fff", fontWeight:700, fontStyle:"italic" }}>{t.initials}</div>
              <div>
                <div style={{ fontSize:".6rem", letterSpacing:".1em", textTransform:"uppercase", color:"#fff", fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{t.name}</div>
                <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.38)", marginTop:"3px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nav */}
      <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="t-nav">
        {[{ fn: ()=>go(current-1), label:"←" },{ fn:()=>go(current+1), label:"→" }].map((b,i)=>(
          <button key={i} onClick={b.fn} className="t-nav-btn">{b.label}</button>
        ))}
        <span style={{ fontSize:".56rem", color:"rgba(255,255,255,.25)", marginLeft:"8px", fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:".1em" }}>{current+1} / {testimonials.length}</span>
      </motion.div>

      <style>{`
        .t-section { padding: 64px 0; }
        .t-section > div:nth-child(2) { padding: 0 16px 36px; }
        @media(min-width:640px)  { .t-section > div:nth-child(2) { padding: 0 32px 40px; } }
        @media(min-width:1024px) { .t-section > div:nth-child(2) { padding: 0 48px 48px; } }
        @media(min-width:1280px) { .t-section { padding: 110px 0; } .t-section > div:nth-child(2) { padding: 0 72px 56px; } }

        /* Rail */
        .t-rail {
          display: flex; gap: 14px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
          padding: 0 16px 4px;
        }
        .t-rail::-webkit-scrollbar { display: none; }
        @media(min-width:640px)  { .t-rail { padding-left: 32px; padding-right: 32px; gap: 16px; } }
        @media(min-width:1024px) { .t-rail { padding-left: 48px; padding-right: 48px; } }
        @media(min-width:1280px) { .t-rail { padding-left: 72px; padding-right: 72px; } }

        /* Card */
        .t-card {
          flex: 0 0 clamp(260px, 84vw, 500px);
          scroll-snap-align: start;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px; padding: 28px 22px;
          transition: border-color .3s, transform .3s;
        }
        @media(min-width:768px) { .t-card { flex: 0 0 clamp(300px, 46vw, 500px); padding: 32px 28px; } }
        .t-card:hover { border-color: rgba(139,69,240,.3) !important; transform: translateY(-4px) !important; }

        /* Nav */
        .t-nav { display:flex; align-items:center; gap:10px; padding: 24px 16px 0; }
        @media(min-width:640px)  { .t-nav { padding-left: 32px; } }
        @media(min-width:1024px) { .t-nav { padding-left: 48px; } }
        @media(min-width:1280px) { .t-nav { padding-left: 72px; } }

        .t-nav-btn {
          width:40px; height:40px; border-radius:50%;
          border:1.5px solid rgba(255,255,255,.1);
          background:transparent; color:rgba(255,255,255,.38);
          font-size:.95rem; cursor:pointer; transition:all .3s;
          display:flex; align-items:center; justify-content:center;
        }
        .t-nav-btn:hover { border-color:rgba(255,255,255,.35) !important; color:#fff !important; background:rgba(255,255,255,.05) !important; }
      `}</style>
    </div>
  );
}

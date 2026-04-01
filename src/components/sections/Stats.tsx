"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2200, start = Date.now();
    const t = setInterval(() => {
      const prog = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - prog, 3))));
      if (prog >= 1) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [isInView, target]);
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{count}</span>;
}

const stats = [
  { value: 12,  suffix: "+", label: "Years of Excellence" },
  { value: 340, suffix: "+", label: "Projects Delivered" },
  { value: 98,  suffix: "%", label: "Client Retention" },
  { value: 40,  suffix: "+", label: "Countries Served" },
];

export function Stats() {
  return (
    <div style={{
      background: "#1a1a38",
      borderTop: "1px solid rgba(255,255,255,.06)",
      borderBottom: "1px solid rgba(255,255,255,.06)",
      position: "relative", overflow: "hidden", zIndex: 1,
    }} className="stats-section">
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(135deg,rgba(108,43,217,.1) 0%,transparent 50%,rgba(232,121,249,.05) 100%)",
        pointerEvents:"none",
      }} />

      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay: i*.12, duration:.5 }}
            style={{ textAlign:"center", position:"relative", zIndex:1 }}
          >
            <div style={{
              fontFamily:"'Fraunces',serif",
              fontSize:"clamp(2.4rem,8vw,5rem)",
              fontWeight:700, fontStyle:"italic",
              lineHeight:1, color:"#fff",
            }}>
              <AnimatedCounter target={s.value} />
              <em style={{ color:"#e879f9", fontStyle:"normal", fontSize:".52em" }}>{s.suffix}</em>
            </div>
            <div style={{
              fontSize:"clamp(.48rem,1.3vw,.56rem)", letterSpacing:".14em",
              textTransform:"uppercase", color:"rgba(255,255,255,.32)",
              marginTop:"7px", fontFamily:"'Plus Jakarta Sans',sans-serif",
            }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-section { padding: 56px 16px; }
        @media(min-width:640px) { .stats-section { padding: 72px 32px; } }
        @media(min-width:1024px){ .stats-section { padding: 88px 48px; } }

        .stats-grid {
          display: grid; grid-template-columns: repeat(2,1fr);
          gap: 32px 0; position: relative; z-index: 1;
        }
        @media(min-width:768px) { .stats-grid { grid-template-columns: repeat(4,1fr); } }

        /* Dividers */
        .stats-grid > div { border-right: 1px solid rgba(255,255,255,.07); }
        .stats-grid > div:nth-child(2) { border-right: none; }
        .stats-grid > div:last-child    { border-right: none; }
        @media(min-width:768px) {
          .stats-grid > div             { border-right: 1px solid rgba(255,255,255,.07); }
          .stats-grid > div:nth-child(2){ border-right: 1px solid rgba(255,255,255,.07); }
          .stats-grid > div:last-child  { border-right: none; }
        }
      `}</style>
    </div>
  );
}

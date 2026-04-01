"use client";

import { motion } from "framer-motion";

const techPills = [
  "Figma","Webflow","React","Next.js","Three.js","GSAP",
  "Framer","Shopify","Node.js","TypeScript","Tailwind CSS","Sanity CMS",
  "Vercel","AWS","Blender","After Effects","WordPress","MongoDB",
];

export function TechStack() {
  return (
    <div style={{ background: "#13132b", borderTop: "1px solid rgba(255,255,255,.06)", position: "relative", zIndex: 1 }} className="ts-section">
      <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ fontFamily:"'Fraunces',serif", fontSize:".6rem", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.28)", textAlign:"center", marginBottom:"24px", fontStyle:"italic" }}>
        — Tools & Technologies We Master —
      </motion.div>
      <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }} style={{ display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center", maxWidth:"880px", margin:"0 auto" }}>
        {techPills.map((t) => (
          <span key={t} className="ts-pill">{t}</span>
        ))}
      </motion.div>

      <style>{`
        .ts-section { padding: 48px 16px; }
        @media(min-width:640px)  { .ts-section { padding: 56px 32px; } }
        @media(min-width:1280px) { .ts-section { padding: 60px 72px; } }

        .ts-pill {
          font-size:.58rem; letter-spacing:.1em; text-transform:uppercase;
          padding:7px 16px;
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07);
          color:rgba(255,255,255,.38); border-radius:100px;
          transition:all .25s, transform .25s;
          font-family:'Plus Jakarta Sans',sans-serif; cursor:default;
        }
        .ts-pill:hover { background:rgba(139,69,240,.18) !important; border-color:rgba(139,69,240,.4) !important; color:#a855f7 !important; transform:translateY(-2px); }
      `}</style>
    </div>
  );
}

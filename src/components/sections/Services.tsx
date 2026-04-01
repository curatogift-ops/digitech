"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Paintbrush2, MonitorSmartphone, Sparkles, LayoutGrid, TrendingUp, Compass, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01", Icon: Paintbrush2,
    name: "Brand Identity",
    tagline: "Brands that are unmistakable.",
    desc: "We root every brand in strategy — then execute with obsessive craft across naming, visual identity, motion, and voice. The result: brands that people feel before they understand.",
    tags: ["Strategy", "Naming", "Visual Identity", "Guidelines"],
    href: "/services/graphic-designing",
    accent: "#a855f7",
  },
  {
    num: "02", Icon: MonitorSmartphone,
    name: "Web Design & Dev",
    tagline: "Websites that earn their keep.",
    desc: "Award-winning sites built at the intersection of design and engineering. Fast, accessible, and conversion-obsessed — on any device, in any market.",
    tags: ["UX/UI", "Webflow", "React / Next.js", "Performance"],
    href: "/services/web-development",
    accent: "#e879f9",
  },
  {
    num: "03", Icon: Sparkles,
    name: "Motion & 3D",
    tagline: "Make them stop scrolling.",
    desc: "Breathtaking motion and immersive 3D that elevate your brand from flat to phenomenal. We craft experiences that live in memory long after the page is closed.",
    tags: ["Animation", "Three.js", "After Effects", "Video"],
    href: "/services/web-development",
    accent: "#818cf8",
  },
  {
    num: "04", Icon: LayoutGrid,
    name: "Digital Products",
    tagline: "SaaS that users love.",
    desc: "End-to-end product design for platforms, apps, and enterprise tools. We own the full loop — research, UX, development, testing — and ship products built to scale from day one.",
    tags: ["Product Design", "Prototyping", "User Testing", "Handoff"],
    href: "/services/web-development",
    accent: "#a855f7",
  },
  {
    num: "05", Icon: TrendingUp,
    name: "SEO & Growth",
    tagline: "Visibility that compounds.",
    desc: "We make sure your digital investment actually gets seen. From technical SEO to content architecture and CRO — we optimize for ranking, reach, and revenue.",
    tags: ["Technical SEO", "Content Strategy", "Analytics", "CRO"],
    href: "/services/seo-services",
    accent: "#e879f9",
  },
  {
    num: "06", Icon: Compass,
    name: "Strategy & Consulting",
    tagline: "Clarity before a single pixel.",
    desc: "Every project starts with deep research and sharp positioning. We define your north star before a line of code is written — so everything that follows is exactly right.",
    tags: ["Research", "Positioning", "Roadmap", "Workshops"],
    href: "/services/digital-marketing",
    accent: "#a855f7",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: "#13132b", position: "relative", zIndex: 1, overflow: "hidden" }} className="svc-root">

      {/* Background glow */}
      <div style={{ position:"absolute", top:"-10%", right:"-8%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(168,85,247,.08) 0%,transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"5%", left:"-6%", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(232,121,249,.06) 0%,transparent 65%)", pointerEvents:"none" }} />

      {/* Header row */}
      <div className="svc-header">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <div className="eyebrow-pill" style={{ marginBottom:"18px" }}>What We Do</div>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(2rem,5.5vw,4.8rem)", fontWeight:700, lineHeight:1.04, letterSpacing:"-.025em" }}>
            Our <em style={{ fontStyle:"italic", color:"#e879f9" }}>Capabilities</em>
          </h2>
        </motion.div>
        <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7, delay:.15 }} style={{ fontSize:"clamp(.84rem,1.6vw,.92rem)", lineHeight:1.8, color:"rgba(255,255,255,.38)", maxWidth:"320px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          End-to-end digital solutions built for ambitious brands — from strategy to launch and beyond.
        </motion.p>
      </div>

      {/* Divider */}
      <div style={{ height:"1px", background:"rgba(255,255,255,.06)", margin:"0" }} />

      {/* Accordion list */}
      <div>
        {services.map((s, i) => {
          const isOpen = active === i;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ delay: i*.07, duration:.5 }}
            >
              <div
                className={`svc-row${isOpen ? " svc-row--open" : ""}`}
                onClick={() => setActive(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && setActive(isOpen ? null : i)}
                style={{ "--accent": s.accent } as React.CSSProperties}
              >
                {/* Number */}
                <span className="svc-num">{s.num}</span>

                {/* Icon box */}
                <div className={`svc-row-icon${isOpen ? " svc-row-icon--open" : ""}`}>
                  <s.Icon style={{ width:"18px", height:"18px", color: isOpen ? "#fff" : "#a855f7" }} strokeWidth={1.5} />
                </div>

                {/* Title + tagline */}
                <div className="svc-row-title">
                  <div style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.1rem,2.8vw,1.85rem)", fontWeight:700, color: isOpen ? "var(--accent)" : "#fff", transition:"color .35s", lineHeight:1.1 }}>
                    {s.name}
                  </div>
                  <div className="svc-tagline" style={{ opacity: isOpen ? 0 : 1 }}>{s.tagline}</div>
                </div>

                {/* Arrow toggle */}
                <div className="svc-row-arrow" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: isOpen ? "var(--accent)" : "rgba(255,255,255,.22)" }}>
                  <ArrowUpRight style={{ width:"22px", height:"22px" }} />
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:"auto", opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:.42, ease:[.33,1,.68,1] }}
                    style={{ overflow:"hidden" }}
                  >
                    <div className="svc-body">
                      <p style={{ fontSize:"clamp(.86rem,1.8vw,.95rem)", lineHeight:1.85, color:"rgba(255,255,255,.55)", maxWidth:"600px", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:"20px" }}>
                        {s.desc}
                      </p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"24px" }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ fontSize:".48rem", letterSpacing:".12em", textTransform:"uppercase", padding:"5px 13px", background:`rgba(168,85,247,.1)`, border:`1px solid rgba(168,85,247,.22)`, color:"#a855f7", borderRadius:"100px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{t}</span>
                        ))}
                      </div>
                      <Link href={s.href} className="svc-cta-link" onClick={e => e.stopPropagation()}>
                        Explore service <ArrowUpRight style={{ width:"14px", height:"14px" }} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row divider */}
              <div style={{ height:"1px", background:"rgba(255,255,255,.06)" }} />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA strip */}
      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="svc-bottom">
        <span style={{ fontSize:"clamp(.8rem,1.6vw,.88rem)", color:"rgba(255,255,255,.35)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Not sure which service fits? We&apos;ll figure it out together.
        </span>
        <Link href="/contact" className="btn-pill violet-fill" style={{ fontSize:".6rem" }}>
          Book a Free Call →
        </Link>
      </motion.div>

      <style>{`
        .svc-root { padding: 0; }

        /* Header */
        .svc-header {
          display: flex; flex-direction: column; gap: 20px;
          padding: 64px 16px 48px;
        }
        @media(min-width:640px)  { .svc-header { padding: 80px 32px 56px; } }
        @media(min-width:768px)  { .svc-header { flex-direction: row; align-items: flex-end; justify-content: space-between; } }
        @media(min-width:1024px) { .svc-header { padding: 100px 48px 64px; } }
        @media(min-width:1280px) { .svc-header { padding: 110px 72px 72px; } }

        /* Row */
        .svc-row {
          display: flex; align-items: center; gap: 16px;
          padding: 22px 16px;
          cursor: pointer; position: relative;
          transition: background .3s;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        @media(min-width:640px)  { .svc-row { padding: 24px 32px; gap: 20px; } }
        @media(min-width:1024px) { .svc-row { padding: 28px 48px; gap: 28px; } }
        @media(min-width:1280px) { .svc-row { padding: 30px 72px; gap: 32px; } }

        .svc-row:hover,
        .svc-row--open { background: rgba(168,85,247,.05) !important; }

        .svc-num {
          font-size:.5rem; letter-spacing:.18em; textTransform:uppercase;
          color:rgba(255,255,255,.18); font-family:'Plus Jakarta Sans',sans-serif;
          flex-shrink:0; min-width:28px;
        }

        .svc-row-icon {
          width:40px; height:40px; border-radius:12px; flex-shrink:0;
          background:rgba(168,85,247,.08); border:1px solid rgba(168,85,247,.16);
          display:flex; align-items:center; justify-content:center;
          transition:background .35s, border-color .35s;
        }
        .svc-row-icon--open {
          background:linear-gradient(135deg,#6c2bd9,#e879f9) !important;
          border-color:transparent !important;
        }

        .svc-row-title { flex:1; min-width:0; }
        .svc-tagline {
          font-size:clamp(.7rem,1.4vw,.8rem); color:rgba(255,255,255,.32);
          font-family:'Plus Jakarta Sans',sans-serif; margin-top:3px;
          transition:opacity .35s;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }

        .svc-row-arrow {
          flex-shrink:0; transition:transform .4s cubic-bezier(.33,1,.68,1), color .35s;
        }

        /* Expanded body */
        .svc-body {
          padding: 0 16px 28px 16px;
        }
        @media(min-width:640px)  {
          .svc-body { padding: 4px 32px 32px 88px; }
        }
        @media(min-width:1024px) { .svc-body { padding: 4px 48px 36px 128px; } }
        @media(min-width:1280px) { .svc-body { padding: 4px 72px 36px 164px; } }

        .svc-cta-link {
          display:inline-flex; align-items:center; gap:6px;
          font-size:.6rem; letter-spacing:.1em; text-transform:uppercase;
          color:#a855f7; font-weight:700; font-family:'Plus Jakarta Sans',sans-serif;
          transition:gap .3s, color .3s;
          text-decoration: none;
        }
        .svc-cta-link:hover { gap:10px !important; color:#e879f9 !important; }

        /* Bottom CTA */
        .svc-bottom {
          display:flex; flex-direction:column; gap:14px; align-items:flex-start;
          padding: 36px 16px 64px;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        @media(min-width:540px)  { .svc-bottom { flex-direction:row; align-items:center; justify-content:space-between; } }
        @media(min-width:640px)  { .svc-bottom { padding: 40px 32px 80px; } }
        @media(min-width:1024px) { .svc-bottom { padding: 44px 48px 88px; } }
        @media(min-width:1280px) { .svc-bottom { padding: 44px 72px 100px; } }
      `}</style>
    </section>
  );
}

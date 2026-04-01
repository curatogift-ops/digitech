"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Blob({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "50%",
      filter: "blur(70px)", pointerEvents: "none", zIndex: 0,
      animation: "blobFloat 9s ease-in-out infinite alternate",
      ...style,
    }} />
  );
}

function FloatingCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute",
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.09)",
      borderRadius: "18px",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      padding: "20px 22px",
      animation: "floatCard 6s ease-in-out infinite alternate",
      ...style,
    }}>
      {children}
    </div>
  );
}

const lbl: React.CSSProperties = {
  fontSize: ".56rem", letterSpacing: ".12em", textTransform: "uppercase",
  color: "rgba(255,255,255,.4)", marginBottom: "5px",
  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
};
const val: React.CSSProperties = {
  fontFamily: "'Fraunces', serif", fontSize: "1.5rem",
  fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1,
};
const sub: React.CSSProperties = {
  fontSize: ".56rem", color: "rgba(255,255,255,.3)", marginTop: "4px",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      display: "flex", flexDirection: "column",
      paddingTop: "var(--nav-h)",
      overflow: "hidden", position: "relative", zIndex: 1,
    }}>
      {/* Blobs */}
      <Blob style={{ width: "300px", height: "300px", top: "-60px", right: "-60px", background: "rgba(139,69,240,.2)", animationDuration: "9s" }} />
      <Blob style={{ width: "220px", height: "220px", bottom: "20%", left: "-50px", background: "rgba(232,121,249,.12)", animationDuration: "11s", animationDelay: "-3s" }} />
      <Blob style={{ width: "180px", height: "180px", top: "40%", right: "8%", background: "rgba(108,43,217,.15)", animationDuration: "7s", animationDelay: "-5s" }} />
      <div className="dot-grid" />



      {/* Main layout — stacks on mobile, row on desktop */}
      <div className="hero-body-outer">
      <div className="hero-body">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, maxWidth: "660px" }}
        >
          {/* Headline */}
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            fontWeight: 700, lineHeight: 1.06, letterSpacing: "-.025em",
            marginBottom: "20px",
          }}>
            We Make<br />
            <span style={{ color: "#a855f7" }}>Digital</span><br />
            <span style={{ WebkitTextStroke: "2px rgba(255,255,255,.2)", color: "transparent" }}>Magic</span>{" "}
            <span style={{ display: "inline-block", animation: "wave 3s ease-in-out infinite", color: "rgba(255,255,255,.4)", fontSize: ".58em" }}>✦</span><br />
            <span style={{ color: "#e879f9" }}>Happen.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "clamp(.88rem, 2.2vw, 1.05rem)",
              lineHeight: 1.8, color: "rgba(255,255,255,.45)",
              maxWidth: "420px", marginBottom: "28px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <strong style={{ color: "#fff", fontWeight: 600 }}>DigiTechAvenue</strong>{" "}
            crafts brands, websites, and digital products that feel alive — from Bengaluru to the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
          >
            <Link href="/contact" className="btn-pill solid">Start a Project →</Link>
            <Link href="#work" className="btn-pill outline">See Our Work</Link>
          </motion.div>
        </motion.div>

        {/* Right — floating cards, desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="hero-cards"
        >
          <FloatingCard style={{ top: 0, left: 0, width: "185px", animationDuration: "6s" }}>
            <div style={lbl}>Projects Launched</div>
            <div style={val}>340<em style={{ color: "#e879f9", fontStyle: "normal", fontSize: ".52em" }}>+</em></div>
            <div style={{ height: "3px", background: "rgba(255,255,255,.07)", borderRadius: "4px", marginTop: "12px", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: "4px", background: "linear-gradient(90deg,#8b45f0,#e879f9)", width: "88%", animation: "barGrow 2s ease 1s both" }} />
            </div>
          </FloatingCard>
          <FloatingCard style={{ top: "60px", right: 0, width: "168px", animationDuration: "8s", animationDelay: "-2s" }}>
            <div style={lbl}>Client Retention</div>
            <div style={val}>98<em style={{ color: "#e879f9", fontStyle: "normal", fontSize: ".52em" }}>%</em></div>
            <div style={sub}>Consistently since 2019</div>
          </FloatingCard>
          <FloatingCard style={{ bottom: "40px", left: "20px", width: "198px", animationDuration: "7s", animationDelay: "-4s" }}>
            <div style={lbl}>Industry Recognition</div>
            <div style={val}>18<em style={{ color: "#e879f9", fontStyle: "normal", fontSize: ".52em" }}>+</em></div>
            <div style={sub}>Awwwards · FWA · Webby</div>
          </FloatingCard>
        </motion.div>
      </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          position: "relative", zIndex: 2,
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          borderTop: "1px solid rgba(255,255,255,.07)",
        }}
      >
        {[
          { n: "12", sfx: "+", l: "Years of craft" },
          { n: "340", sfx: "+", l: "Projects delivered" },
          { n: "98", sfx: "%", l: "Client retention" },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "16px 8px", textAlign: "center",
            borderRight: i < 2 ? "1px solid rgba(255,255,255,.07)" : "none",
          }}>
            <div style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
              fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1,
            }}>
              {s.n}<em style={{ color: "#a855f7", fontStyle: "normal", fontSize: ".6em" }}>{s.sfx}</em>
            </div>
            <div style={{
              fontSize: "clamp(.44rem, 1.2vw, .52rem)", letterSpacing: ".1em",
              textTransform: "uppercase", color: "rgba(255,255,255,.35)",
              marginTop: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>{s.l}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes wave { 0%,100%{transform:rotate(-2deg);} 50%{transform:rotate(2deg);} }

        .hero-section { min-height: auto; }
        @media(min-width:768px) { .hero-section { min-height: 100svh; } }

        .hero-pill-wrap { padding-left:16px; padding-right:16px; }

        /* Outer wrapper: centres content and applies horizontal gutter */
        .hero-body-outer {
          position: relative; z-index: 2;
          flex: 1;
          display: flex; flex-direction: column;
          padding: 0 16px;
        }

        /* Inner: stacks content vertically on mobile */
        .hero-body {
          flex: 1;
          display: flex; flex-direction: column;
          justify-content: center;
          padding: 16px 0 28px;
          gap: 0;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        .hero-cards { display: none; }

        /* ── Tablet (640px) ── */
        @media(min-width:640px) {
          .hero-pill-wrap { padding-left:32px; padding-right:32px; }
          .hero-body-outer { padding-left:32px; padding-right:32px; }
        }

        /* ── Laptop (1024px) ── */
        @media(min-width:1024px) {
          .hero-pill-wrap { padding-left:48px; padding-right:48px; }
          .hero-body-outer { padding-left:48px; padding-right:48px; }
        }

        /* ── Desktop (1280px) — side by side + cards ── */
        @media(min-width:1280px) {
          .hero-pill-wrap { padding-left:72px; padding-right:72px; }
          .hero-body-outer { padding-left:72px; padding-right:72px; }
          .hero-body {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 48px;
            padding: 32px 0 44px;
          }
          .hero-cards {
            display: block;
            position: relative;
            width: 380px;
            min-width: 340px;
            height: 400px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll-to-top only — no WhatsApp */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "16px",
          zIndex: 300,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.07)",
          border: "1px solid rgba(255,255,255,.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#fff",
          fontSize: "1.1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity .35s, transform .35s, background .3s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          pointerEvents: visible ? "all" : "none",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,69,240,.35)"; e.currentTarget.style.borderColor = "rgba(139,69,240,.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"; }}
      >
        ↑
      </button>
    </>
  );
}

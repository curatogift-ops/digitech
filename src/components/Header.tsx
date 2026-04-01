"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work",     href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/about" },
  { label: "Process",  href: "/#process" },
  { label: "Contact",  href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Custom cursor
  useEffect(() => {
    const cur  = document.getElementById("dta-cur");
    const ring = document.getElementById("dta-cur-ring");
    if (!cur || !ring) return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);
    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <div id="dta-cur" />
      <div id="dta-cur-ring" />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        height: "var(--nav-h)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px",
        transition: "background .4s, backdrop-filter .4s, border-color .4s",
        ...(scrolled ? {
          background: "rgba(13,13,31,.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        } : {}),
      }} className="header-inner">

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(1rem, 4vw, 1.25rem)",
          fontWeight: 700, fontStyle: "italic",
          letterSpacing: "-.01em", color: "#fff", zIndex: 10,
          flexShrink: 0,
        }}>
          Digitech<em style={{ fontStyle: "normal", color: "#e879f9" }}>Avenue</em>
          <em style={{ fontStyle: "normal", color: "#a855f7" }}>.</em>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ listStyle: "none", gap: "28px" }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <Link href={link.href} style={{
                fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase",
                color: "rgba(255,255,255,.42)", transition: "color .3s",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
              }} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/contact" className="nav-cta-btn" style={{
            fontSize: ".62rem", letterSpacing: ".12em", textTransform: "uppercase",
            padding: "9px 20px",
            background: "#fff", color: "#0d0d1f",
            fontWeight: 700, borderRadius: "100px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: "transform .2s",
            whiteSpace: "nowrap",
          }}>
            Start a Project
          </Link>

          {/* Hamburger — always visible on small screens */}
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px", zIndex: 10,
              display: "flex", flexDirection: "column", gap: "5px",
            }} className="hamburger-btn">
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "#fff",
              transition: "transform .35s, opacity .35s",
              transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "#fff",
              transition: "opacity .35s",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "#fff",
              transition: "transform .35s",
              transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 400,
        background: "#13132b",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 24px",
        clipPath: mobileOpen
          ? "circle(150% at calc(100% - 40px) 32px)"
          : "circle(0% at calc(100% - 40px) 32px)",
        transition: "clip-path .65s cubic-bezier(.77,0,.18,1)",
        pointerEvents: mobileOpen ? "all" : "none",
        overflowY: "auto",
      }}>
        <nav>
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} onClick={close} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.2rem, 10vw, 5rem)",
              fontWeight: 700, fontStyle: "italic",
              color: "rgba(255,255,255,.15)",
              padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.07)",
              transition: "color .3s, padding-left .3s",
            }} className="mob-nav-link">
              {link.label}
              <span style={{ fontSize: ".4em", fontStyle: "normal", opacity: .35 }}>→</span>
            </Link>
          ))}
        </nav>
        <Link href="/contact" onClick={close} style={{
          marginTop: "32px", alignSelf: "flex-start",
          background: "#fff", color: "#0d0d1f",
          padding: "12px 28px", borderRadius: "100px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700,
        }}>
          Start a Project →
        </Link>
        <div style={{
          marginTop: "36px", display: "flex", gap: "20px",
          fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase",
          color: "rgba(255,255,255,.28)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          flexWrap: "wrap",
        }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mob-social">Instagram</a>
          <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer" className="mob-social">LinkedIn</a>
          <a href="https://dribbble.com"  target="_blank" rel="noopener noreferrer" className="mob-social">Dribbble</a>
        </div>
      </div>

      <style>{`
        .header-inner { padding-left: 16px; padding-right: 16px; }
        @media(min-width:640px)  { .header-inner { padding-left: 24px; padding-right: 24px; } }
        @media(min-width:1024px) { .header-inner { padding-left: 48px; padding-right: 48px; } }

        /* Desktop: show nav, shrink hamburger */
        .nav-desktop { display: none; }
        .nav-cta-btn { display: none; }
        .hamburger-btn { display: flex; }
        @media(min-width:768px) {
          .nav-desktop { display: flex; }
          .nav-cta-btn { display: inline-block; }
        }
        @media(min-width:1024px) {
          .hamburger-btn { display: none; }
        }

        .nav-link:hover  { color: #fff !important; }
        .mob-nav-link:hover { color: #fff !important; padding-left: 12px !important; }
        .mob-social:hover { color: #fff !important; }
      `}</style>
    </>
  );
}

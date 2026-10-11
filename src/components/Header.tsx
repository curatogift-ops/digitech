"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const groups = [
  {
    title: "Build",
    links: [
      { name: "Website development", href: "/services/web-development" },
      { name: "E-commerce development", href: "/contact" },
      { name: "Mobile app development", href: "/services/app-development" },
      { name: "Custom web applications", href: "/contact" },
      { name: "Admin panels and portals", href: "/contact" },
    ],
  },
  {
    title: "Grow",
    links: [
      { name: "Performance marketing", href: "/contact" },
      { name: "Google Ads", href: "/contact" },
      { name: "SEO", href: "/services/seo-optimization" },
      { name: "Social media marketing", href: "/contact" },
      { name: "Conversion tracking", href: "/contact" },
    ],
  },
  {
    title: "Automate and create",
    links: [
      { name: "AI integration", href: "/#ai" },
      { name: "UI / UX design", href: "/services/ui-ux-design" },
      { name: "Graphic design", href: "/contact" },
      { name: "Content writing", href: "/contact" },
    ],
  },
];

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <header className="site-header">
      <div className="wrap site-header-bar">
        <Link href="/" className="brand" aria-label="Digitech Avenue" onClick={() => setOpen(false)}>
          <img src="/brand-logo.png" alt="Digitech Avenue" />
        </Link>
        <ul className="nav-desktop">
          <li className="has-menu">
            <Link href="/#services">Services</Link>
            <div className="mega">
              {groups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  {group.links.map((link) => (
                    <Link key={link.name} href={link.href}>{link.name}</Link>
                  ))}
                </div>
              ))}
            </div>
          </li>
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Insights</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="header-actions">
          <a className="wa-btn" href="https://wa.me/917996998142" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </a>
          <Link href="/#contact" className="btn btn-accent header-cta">Start a project</Link>
          <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav wrap">
          <Link href="/#work" onClick={(e) => { e.preventDefault(); go("/#work"); }}>Work</Link>
          <Link href="/about" onClick={(e) => { e.preventDefault(); go("/about"); }}>About</Link>
          <Link href="/blog" onClick={(e) => { e.preventDefault(); go("/blog"); }}>Insights</Link>
          <Link href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>Contact</Link>
          {groups.map((group) => (
            <div key={group.title}>
              <p className="group-label">{group.title}</p>
              {group.links.map((link) => (
                <Link key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); go(link.href); }}>{link.name}</Link>
              ))}
            </div>
          ))}
          <Link href="/#contact" className="btn btn-accent" style={{ marginTop: 16 }} onClick={(e) => { e.preventDefault(); go("/#contact"); }}>Start a project</Link>
        </nav>
      )}
    </header>
  );
}

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
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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

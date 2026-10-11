import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { name: "Websites and e-commerce", href: "/services/web-development" },
      { name: "Mobile apps", href: "/services/app-development" },
      { name: "UI / UX design", href: "/services/ui-ux-design" },
      { name: "SEO", href: "/services/seo-optimization" },
      { name: "AI and automation", href: "/#ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Our work", href: "/portfolio" },
      { name: "Insights", href: "/blog" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "info@digitechavenue.com", href: "mailto:info@digitechavenue.com" },
      { name: "+91 799 699 8142", href: "tel:+917996998142" },
      { name: "Mathikere, Bengaluru 560054", href: "https://www.google.com/maps/dir//Digitech+Avenue,+Mathikere,+Bengaluru,+Karnataka+560054" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="brand" aria-label="Digitech Avenue">
            <img className="footer-logo" src="/brand-logo.png" alt="" style={{ height: 72 }} />
          </Link>
          <p style={{ marginTop: 14, maxWidth: 280 }}>
            Websites, apps, custom systems, performance marketing and practical AI for businesses.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.name}><Link href={link.href}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-bar">
        <span>© {new Date().getFullYear()} Digitech Avenue</span>
        <span style={{ display: "flex", gap: 18 }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}

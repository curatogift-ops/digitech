import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web development | DigiTech Avenue",
  description: "Custom websites that load quickly, read clearly on a phone, and are structured for search.",
};

const points = [
  { title: "Speed", text: "Pages are built to load quickly so people stay long enough to read the offer." },
  { title: "Every screen size", text: "Layouts are checked on phones, tablets, and desktops, not only a wide mockup." },
  { title: "Room to grow", text: "The structure can take new pages, a store, or a booking flow without a rebuild." },
];

export default function WebDevelopmentPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Web development</p>
        <h1>Sites that explain the business and ask for the next step.</h1>
        <p className="lede">We build custom sites in modern tools, including React and Next.js. The goal is a page someone can trust, use on a phone, and act on.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/contact">Get a quote</Link>
          <Link className="btn btn-ghost" href="/portfolio">See sites we shipped</Link>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 12 }}>
        <div className="wrap point-grid">
          {points.map((point) => (
            <article key={point.title} className="card point">
              <h2 style={{ fontSize: "1.5rem", marginBottom: 8 }}>{point.title}</h2>
              <p style={{ color: "var(--muted)" }}>{point.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

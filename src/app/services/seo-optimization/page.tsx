import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO | DigiTech Avenue",
  description: "Search work that improves the pages people already need: structure, speed, and the words on the page.",
};

const points = [
  { title: "On the page", text: "Titles, headings, and copy that match the searches your customers already type." },
  { title: "Under the page", text: "Speed, mobile layout, and a structure search engines can crawl." },
  { title: "Beyond the site", text: "The mentions and links that tell Google other people trust you." },
];

export default function SeoPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">SEO</p>
        <h1>Show up for the searches that already have a buyer behind them.</h1>
        <p className="lede">We do not chase vanity rankings. The work is aimed at visits that can become enquiries: the right pages, the right words, and a site that loads.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/contact">Ask for an audit</Link>
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

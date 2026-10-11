import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI and UX design | DigiTech Avenue",
  description: "Interface design for websites and products. Flows, screens, and a system your team can keep using.",
};

const points = [
  { title: "Flows first", text: "We map the path from arrival to enquiry before we choose type or colour." },
  { title: "Screens you can judge", text: "Prototypes in Figma so you can click through the product before it is built." },
  { title: "A system, not one-off art", text: "Type, colour, and components are documented so the next page matches the first." },
];

export default function UiUxDesignPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">UI / UX design</p>
        <h1>Design that helps someone decide, then looks the part.</h1>
        <p className="lede">People judge a site in a glance. We use that glance for the offer, then make the rest of the path obvious.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/contact">Start a design project</Link>
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

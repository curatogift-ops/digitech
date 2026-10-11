import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App development | DigiTech Avenue",
  description: "Mobile and web apps for iOS and Android, built around a first version people can actually use.",
};

const points = [
  { title: "One codebase where it helps", text: "React Native and Flutter when you need both stores without paying for two teams." },
  { title: "A backend that can grow", text: "Accounts, data, and APIs designed for the next year, not only the demo." },
  { title: "It has to feel finished", text: "Motion and response time are part of the build, because a slow app gets deleted." },
];

export default function AppDevelopmentPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">App development</p>
        <h1>An app people open again, not a demo that stalls.</h1>
        <p className="lede">We design and build iOS, Android, and web apps. We start with the smallest version that a real user can finish a task in.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/contact">Discuss an idea</Link>
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

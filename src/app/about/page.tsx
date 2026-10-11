import Link from "next/link";

const points = [
  { title: "Who we are", text: "A small studio in Bengaluru. We partner with founders and marketing teams who want a site that can explain the offer and collect the next enquiry." },
  { title: "What we promise", text: "Clear pages, fast load times, and a build you can keep. We would rather ship a focused site than a large one nobody maintains." },
  { title: "What we make", text: "Marketing sites, stores, product interfaces, search programs, and the occasional app when the business needs one." },
];

const reasons = [
  { title: "Built for the brief, not a template", text: "Layout, copy structure, and components follow the way you sell." },
  { title: "Designed around the decision", text: "Every page has a job: explain, compare, or ask for the next step." },
  { title: "Fast enough to keep people", text: "We treat load time as part of the design, not a later optimisation." },
  { title: "Someone stays after launch", text: "Support is included so the first month is not a scramble." },
];

export default function AboutPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">About</p>
        <h1>A studio for businesses that need the site to work.</h1>
        <p className="lede">
          DigiTech Avenue helps companies look credible online and turn that attention into conversations. We have been doing it from Bengaluru since the studio opened, for local brands and teams abroad.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap point-grid">
          {points.map((item) => (
            <article key={item.title} className="card point">
              <h2 style={{ fontSize: "1.6rem", marginBottom: 10 }}>{item.title}</h2>
              <p style={{ color: "var(--muted)" }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gap: 28 }}>
          <div>
            <p className="kicker">Why teams stay</p>
            <h2 className="section-title" style={{ marginTop: 12 }}>Less theatre. More of the work that shows up in enquiries.</h2>
          </div>
          <div className="quotes">
            {reasons.map((item) => (
              <article key={item.title} className="card quote">
                <h3 style={{ fontSize: "1.45rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontFamily: "inherit", fontSize: "1.05rem", color: "var(--muted)" }}>{item.text}</p>
              </article>
            ))}
          </div>
          <blockquote className="card quote">
            <p>“Every page should earn its place. If it does not help someone trust you or contact you, it should not be there.”</p>
            <strong>DigiTech Avenue</strong>
            <small>Studio principle</small>
          </blockquote>
          <div>
            <Link className="btn btn-accent" href="/contact">Talk to the studio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

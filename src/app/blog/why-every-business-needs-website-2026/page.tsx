import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="page-pad">
      <article className="wrap article" style={{ paddingBottom: 80 }}>
        <p className="kicker">Business · 29 Jan 2026 · 5 min</p>
        <h1 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", maxWidth: "18ch", margin: "12px 0 20px" }}>
          Why every business needs a professional website in 2026
        </h1>
        <div className="prose-image">
          <img src="/images/blog/main-image.png" alt="A team reviewing a website on a laptop" />
        </div>
        <p style={{ fontSize: "1.25rem", color: "var(--ink)" }}>
          In 2026, the first thing customers do before trusting a business is search online. Is your business ready to be found?
        </p>
        <h2>A website is no longer optional</h2>
        <p>
          If your business does not have a professional website, you are already losing people before they contact you. A website is your online office, salesperson, and brand, working when the shop is closed.
        </p>
        <h2>1. People search before they trust</h2>
        <p>
          Before they call or visit, people look up your name. A clear site shows the business is real, active, and easy to reach.
        </p>
        <div className="quotes" style={{ margin: "20px 0 8px" }}>
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ marginBottom: 8 }}>Without a site</h3>
            <p style={{ color: "var(--muted)" }}>Trust drops immediately, leads go elsewhere, and the brand looks smaller than it is.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ marginBottom: 8 }}>With a clear site</h3>
            <p style={{ color: "var(--muted)" }}>People can check you, leave a message, and decide to buy without waiting for a reply.</p>
          </div>
        </div>
        <h2>2. Credibility is visible</h2>
        <p>The site is how serious you look. It tells visitors you care about the work and about how they experience it.</p>
        <div className="prose-image">
          <img src="/images/blog/secondary-image.png" alt="Planning business growth" />
        </div>
        <h2>3. It sells while you are away</h2>
        <p>Unlike a feed or a shopfront, a website explains the offer and collects enquiries overnight.</p>
        <div className="band" style={{ marginTop: 28 }}>
          <h2 className="section-title">Ready to put the business online properly?</h2>
          <p className="lede" style={{ margin: "12px 0 18px" }}>We build sites that explain the offer and collect the next conversation.</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btn-light" href="/services">View services</Link>
            <a className="btn btn-ghost" style={{ color: "#f4f7fb", borderColor: "rgba(244,247,251,.35)" }} href="https://wa.me/917996998142">WhatsApp us</a>
          </div>
        </div>
        <p style={{ marginTop: 28 }}><Link href="/blog">← All insights</Link></p>
      </article>
    </main>
  );
}

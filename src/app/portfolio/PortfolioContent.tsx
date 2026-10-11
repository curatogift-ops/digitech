import Link from "next/link";

const featured = [
  { title: "Curato Gift", category: "E-commerce", client: "Luxury gifting", img: "/projects/curato-gift.png", note: "A store built to make a gift easy to choose and send." },
  { title: "Sider Lehenga", category: "Fashion", client: "Retail brand", img: "/projects/sider-lehenga.png", note: "Product pages that carry the craft of the clothes." },
  { title: "RR Trust", category: "Organisation", client: "Community trust", img: "/projects/rr-trust.png", note: "A clear public site for programs, people, and contact." },
  { title: "Security services", category: "Lead generation", client: "Security firm", img: "/projects/security-services.png", note: "Service pages aimed at a quote, not a brochure scroll." },
];

const more = [
  { title: "The Travel Book", category: "Travel", result: "Bookings up after a clearer offer" },
  { title: "GetWings Aviations", category: "Charter", result: "A catalogue people can actually enquire from" },
  { title: "Stylus Arcade", category: "Product", result: "An app people return to" },
  { title: "Beatwisse", category: "Audio", result: "A brand system and a site that match" },
  { title: "Next Pro", category: "Fintech", result: "A product interface for daily use" },
  { title: "Samzal", category: "Property", result: "Listings that load and convert" },
];

export function PortfolioContent() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Work</p>
        <h1>Projects we can show, not mockups we imagined.</h1>
        <p className="lede">A sample of sites and stores. If you want something in the same family, the call is the fastest way to see if the fit is real.</p>
      </section>
      <section className="section" style={{ paddingTop: 12 }}>
        <div className="wrap project-grid">
          {featured.map((project) => (
            <article key={project.title} className="card project-tile">
              <img src={project.img} alt={project.title} />
              <div>
                <p className="kicker">{project.category}</p>
                <h2 style={{ fontSize: "1.8rem", margin: "8px 0" }}>{project.title}</h2>
                <p style={{ color: "var(--muted)" }}>{project.note}</p>
                <p style={{ marginTop: 10, fontSize: "0.92rem" }}>{project.client}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Also in the studio</h2>
          <div className="service-list">
            {more.map((item) => (
              <div key={item.title} className="service-row">
                <span className="service-meta">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
                <span />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link className="btn btn-accent" href="/contact">Start a project like these</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

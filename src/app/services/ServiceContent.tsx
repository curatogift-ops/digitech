"use client";

import Link from "next/link";

const services = [
  {
    title: "Websites",
    href: "/services/web-development",
    text: "Marketing sites and landing pages built in Next.js. Fast, readable, and structured so search engines and people can both follow the offer.",
    points: ["Custom pages, not a theme skin", "Mobile layouts checked on real widths", "Forms, analytics, and basic SEO included"],
  },
  {
    title: "Search",
    href: "/services/seo-optimization",
    text: "Technical cleanup, page structure, and content so you show up for the searches that already have intent.",
    points: ["Technical audit and fixes", "Titles, headings, and internal links", "Search Console and measurement"],
  },
  {
    title: "Interface design",
    href: "/services/ui-ux-design",
    text: "Screens and flows for sites and products. We design the path to an enquiry before we decorate it.",
    points: ["Flows and prototypes", "Visual system you can reuse", "Handoff a developer can build"],
  },
  {
    title: "Apps",
    href: "/services/app-development",
    text: "Mobile and web products when a website is not enough. We start with the smallest version that can be used.",
    points: ["iOS and Android", "Web apps and dashboards", "APIs and the accounts around them"],
  },
  {
    title: "Stores",
    href: "/contact",
    text: "Catalogues, checkout, and the pages around a purchase. Built so browsing does not end in a dead end.",
    points: ["Shopify or a custom store", "Payments and product filters", "Accounts when you need them"],
  },
  {
    title: "Campaigns",
    href: "/contact",
    text: "Paid search and social when you already know the offer. We set the pages and the tracking before the spend.",
    points: ["Landing pages for ads", "Conversion tracking", "A clear read on what is working"],
  },
];

export function ServiceContent() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Services</p>
        <h1>Work that starts with the customer, not the deliverable.</h1>
        <p className="lede">Pick a starting point. Most projects mix two of these. We will tell you which ones you actually need.</p>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap" style={{ display: "grid", gap: 16 }}>
          {services.map((service) => (
            <article key={service.title} className="card" style={{ padding: 24, display: "grid", gap: 12 }}>
              <h2 style={{ fontSize: "2rem" }}>{service.title}</h2>
              <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>{service.text}</p>
              <ul className="check-list" style={{ margin: 0 }}>
                {service.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <Link href={service.href} className="btn btn-ghost" style={{ justifySelf: "start" }}>
                {service.href === "/contact" ? "Ask about this" : "See the service"}
              </Link>
            </article>
          ))}
          <div className="band" style={{ marginTop: 8 }}>
            <h2 className="section-title">Not sure where to start?</h2>
            <p className="lede" style={{ margin: "12px 0 20px" }}>Send a note about the business. We will suggest a first version and a price range.</p>
            <Link className="btn btn-light" href="/contact">Book a call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

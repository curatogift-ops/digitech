import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    note: "A focused site for a new offer",
    features: ["5–8 custom pages", "Mobile layouts", "Basic search setup", "Contact form", "10–14 day delivery", "1 month of support"],
    cta: "Start with this",
  },
  {
    name: "Business",
    price: "₹45,000",
    note: "A site that has to sell",
    popular: true,
    features: ["Up to 15 pages", "Store or lead flows", "Speed pass", "Search structure", "15–20 day delivery", "3 months of support"],
    cta: "Choose Business",
  },
  {
    name: "Custom",
    price: "Quoted",
    note: "Apps, brands, and longer builds",
    features: ["Product or app scope", "Brand system if needed", "A named point of contact", "Integrations", "Milestone payments", "Support by agreement"],
    cta: "Request a quote",
  },
];

const faqs = [
  { q: "Is support included?", a: "Starter includes one month. Business includes three. Longer care is quoted with the project." },
  { q: "Can we pay in parts?", a: "Yes. Usually half to begin and half at launch. Longer work can be split across milestones." },
  { q: "Do you bill by the hour?", a: "We prefer a fixed price. Consulting outside a project is quoted before it starts." },
  { q: "Do nonprofits get a different rate?", a: "Sometimes. Tell us about the organisation and we will say what we can do." },
];

export default function PricingPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Pricing</p>
        <h1>Plain ranges, before anyone writes a proposal.</h1>
        <p className="lede">These are starting points for typical sites. Apps and unusual scopes are quoted after a short call. Nothing here is a template fee in disguise.</p>
      </section>
      <section className="section" style={{ paddingTop: 12 }}>
        <div className="wrap price-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`card price-card${plan.popular ? " featured" : ""}`}>
              {plan.popular && <p className="kicker" style={{ color: "#9ec5ff" }}>Most chosen</p>}
              <h2 style={{ fontSize: "1.4rem", marginTop: 8 }}>{plan.name}</h2>
              <p className="price" style={{ margin: "10px 0 4px" }}>{plan.price}</p>
              <p>{plan.note}</p>
              <ul className="check-list">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className={`btn ${plan.popular ? "btn-light" : "btn-accent"}`} href="/contact">{plan.cta}</Link>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 48, display: "grid", gap: 8 }}>
          <h2 className="section-title">Pricing questions</h2>
          <div className="faq" style={{ marginTop: 8 }}>
            {faqs.map((item, index) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

const caps = [
  { title: "Websites and e-commerce", text: "Fast, responsive websites and online stores built around what your visitors need to do: understand your offer, then get in touch or buy.", href: "/services/web-development", link: "What's included" },
  { title: "Mobile app development", text: "Apps for your customers or your team, from interface design through development and the integrations behind them.", href: "/services/app-development", link: "What's included" },
  { title: "Custom software and admin panels", text: "Dashboards, portals and internal tools that bring scattered spreadsheets and messages into one place to manage the work.", href: "/contact", link: "Talk it through", service: "Custom software and admin panels" },
  { title: "Performance marketing", text: "Google Ads and paid social tied to landing pages and conversion tracking, so you can see which campaigns produce enquiries, not just clicks.", href: "/contact", link: "What's included", service: "Performance marketing" },
  { title: "AI integration and automation", text: "Practical automation and AI features for repetitive tasks and workflows, scoped to what your business actually needs.", href: "/#ai", link: "How we approach it" },
];

const problems = [
  { q: "We need a professional website.", a: "Website development", service: "Website development", href: "/services/web-development" },
  { q: "Our team runs on spreadsheets and messages.", a: "Custom software and admin panels", service: "Custom software and admin panels", href: "/contact" },
  { q: "Customers or staff need their own portal.", a: "Portals and admin panels", service: "Custom software and admin panels", href: "/contact" },
  { q: "We want a mobile app.", a: "Mobile app development", service: "Mobile app development", href: "/services/app-development" },
  { q: "Our ads bring clicks, but we can't tell which become leads.", a: "Performance marketing and conversion tracking", service: "Performance marketing", href: "/contact" },
  { q: "The same tasks eat our week.", a: "AI integration and workflow automation", service: "AI integration and automation", href: "/#ai" },
];

const projects = [
  { name: "Curato Gift", text: "An online store for choosing and sending gifts.", img: "/projects/curato-gift.png" },
  { name: "Sider Lehenga", text: "Product pages for a fashion brand.", img: "/projects/sider-lehenga.png" },
  { name: "RR Trust", text: "A public site for programs, people, and contact.", img: "/projects/rr-trust.png" },
  { name: "Security services", text: "Service pages written to earn a quote.", img: "/projects/security-services.png" },
];

const build = [
  { name: "Website development", href: "/services/web-development", service: "Website development" },
  { name: "E-commerce development", href: "/contact", service: "E-commerce development" },
  { name: "Mobile app development", href: "/services/app-development", service: "Mobile app development" },
  { name: "Custom web applications", href: "/contact", service: "Custom software and admin panels" },
  { name: "Admin panels, CRM and business portals", href: "/contact", service: "Custom software and admin panels" },
];
const grow = [
  { name: "Performance marketing", href: "/contact", service: "Performance marketing" },
  { name: "Google Ads", href: "/contact", service: "Performance marketing" },
  { name: "SEO", href: "/services/seo-optimization", service: "SEO" },
  { name: "Social media marketing", href: "/contact", service: "Social media marketing" },
  { name: "Conversion tracking and reporting", href: "/contact", service: "Performance marketing" },
];
const create = [
  { name: "AI integration and workflow automation", href: "/#ai", service: "AI integration and automation" },
  { name: "Graphic design", href: "/contact", service: "Graphic design" },
  { name: "Content writing", href: "/contact", service: "Content writing" },
  { name: "Online reputation management", href: "/contact", service: "Online reputation management" },
];

const steps = [
  { name: "Discover", text: "We learn your business, your audience and what you need the project to do." },
  { name: "Plan", text: "We define scope, priorities and approach before any build begins." },
  { name: "Design and build", text: "We create and develop the solution, with reviews along the way." },
  { name: "Test and launch", text: "We check quality, usability and tracking, then go live." },
  { name: "Improve", text: "We support, maintain or optimise as agreed." },
];

const reasons = [
  ["Design and technology together", "What is designed is built with its technical limits in mind, so fewer surprises later."],
  ["Business problems first", "We begin with what you need to achieve, then choose the tools and approach."],
  ["Clear scope and communication", "Scope and priorities are agreed before work starts, and you hear from us as it progresses."],
  ["Development and marketing considered together", "A site or system is planned with the way people will find and use it."],
  ["Tailored to your requirements", "Solutions are shaped around your confirmed needs, not a fixed package."],
];

const faqs = [
  ["What services do you offer?", "Websites and e-commerce, mobile apps, custom software and admin panels, performance marketing, AI integration and automation, plus SEO, social media, graphic design, content writing and reputation management."],
  ["How does a project start?", "With a conversation about what you want to build, improve or automate. We then agree the scope and approach before work begins."],
  ["Can you improve my existing website instead of rebuilding it?", "Often, yes. We review what you have first and recommend the smallest change that solves the problem."],
  ["Can a custom system connect to the tools we already use?", "Where those tools offer an API or data export, integrations are usually possible. We confirm what's feasible while scoping the project."],
  ["How do you measure marketing results?", "We set up conversion tracking so form submissions, calls and WhatsApp enquiries are counted, and we report on those rather than on clicks alone."],
  ["What can AI actually do for our business?", "It can help with repetitive, rules-based work such as sorting requests, drafting replies for review or moving information between tools. We test on your real information before committing."],
  ["How much will it cost, and how long will it take?", "Both depend on scope. We quote after we understand the requirements. Typical websites are outlined on the pricing page; apps and custom systems are quoted individually."],
  ["Do you support projects after launch?", "Support and maintenance are agreed for each project."],
];

export function HomePage() {
  const track = useRef<HTMLDivElement>(null);
  const scrollByCard = (dir: number) => {
    const card = track.current?.querySelector(".proj");
    const width = card ? card.getBoundingClientRect().width + 16 : 340;
    track.current?.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <main>
      <section className="hp-hero">
        <div className="wrap hp-hero-grid">
          <div>
            <h1>Digital products. Smarter systems. Measurable growth.</h1>
            <p className="lede">We design and develop websites, mobile apps and custom business systems, and help businesses grow through performance marketing and practical AI solutions.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="#contact">Start a project</Link>
              <Link className="btn btn-on-dark" href="#work">Explore our work</Link>
            </div>
            <p className="wa">Prefer a quick message? <a href="https://wa.me/917996998142">Chat on WhatsApp</a></p>
          </div>
          <div className="hp-stage" aria-hidden="true">
            <svg viewBox="0 0 640 470" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 300H640" fill="none" stroke="#1f5bff" strokeWidth="12" strokeOpacity=".22" />
              <path d="M0 300H640" fill="none" stroke="#3b72ff" strokeWidth="2.5" />
              <g fill="#060b1d" stroke="#5b8cff" strokeWidth="3">
                <circle cx="70" cy="300" r="7" /><circle cx="190" cy="300" r="7" /><circle cx="310" cy="300" r="7" /><circle cx="430" cy="300" r="7" /><circle cx="550" cy="300" r="7" />
              </g>
              <g fill="#cfd9ff" fontSize="13" fontFamily="Instrument Sans, sans-serif" fontWeight="600">
                <text x="82" y="324">Web</text><text x="202" y="324">Apps</text><text x="322" y="324">Software</text><text x="442" y="324">Marketing</text><text x="562" y="324">AI</text>
              </g>
              <g>
                <rect x="20" y="60" width="200" height="130" rx="8" fill="#0e1936" stroke="#2b4bb0" />
                <rect x="32" y="90" width="118" height="14" rx="3" fill="#1f5bff" />
                <rect x="32" y="112" width="104" height="6" rx="3" fill="#2a3f86" />
                <rect x="32" y="146" width="54" height="18" rx="4" fill="#3b72ff" />
              </g>
              <g>
                <rect x="170" y="110" width="84" height="160" rx="14" fill="#0a1330" stroke="#5b8cff" />
                <rect x="180" y="132" width="64" height="10" rx="3" fill="#1f5bff" />
                <rect x="180" y="150" width="64" height="34" rx="5" fill="#16295c" />
                <rect x="180" y="190" width="64" height="34" rx="5" fill="#16295c" />
              </g>
              <g>
                <rect x="290" y="80" width="170" height="150" rx="8" fill="#0e1936" stroke="#2b4bb0" />
                <rect x="342" y="186" width="16" height="30" rx="2" fill="#3b72ff" />
                <rect x="366" y="168" width="16" height="48" rx="2" fill="#3b72ff" />
                <rect x="390" y="176" width="16" height="40" rx="2" fill="#3b72ff" />
                <rect x="414" y="152" width="16" height="64" rx="2" fill="#3b72ff" />
              </g>
              <g>
                <rect x="370" y="345" width="160" height="105" rx="8" fill="#0e1936" stroke="#2b4bb0" />
                <path d="M386 430L412 410L438 419L470 388L514 372" fill="none" stroke="#7ea2ff" strokeWidth="2.5" />
              </g>
              <g>
                <rect x="480" y="70" width="140" height="130" rx="8" fill="#0e1936" stroke="#2b4bb0" />
                <circle cx="505" cy="100" r="8" fill="#0a1330" stroke="#7ea2ff" />
                <circle cx="595" cy="100" r="8" fill="#0a1330" stroke="#7ea2ff" />
                <circle cx="550" cy="135" r="11" fill="#0a1330" stroke="#7ea2ff" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="hp-section" id="capabilities">
        <div className="wrap">
          <div className="hp-head">
            <h2>What we build and run for businesses</h2>
            <p>Five core capabilities, delivered together or one at a time.</p>
          </div>
          {caps.map((item) => (
            <div className="cap-row" key={item.title}>
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>0{caps.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="cap-link" href={item.href} data-service={item.service}>{item.link}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="hp-section hp-alt" id="problems">
        <div className="wrap">
          <div className="hp-head">
            <h2>Where businesses usually come to us</h2>
            <p>Start from the problem. We&apos;ll point you to the right kind of solution.</p>
          </div>
          <div className="prob-grid">
            {problems.map((item) => (
              <div className="prob" key={item.q}>
                <q>{item.q}</q>
                <Link href={item.href} data-service={item.service}>{item.a}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section" id="work">
        <div className="wrap">
          <div className="work-bar">
            <div className="hp-head" style={{ margin: 0 }}>
              <h2>Selected work</h2>
              <p>Recent sites we can show. More projects are on the portfolio page.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="arrow-btn" type="button" aria-label="Previous projects" onClick={() => scrollByCard(-1)}>←</button>
              <button className="arrow-btn" type="button" aria-label="Next projects" onClick={() => scrollByCard(1)}>→</button>
            </div>
          </div>
          <div className="work-track" ref={track}>
            {projects.map((project) => (
              <article className="proj" key={project.name}>
                <img src={project.img} alt={project.name} />
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
          <Link className="cap-link" href="/portfolio" style={{ display: "inline-block", marginTop: 16 }}>All projects</Link>
        </div>
      </section>

      <section className="hp-section hp-alt" id="services">
        <div className="wrap">
          <div className="hp-head">
            <h2>Every service, grouped by what it does for you</h2>
            <p>Build the product, grow the audience, automate and create around it.</p>
          </div>
          <div className="svc-cols">
            {[["Build", build], ["Grow", grow], ["Automate and create", create]].map(([title, items]) => (
              <div key={String(title)}>
                <h3>{title as string}</h3>
                <ul>
                  {(items as typeof build).map((item) => (
                    <li key={item.name}><Link href={item.href} data-service={item.service}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section" id="process">
        <div className="wrap">
          <div className="hp-head"><h2>How we work</h2></div>
          <ol className="step-row">
            {steps.map((step) => (
              <li key={step.name}><h3>{step.name}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hp-section hp-alt" id="why">
        <div className="wrap why-grid">
          <div className="hp-head" style={{ margin: 0 }}>
            <h2>Why work with Digitech Avenue</h2>
            <p>An agency that treats design, technology and marketing as one joined-up job.</p>
          </div>
          <dl>
            {reasons.map(([title, text]) => (
              <div key={title}><dt>{title}</dt><dd>{text}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="hp-section hp-dark" id="ai">
        <div className="wrap ai-grid">
          <div>
            <h2 className="section-title" style={{ color: "#fff" }}>Make your business work smarter.</h2>
            <p className="lede" style={{ marginTop: 16 }}>AI integration and automation can help reduce repetitive work, connect the tools you already use and tidy up workflows. We look at your actual process first, then suggest where automation or an AI feature makes sense.</p>
            <p className="ai-note">AI is not the right answer to every task. We test ideas on your real information and keep a person in the loop wherever accuracy matters.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="#contact" data-service="AI integration and automation">Discuss an automation idea</Link>
            </div>
          </div>
          <figure className="concept">
            <svg viewBox="0 0 480 220" role="img" aria-label="Requests flow through an automation step, then a person reviews the result.">
              <g fill="#0e1936" stroke="#2b4bb0">
                <rect x="10" y="20" width="110" height="36" rx="6" /><rect x="10" y="90" width="110" height="36" rx="6" /><rect x="10" y="160" width="110" height="36" rx="6" />
                <rect x="185" y="85" width="120" height="46" rx="6" /><rect x="350" y="85" width="120" height="46" rx="6" />
              </g>
              <g fill="#dbe4ff" fontSize="13" textAnchor="middle" fontFamily="Instrument Sans, sans-serif">
                <text x="65" y="43">Emails</text><text x="65" y="113">Forms</text><text x="65" y="183">Spreadsheets</text>
                <text x="245" y="113">Automation</text><text x="410" y="113">Person reviews</text>
              </g>
            </svg>
            <figcaption>How a typical workflow is shaped. Not a client project.</figcaption>
          </figure>
        </div>
      </section>

      <section className="hp-section" id="insights">
        <div className="wrap">
          <div className="hp-head"><h2>Insights</h2><p>Notes on sites, search, and getting found.</p></div>
          <article className="insight-card">
            <img src="/images/blog/main-image.png" alt="" />
            <p className="kicker">29 Jan 2026</p>
            <h3>Why every business needs a professional website in 2026</h3>
            <p style={{ color: "var(--muted)" }}>A website is your office, salesperson, and proof that the business is real.</p>
            <Link className="cap-link" href="/blog/why-every-business-needs-website-2026">Read the article</Link>
          </article>
        </div>
      </section>

      <section className="hp-section hp-alt" id="faq">
        <div className="wrap faq">
          <div className="hp-head"><h2>Questions we&apos;re often asked</h2></div>
          {faqs.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <section className="hp-section hp-dark" id="contact">
        <div className="wrap cta-grid">
          <div>
            <h2 className="section-title" style={{ color: "#fff" }}>Have a project in mind?</h2>
            <p className="lede" style={{ marginTop: 14 }}>Tell us what you want to build, improve or automate. We&apos;ll discuss the right approach for your business.</p>
            <div style={{ marginTop: 22, display: "grid", gap: 6 }}>
              <span>Phone and WhatsApp: <a href="tel:+917996998142">+91 799 699 8142</a></span>
              <span>Email: <a href="mailto:info@digitechavenue.com">info@digitechavenue.com</a></span>
              <span>1st B St, Gokula Extension, Mathikere, Bengaluru 560054</span>
            </div>
          </div>
          <InquiryForm dark />
        </div>
      </section>
    </main>
  );
}

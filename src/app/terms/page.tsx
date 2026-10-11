import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of service | DigiTech Avenue",
  description: "Terms for working with DigiTech Avenue on design, development, and related services.",
};

const sections: { title: string; content: string | string[] }[] = [
  {
    title: "1. Services",
    content: "DigiTech Avenue provides digital services including website design and development, social media, content, logo design, and advertising. Deliverables, timelines, and price are agreed before work starts.",
  },
  {
    title: "2. Starting a project and payment",
    content: [
      "Projects begin after an advance payment.",
      "The advance books time and confirms the scope.",
      "Advance payments are non-refundable once work has started.",
      "The payment schedule depends on the size of the project and is written down before we start.",
    ],
  },
  {
    title: "3. Price and revisions",
    content: [
      "Prices follow the agreed scope.",
      "Small revisions are included as stated in the package.",
      "Work outside that scope is quoted separately.",
    ],
  },
  {
    title: "4. What we need from you",
    content: [
      "Accurate content, files, and approvals on time.",
      "Prompt replies so the schedule can hold.",
      "Professional communication.",
      "Missing inputs can move the delivery date.",
    ],
  },
  {
    title: "5. Ownership",
    content: "Designs, files, and code remain DigiTech Avenue’s until the project is paid in full. After final payment, ownership transfers as agreed in the scope.",
  },
  {
    title: "6. Hosting",
    content: [
      "If we host the site, it stays with us until the project is complete.",
      "We can move it to your host after final payment.",
      "Problems caused by a third-party host are outside our responsibility.",
    ],
  },
  {
    title: "7. Confidentiality",
    content: "Both sides keep shared information, data, and credentials confidential unless the law requires otherwise.",
  },
  {
    title: "8. Delays and stopping work",
    content: [
      "We may pause a project if a payment is late.",
      "We may stop work for non-payment, a breach of these terms, or abusive behaviour.",
      "Work completed up to that point stays with DigiTech Avenue until it is paid for.",
    ],
  },
  {
    title: "9. Refunds",
    content: [
      "Advance payments are non-refundable.",
      "Any other refund is considered case by case.",
      "Completed or partly completed work is not refunded.",
    ],
  },
  {
    title: "10. Liability",
    content: "DigiTech Avenue is not liable for business losses caused by downtime, third-party tools or hosts, or content and legal claims that come from material you provided.",
  },
  {
    title: "11. Disputes",
    content: [
      "We work lawfully.",
      "Disputes should be discussed directly first.",
      "If they are not resolved, they are subject to the jurisdiction of India.",
    ],
  },
  {
    title: "12. Changes",
    content: "We may update these terms. Continuing to use the services means you accept the current version on this page.",
  },
];

export default function TermsPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Terms</p>
        <h1>How we work together.</h1>
        <p className="lede">The practical terms for payment, ownership, and what happens if a project pauses.</p>
      </section>
      <section className="section legal" style={{ paddingTop: 8 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul>{section.content.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>{section.content}</p>
              )}
            </article>
          ))}
          <p style={{ marginTop: 20 }}>
            Questions: <a href="tel:+917996998142">+91 799 699 8142</a> or <Link href="/contact">contact the studio</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

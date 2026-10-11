import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy | DigiTech Avenue",
  description: "How DigiTech Avenue collects, uses, and protects personal information.",
};

const sections: { title: string; content: string | string[] }[] = [
  {
    title: "1. Privacy commitment",
    content: "At DigiTech Avenue, we recognize the importance of your privacy. This policy explains how we collect, use, and safeguard the personal information you share when you use our site and services.",
  },
  {
    title: "2. Information we collect",
    content: [
      "Personal details: name, email, phone number, and company details sent through our forms.",
      "Usage data: IP address, browser type, device, and pages visited.",
      "Project context: what you tell us about your goals on a call or in a message.",
      "Cookies: small files used to keep the site working and to understand traffic.",
    ],
  },
  {
    title: "3. How we use it",
    content: [
      "To reply to enquiries and deliver the work you asked for.",
      "To send project updates and, if you opt in, the occasional note from the studio.",
      "To see which pages are useful and improve them.",
      "To protect the site from misuse.",
    ],
  },
  {
    title: "4. Cookies",
    content: "We use cookies to understand how visitors use the site. You can control cookies in your browser. Some parts of the site may work less well if you block them.",
  },
  {
    title: "5. Protection",
    content: "We use encryption in transit and careful access to the systems that store enquiries. We treat project information as confidential.",
  },
  {
    title: "6. Sharing",
    content: [
      "We do not sell or rent your personal information.",
      "We may share data with providers who host email, the site, or our project tools, only so we can do the work.",
      "We may disclose information if the law requires it.",
      "If the studio is sold or merged, this policy still applies to the data we hold.",
    ],
  },
  {
    title: "7. Your choices",
    content: [
      "You can ask what we hold and ask us to correct it.",
      "You can ask us to delete information we no longer need.",
      "You can unsubscribe from marketing email at any time.",
      "Write to info@digitechavenue.com for any of the above.",
    ],
  },
  {
    title: "8. Changes",
    content: "We may update this policy when our practices or the law change. The current version is always on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Privacy</p>
        <h1>How we handle what you share with us.</h1>
        <p className="lede">A plain account of the data we collect on this site and what we do with it.</p>
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
            Questions: <a href="mailto:info@digitechavenue.com">info@digitechavenue.com</a> or <Link href="/contact">the contact form</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

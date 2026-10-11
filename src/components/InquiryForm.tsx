"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  "Website development",
  "E-commerce development",
  "Mobile app development",
  "Custom software and admin panels",
  "Performance marketing",
  "AI integration and automation",
  "SEO",
  "Social media marketing",
  "Graphic design",
  "Content writing",
  "Online reputation management",
  "Not sure yet",
];

export function InquiryForm({ dark = false }: { dark?: boolean }) {
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("[data-service]");
      const value = link?.getAttribute("data-service");
      if (value) setService(value);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Company: ${data.get("company") || "—"}`,
      `Timeline: ${data.get("timeline") || "—"}`,
      "",
      "Project details:",
      String(data.get("details") || ""),
    ].join("\n");
    const url = `mailto:info@digitechavenue.com?subject=${encodeURIComponent("Project enquiry: " + data.get("service"))}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message ready to send. If it does not, write to info@digitechavenue.com.");
    window.location.href = url;
  }

  const field = dark ? undefined : "field";

  return (
    <form className={dark ? "dark-form" : ""} onSubmit={onSubmit} style={dark ? undefined : { display: "grid", gap: 14 }}>
      <div className="row2" style={dark ? undefined : { display: "grid", gap: 14 }}>
        <label>Name<input className={field} name="name" autoComplete="name" required /></label>
        <label>Email<input className={field} name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className="row2" style={dark ? undefined : { display: "grid", gap: 14 }}>
        <label>Phone<input className={field} name="phone" type="tel" autoComplete="tel" placeholder="+91" required /></label>
        <label>Service needed
          <select className={field} name="service" required value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Choose a service</option>
            {services.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <label>Project details<textarea className={field} name="details" required /></label>
      <div className="row2" style={dark ? undefined : { display: "grid", gap: 14 }}>
        <label>Company <span className="hint">(optional)</span><input className={field} name="company" autoComplete="organization" /></label>
        <label>Approximate timeline <span className="hint">(optional)</span><input className={field} name="timeline" /></label>
      </div>
      <p className="hint">By sending this you agree to be contacted about your enquiry. See the <Link href="/privacy">privacy policy</Link>.</p>
      <button className="btn btn-accent" type="submit">Send message</button>
      <p className="hint" role="status">{status}</p>
      {!dark && (
        <style>{`
          @media (min-width: 640px) {
            form .row2 { grid-template-columns: 1fr 1fr; }
          }
        `}</style>
      )}
    </form>
  );
}

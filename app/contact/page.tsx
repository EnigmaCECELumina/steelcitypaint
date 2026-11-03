import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request an Estimate",
  description: "Send Brent your project details to request a written painting or handyman estimate in Hamilton and nearby areas.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main>
      <header className="contact-intro">
        <p className="eyebrow">CONTACT // ESTIMATES</p>
        <h1>Let’s talk about your project.</h1>
        <p>Got a room that’s tired, or a list of small jobs? Send a few details and we’ll get back to you within one business day.</p>
      </header>
      <section className="contact-layout" aria-label="Request an estimate">
        <QuoteForm />
        <aside className="contact-aside">
          <h2>CALL OR TEXT</h2>
          <a href="tel:+12897752020">289-775-2020</a>
          <p><a href="sms:+12897752020">Text Brent</a></p>
          <p>Hamilton, Burlington, Ancaster, Dundas, Stoney Creek and nearby.</p>
          <p>For a written estimate, include your postal code and a few details about the work.</p>
        </aside>
      </section>
    </main>
  );
}

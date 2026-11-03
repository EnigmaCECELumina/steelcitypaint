import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Steel City Painting & Handyman uses information submitted through estimate requests.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">PRIVACY // ESTIMATE REQUESTS</p>
        <h1>Your project details stay about your project.</h1>
        <p>Information submitted through the estimate form is used to review and respond to that request.</p>
      </header>
      <section className="content-section">
        <h2>FORM INFORMATION</h2>
        <p>The estimate form asks for your name, phone number, postal code, job type, project details, and an optional photo. Please do not include sensitive personal information.</p>
        <p>Form submissions are sent through Web3Forms to Steel City Painting &amp; Handyman so Brent can respond. The form provider processes the information as part of delivering the message; review its privacy information before sending if you have questions about that processing.</p>
        <p>You can also call or text 289-775-2020 instead of using the form.</p>
      </section>
    </main>
  );
}

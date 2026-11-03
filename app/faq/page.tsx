import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about written estimates, furniture, project timing, seasonal painting and service areas.",
  alternates: { canonical: "/faq/" },
};

const questions = [
  ["Do you give free estimates?", "Yes. Estimates are written and without obligation."],
  ["Do I need to move furniture?", "We handle it. Just clear valuables and fragile items."],
  ["How long will it take?", "Most single rooms take 1 to 2 days. We’ll give you a timeline in the estimate."],
  ["Do you paint in winter?", "Interior work is available year-round. Exterior work depends on temperature and dryness."],
  ["Which areas do you cover?", "Hamilton, Burlington, Ancaster, Dundas, Stoney Creek and nearby communities."],
];

export default function FAQPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">FAQ // COMMON QUESTIONS</p>
        <h1>Good to know before we start.</h1>
        <p>Details about estimates, preparing your home, timing and where we work.</p>
      </header>
      <section className="content-section">
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

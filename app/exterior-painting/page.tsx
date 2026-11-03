import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exterior Painting",
  description: "Exterior painting and prep for siding, trim, soffits, fascia, doors, porches and railings in Hamilton and nearby areas.",
  alternates: { canonical: "/exterior-painting/" },
};

export default function ExteriorPaintingPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">EXTERIOR PAINTING // HAMILTON AREA</p>
        <h1>Exterior painting built for Ontario weather.</h1>
        <p>Hamilton winters are hard on paint. Good exterior work means scraping, repairing rot, caulking and priming bare spots, so the coat you pay for doesn’t peel in two years.</p>
      </header>
      <section className="content-section">
        <h2>WHAT’S INCLUDED</h2>
        <ul className="check-list">
          <li>Siding</li><li>Trim, soffits and fascia</li><li>Doors</li><li>Porches and railings</li><li>Pressure washing and prep</li>
        </ul>
        <h3>Worth knowing</h3>
        <p>We schedule around weather and tell you honestly when it’s too cold or damp to paint.</p>
      </section>
      <section className="section closing">
        <div><h2>WANT A LOOK AT THE EXTERIOR?</h2><p>We’ll come by and give you a written estimate.</p></div>
        <Link className="button button-primary" href="/contact/">Request an estimate</Link>
      </section>
    </main>
  );
}

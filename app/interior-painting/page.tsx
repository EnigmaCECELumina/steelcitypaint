import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Painting",
  description: "Interior painting for walls, ceilings, trim, baseboards, doors and cabinets in Hamilton and nearby areas.",
  alternates: { canonical: "/interior-painting/" },
};

export default function InteriorPaintingPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">INTERIOR PAINTING // HAMILTON AREA</p>
        <h1>Interior painting that looks clean up close.</h1>
        <p>Most of a good paint job happens before the paint: filling, sanding, taping, priming. We spend our time there so the finish stays smooth and the edges stay sharp.</p>
      </header>
      <section className="content-section">
        <h2>WHAT’S INCLUDED</h2>
        <ul className="check-list">
          <li>Walls and ceilings</li><li>Trim, baseboards and doors</li><li>Kitchen cabinets</li><li>Patching and light drywall repair</li><li>Colour advice with sample swatches</li>
        </ul>
        <h3>Worth knowing</h3>
        <p>We cover and move furniture, ask about pets and kids’ schedules, and work room by room so you can keep living in the house.</p>
      </section>
      <section className="section closing">
        <div><h2>PLANNING A REFRESH?</h2><p>Call 289-775-2020 or request an estimate.</p></div>
        <div className="actions"><a className="button button-primary" href="tel:+12897752020">Call 289-775-2020</a><Link className="button button-outline" href="/contact/">Request an estimate</Link></div>
      </section>
    </main>
  );
}

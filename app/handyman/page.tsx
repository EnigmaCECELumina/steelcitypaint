import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Handyman Services",
  description: "Handyman repairs, drywall patching, minor carpentry and fence and gate repair in Hamilton and nearby areas.",
  alternates: { canonical: "/handyman/" },
};

export default function HandymanPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">HANDYMAN SERVICES // HAMILTON AREA</p>
        <h1>The small jobs, finally finished.</h1>
        <p>Everyone has a list: the sticking door, the loose railing, the patch in the hallway. We handle them in one visit so they stop weighing on you.</p>
      </header>
      <section className="content-section">
        <h2>EXAMPLES</h2>
        <ul className="check-list">
          <li>Drywall patching</li><li>Door and trim repair</li><li>Caulking</li><li>Minor carpentry</li><li>Fence and gate repair</li>
        </ul>
        <h3>Worth knowing</h3>
        <p>Small jobs are welcome.</p>
      </section>
      <section className="section closing">
        <div><h2>SEND US YOUR LIST</h2><p>We’ll tell you what we can bundle into one visit.</p></div>
        <Link className="button button-primary" href="/contact/">Request an estimate</Link>
      </section>
    </main>
  );
}

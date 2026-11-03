import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  description: "Interior and exterior painting and home repairs in Hamilton and nearby communities. Call 289-775-2020 or request a written estimate.",
  alternates: { canonical: "/" },
};

const services = [
  { number: "01", name: "Interior painting", text: "Walls, ceilings, trim and doors.", href: "/interior-painting/" },
  { number: "02", name: "Exterior painting", text: "Siding, soffits, fascia and porches.", href: "/exterior-painting/" },
  { number: "03", name: "Handyman repairs", text: "The small and medium jobs that keep piling up.", href: "/handyman/" },
  { number: "04", name: "Drywall and patching", text: "Holes, cracks and water marks, repaired before paint.", href: "/handyman/" },
  { number: "05", name: "Decks and fences", text: "Cleaned, sealed or stained.", href: "/handyman/" },
];
const serviceAreas = [
  ["Hamilton", "/areas/hamilton/"],
  ["Stoney Creek", "/areas/stoney-creek/"],
  ["Ancaster", "/areas/ancaster/"],
  ["Dundas", "/areas/dundas/"],
  ["Burlington", "/areas/burlington/"],
  ["Waterdown", null],
  ["Flamborough", null],
  ["Grimsby", null],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">RESIDENTIAL // HAMILTON, ON</p>
          <h1 id="home-title">Painting and fixes for Hamilton homes, <span>done properly.</span></h1>
          <p>Brent and his crew handle the work themselves, keep the house tidy, and give you a written price before anything starts.</p>
          <div className="actions">
            <a className="button button-primary" href="tel:+12897752020">Call 289-775-2020</a>
            <Link className="button button-outline" href="/contact/">Request an estimate</Link>
          </div>
        </div>
        <figure className="hero-art">
          <Image src="/hero-room.svg" alt="Illustration of a light-filled living room with protected furniture and crisp trim" width={1200} height={820} sizes="(max-width: 760px) 100vw, 55vw" priority />
          <figcaption className="art-label">PAINTING + HOME REPAIRS</figcaption>
        </figure>
      </section>

      <div className="hazard-divider" role="img" aria-label="Safety yellow and black stripe divider" />

      <section className="section section-block" aria-labelledby="intro-title">
        <div className="section-heading">
          <p className="eyebrow">THE WORK // THE PERSON</p>
          <h2 id="intro-title">ONE POINT OF CONTACT.</h2>
          <p>You shouldn’t have to chase a contractor. Brent paints and repairs homes across Hamilton and the surrounding area, and he’s the one who looks at your job, quotes it, and sees it through. Furniture gets covered, floors get protected, and the place is swept before we leave each day.</p>
        </div>
      </section>

      <section className="section section-block" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">SERVICES // WHAT WE DO</p>
          <h2 id="services-title">WHAT WE DO</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <Link className="service-card" href={service.href} key={service.number}>
              <span className="meta">{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="portfolio section-block" id="portfolio" aria-labelledby="portfolio-title">
        <div className="section">
          <div className="section-heading">
            <p className="eyebrow">PORTFOLIO // WORK TYPES</p>
            <h2 id="portfolio-title">PAINTING &amp; FIXES</h2>
            <p>Illustrations for the kinds of work we take on. Real before-and-after photos can be added as Brent shares them.</p>
          </div>
          <div className="portfolio-grid">
            <Link className="portfolio-item" href="/interior-painting/">
              <Image src="/hero-room.svg" alt="Illustration of an interior room with protected furniture" width={1200} height={820} sizes="(max-width: 760px) 100vw, 34vw" />
              <span className="portfolio-caption"><strong>Interior painting</strong><span>WALLS // TRIM // DOORS</span></span>
            </Link>
            <Link className="portfolio-item" href="/exterior-painting/">
              <Image src="/portfolio-exterior.svg" alt="Illustration of a house exterior" width={800} height={520} sizes="(max-width: 760px) 100vw, 34vw" />
              <span className="portfolio-caption"><strong>Exterior painting</strong><span>SIDING // SOFFITS // PORCHES</span></span>
            </Link>
            <Link className="portfolio-item" href="/handyman/">
              <Image src="/portfolio-repair.svg" alt="Illustration of a repaired interior wall" width={800} height={520} sizes="(max-width: 760px) 100vw, 34vw" />
              <span className="portfolio-caption"><strong>Handyman repairs</strong><span>PATCHING // REPAIRS</span></span>
            </Link>
          </div>
          <p className="portfolio-note">Illustrations shown are not photographs of completed customer projects.</p>
        </div>
      </section>

      <section className="section section-block" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="process-title">A CLEAR PLAN.</h2>
        </div>
        <ol className="steps">
          <li><span className="step-number">01</span><p>Call or send the form. Tell us what needs doing.</p></li>
          <li><span className="step-number">02</span><p>Brent visits, looks things over, and sends a written estimate.</p></li>
          <li><span className="step-number">03</span><p>We book a date that suits you and protect your home.</p></li>
          <li><span className="step-number">04</span><p>We walk through together. You pay when you’re happy.</p></li>
        </ol>
      </section>

      <section className="area-band section-block" aria-labelledby="areas-title">
        <div className="section">
          <div className="section-heading">
            <p className="eyebrow">SERVICE AREA</p>
            <h2 id="areas-title">WHERE WE WORK</h2>
            <p>Not sure if we reach you? Call and ask.</p>
          </div>
          <ul className="area-list">
            {serviceAreas.map(([name, href]) => <li key={name}>{href ? <Link href={href}>{name}</Link> : name}</li>)}
          </ul>
        </div>
      </section>

      <section className="section closing" aria-labelledby="closing-title">
        <div>
          <h2 id="closing-title">GOT A ROOM THAT’S TIRED?</h2>
          <p>Got a room that’s tired, or a list of small jobs? Send a few details and we’ll get back to you within one business day.</p>
        </div>
        <Link className="button button-primary" href="/contact/">Request an estimate</Link>
      </section>
    </main>
  );
}

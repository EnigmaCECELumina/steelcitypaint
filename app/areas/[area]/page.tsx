import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const areas = {
  hamilton: {
    title: "Painters in Hamilton, from the lower city to the Mountain.",
    description: "Painting and repair work for Hamilton homes, from older brick and plaster to newer drywall and open-plan spaces.",
    paragraphs: [
      "Hamilton has a lot of older brick homes and semis with plaster walls, layers of old paint and woodwork worth keeping. We take the time to repair plaster properly and prep trim before painting.",
      "If you’re on the Mountain, we do the same careful work on newer drywall and open-plan spaces. We’ll give you a written estimate after a quick visit.",
    ],
  },
  ancaster: {
    title: "Painting and repairs for Ancaster homes.",
    description: "Painting and repair estimates for Ancaster homes with tall ceilings, staircases, trim and exterior touch-ups.",
    paragraphs: [
      "Ancaster homes tend to be larger, with tall ceilings, staircases, and a lot of trim. Those jobs go better with planning, so we map out the work room by room and protect the floors and finishes you’ve invested in.",
      "Whether it’s a full interior refresh or exterior touch-ups before winter, Brent will visit and quote in writing.",
    ],
  },
  dundas: {
    title: "Painters in Dundas, ON.",
    description: "Painting and home repair work for Dundas homes, including older properties and character details.",
    paragraphs: [
      "Dundas has charming older homes, stone fronts and character details that need a gentle approach. We repair what’s worn, match what should be matched, and avoid painting over problems.",
      "If your home sits near the escarpment, we’ll also talk through how moisture and shade affect exterior paint.",
    ],
  },
  "stoney-creek": {
    title: "Painting and handyman work in Stoney Creek.",
    description: "Interior and exterior painting with handyman repairs for Stoney Creek homes.",
    paragraphs: [
      "From post-war bungalows to newer family homes, Stoney Creek has a bit of everything. We handle full repaints, quick refreshes before selling, and the small repairs that make a house feel finished.",
      "Many of our jobs here combine painting with a handyman list, saving you a second visit.",
    ],
  },
  burlington: {
    title: "Painters in Burlington, ON.",
    description: "Exterior and interior painting for Burlington homes, with attention to local weather and light.",
    paragraphs: [
      "Lakeside humidity and Ontario winters are hard on paint, especially on exteriors. We prep carefully, fix rot and caulking, and use paint suited to the weather.",
      "Inside, we’ll help you pick colours that suit your light, whether you’re in a newer subdivision or an older home near the lake.",
    ],
  },
} as const;

type AreaSlug = keyof typeof areas;

export function generateStaticParams() {
  return Object.keys(areas).map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const details = areas[area as AreaSlug];
  if (!details) return {};
  return {
    title: details.title,
    description: details.description,
    alternates: { canonical: `/areas/${area}/` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const details = areas[area as AreaSlug];
  if (!details) notFound();

  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">LOCAL PAINTING &amp; REPAIRS // {area.replaceAll("-", " ").toUpperCase()}</p>
        <h1>{details.title}</h1>
        {details.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </header>
      <section className="section closing">
        <div><h2>REQUEST A WRITTEN ESTIMATE</h2><p>Call or send a few details about your project.</p></div>
        <div className="actions"><a className="button button-primary" href="tel:+12897752020">Call 289-775-2020</a><Link className="button button-outline" href="/contact/">Request an estimate</Link></div>
      </section>
    </main>
  );
}

const SITE_URL = "https://www.steelcitypainting.ca";

export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${SITE_URL}/#business`,
    name: "Steel City Painting & Handyman",
    url: SITE_URL,
    telephone: "+1-289-775-2020",
    image: `${SITE_URL}/og-image.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamilton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: ["Hamilton", "Stoney Creek", "Ancaster", "Dundas", "Burlington", "Waterdown", "Flamborough", "Grimsby"]
      .map((name) => ({ "@type": "City", name })),
    makesOffer: ["Interior Painting", "Exterior Painting", "Handyman Services", "Drywall Repair"]
      .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

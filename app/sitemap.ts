import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.steelcitypainting.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/interior-painting/",
    "/exterior-painting/",
    "/handyman/",
    "/about/",
    "/contact/",
    "/faq/",
    "/privacy/",
    "/areas/hamilton/",
    "/areas/ancaster/",
    "/areas/dundas/",
    "/areas/stoney-creek/",
    "/areas/burlington/",
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}

import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";
import { portfolioSections } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...portfolioSections.flatMap((section) => [
      { url: `${SITE_URL}/${section}`, changeFrequency: "monthly" as const, priority: section === "home" ? 1 : 0.8, alternates: { languages: { "en-US": `${SITE_URL}/${section}`, "km-KH": `${SITE_URL}/${section}/km` } } },
      { url: `${SITE_URL}/${section}/km`, changeFrequency: "monthly" as const, priority: section === "home" ? 0.9 : 0.7, alternates: { languages: { "en-US": `${SITE_URL}/${section}`, "km-KH": `${SITE_URL}/${section}/km` } } },
    ]),
    ...projects.flatMap((project) => [
      { url: `${SITE_URL}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7, alternates: { languages: { "en-US": `${SITE_URL}/projects/${project.slug}`, "km-KH": `${SITE_URL}/projects/${project.slug}/km` } } },
      { url: `${SITE_URL}/projects/${project.slug}/km`, changeFrequency: "monthly" as const, priority: 0.6, alternates: { languages: { "en-US": `${SITE_URL}/projects/${project.slug}`, "km-KH": `${SITE_URL}/projects/${project.slug}/km` } } },
    ]),
  ];
}

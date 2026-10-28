import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...projects.map(p => ({ url: `${base}/projects/${p.slug}`, changeFrequency: "monthly" as const, priority: .7 }))]; }

import type { Language } from "@/components/language-provider";

export const portfolioSections = ["home", "about", "skills", "projects", "experience", "education", "contact"] as const;

export type PortfolioSection = (typeof portfolioSections)[number];

export function isPortfolioSection(value: string): value is PortfolioSection {
  return portfolioSections.includes(value as PortfolioSection);
}

export function sectionHref(section: PortfolioSection, language: Language) {
  return language === "km" ? `/${section}/km` : `/${section}`;
}

export function projectHref(slug: string, language: Language) {
  return language === "km" ? `/projects/${slug}/km` : `/projects/${slug}`;
}

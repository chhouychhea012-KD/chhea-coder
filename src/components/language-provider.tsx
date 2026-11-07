"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { profile, projects, text } from "@/data/portfolio";

export type Language = "en" | "km";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getLanguageFromPath(pathname: string) {
  return pathname.endsWith("/km") ? "km" : "en";
}

function getLocalizedPath(pathname: string, language: Language) {
  const englishPath = pathname === "/" ? "/home" : pathname.endsWith("/km") ? pathname.slice(0, -3) : pathname;
  return language === "km" ? `${englishPath}/km` : englishPath;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const language = getLanguageFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = language;
    const projectSlug = pathname.startsWith("/projects/") ? pathname.split("/")[2] : undefined;
    const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : undefined;
    const pageTitle = project
      ? `${text(project.title, language)} | ${profile.name}`
      : language === "en"
        ? `${profile.name} — ${text(profile.title, "en")}`
        : `${profile.khmerName} — ${text(profile.title, "km")}`;
    document.title = pageTitle;
    const description = project ? text(project.description, language) : text(profile.tagline, language);
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language, pathname]);

  function setLanguage(next: Language) {
    if (next !== language) router.push(getLocalizedPath(pathname, next));
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

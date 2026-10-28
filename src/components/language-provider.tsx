"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { profile, projects, text } from "@/data/portfolio";

export type Language = "en" | "km";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const pathname = usePathname();

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("portfolio-language");
    } catch {
      // Storage may be disabled; English remains the default language.
    }
    if (saved === "km") {
      document.documentElement.lang = "km";
      queueMicrotask(() => setLanguage("km"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const projectSlug = pathname.startsWith("/projects/") ? pathname.split("/")[2] : undefined;
    const project = projectSlug ? projects.find(item => item.slug === projectSlug) : undefined;
    const pageTitle = project
      ? `${text(project.title, language)} | ${profile.name}`
      : language === "en"
        ? `${profile.name} — ${text(profile.title, "en")}`
        : `${profile.khmerName} — ${text(profile.title, "km")}`;
    document.title = pageTitle;
    const description = project ? text(project.description, language) : text(profile.tagline, language);
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language, pathname]);

  function updateLanguage(next: Language) {
    setLanguage(next);
    try {
      localStorage.setItem("portfolio-language", next);
    } catch {
      // Keep the selected language for this page if persistence is unavailable.
    }
    document.documentElement.lang = next === "km" ? "km" : "en";
  }

  return <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

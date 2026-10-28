"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { ui } from "@/data/portfolio";

export function ThemeToggle() {
  const { language } = useLanguage();
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("portfolio-theme");
    } catch {
      // Storage can be disabled by the browser; fall back to the system preference.
    }
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initial = saved === "light" || saved === "dark" ? saved : preferred;
    document.documentElement.dataset.theme = initial;
    queueMicrotask(() => setTheme(initial));
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // Keep the current selection for this page even if persistence is unavailable.
    }
    setTheme(next);
  }
  const activeTheme = theme ?? "dark";
  const themeLabel = activeTheme === "dark" ? ui(language, "light", "ពន្លឺ") : ui(language, "dark", "ងងឹត");
  return <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={ui(language, `Switch to ${themeLabel} mode`, `ប្ដូរទៅរបៀប${themeLabel}`)} title={ui(language, `Switch to ${themeLabel} mode`, `ប្ដូរទៅរបៀប${themeLabel}`)}>
    {activeTheme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
  </button>;
}

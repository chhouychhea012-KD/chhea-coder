"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { profile, ui } from "@/data/portfolio";
import { sectionHref, type PortfolioSection } from "@/lib/routes";

export function SiteHeader() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation: Array<{ label: string; section: PortfolioSection | "activities" }> = language === "en"
    ? [{ label: "About", section: "about" }, { label: "Expertise", section: "skills" }, { label: "Projects", section: "projects" }, { label: "Experience", section: "experience" }, { label: "Education", section: "education" }, { label: "Activities", section: "activities" }]
    : [{ label: "អំពីខ្ញុំ", section: "about" }, { label: "ជំនាញ", section: "skills" }, { label: "គម្រោង", section: "projects" }, { label: "បទពិសោធន៍", section: "experience" }, { label: "ការសិក្សា", section: "education" }, { label: "សកម្មភាព", section: "activities" }];
  const homeHref = sectionHref("home", language);
  const contactHref = sectionHref("contact", language);

  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return <header className="header">
    <div className="container nav-shell">
      <Link href={homeHref} className="brand brand-logo" aria-label={`${profile.name} — ${ui(language, "Home", "ទំព័រដើម")}`}><Image src="/images/logo.png" alt={ui(language, "CHHEA CHHOUY — Full-Stack Developer", `${profile.khmerName} — អ្នកអភិវឌ្ឍន៍ Full-Stack`)} width={236} height={79} priority /></Link>
      <nav className="desktop-nav" aria-label={ui(language, "Main navigation", "ម៉ឺនុយចម្បង")}>{navigation.map((item) => {
        const href = item.section === "activities" ? (language === "km" ? "/activities/km" : "/activities") : sectionHref(item.section, language);
        return <Link key={item.section} href={href} className={pathname === href ? "nav-active" : ""}>{item.label}</Link>;
      })}</nav>
      <div className="nav-right"><LanguageToggle /><ThemeToggle /><Link href={contactHref} className="nav-cta">{language === "en" ? "Let's talk" : "ទំនាក់ទំនង"} <ArrowUpRight size={15} aria-hidden="true" /></Link>
      <button type="button" aria-label={open ? ui(language, "Close menu", "បិទម៉ឺនុយ") : ui(language, "Open menu", "បើកម៉ឺនុយ")} aria-expanded={open} aria-controls="mobile-nav" className="icon-button mobile-menu-toggle" onClick={() => setOpen((value) => !value)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </div>
    {open && <nav className="mobile-nav" id="mobile-nav" aria-label={ui(language, "Mobile navigation", "ម៉ឺនុយទូរស័ព្ទ")}>
      {navigation.map((item) => <Link key={item.section} href={item.section === "activities" ? (language === "km" ? "/activities/km" : "/activities") : sectionHref(item.section, language)} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}
      <Link href={contactHref} onClick={() => setOpen(false)}>{language === "en" ? "Contact" : "ទំនាក់ទំនង"} <ArrowUpRight size={16} /></Link>
    </nav>}
  </header>;
}

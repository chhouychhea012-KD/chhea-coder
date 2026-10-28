"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { profile, ui } from "@/data/portfolio";

export function SiteHeader() {
  const { language } = useLanguage();
  const navigation = language === "en" ? [{ label: "About", href: "/#about" }, { label: "Expertise", href: "/#skills" }, { label: "Projects", href: "/#projects" }, { label: "Experience", href: "/#experience" }, { label: "Education", href: "/#education" }] : [{ label: "អំពីខ្ញុំ", href: "/#about" }, { label: "ជំនាញ", href: "/#skills" }, { label: "គម្រោង", href: "/#projects" }, { label: "បទពិសោធន៍", href: "/#experience" }, { label: "ការសិក្សា", href: "/#education" }];
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onEscape(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);
  return <header className="header">
    <div className="container nav-shell">
      <Link href="/#home" className="brand brand-logo" aria-label={`${profile.name} — ${ui(language, "Home", "ទំព័រដើម")}`} onClick={() => setOpen(false)}><Image src="/images/logo.png" alt={ui(language, "CHHEA CHHOUY — Full-Stack Developer", `${profile.khmerName} — អ្នកអភិវឌ្ឍន៍ Full-Stack`)} width={236} height={79} priority /></Link>
      <nav className="desktop-nav" aria-label={ui(language, "Main navigation", "ម៉ឺនុយចម្បង")}>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <div className="nav-right"><LanguageToggle /><ThemeToggle /><Link href="/#contact" className="nav-cta">{language === "en" ? "Let's talk" : "ទំនាក់ទំនង"} <ArrowUpRight size={15} aria-hidden="true" /></Link>
      <button type="button" aria-label={open ? ui(language, "Close menu", "បិទម៉ឺនុយ") : ui(language, "Open menu", "បើកម៉ឺនុយ")} aria-expanded={open} aria-controls="mobile-nav" className="icon-button mobile-menu-toggle" onClick={() => setOpen(v => !v)}>{open ? <X size={21}/> : <Menu size={21}/>}</button></div>
    </div>
    {open && <nav className="mobile-nav" id="mobile-nav" aria-label={ui(language, "Mobile navigation", "ម៉ឺនុយទូរស័ព្ទ")}>
      {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}
      <Link href="/#contact" onClick={() => setOpen(false)}>{language === "en" ? "Contact" : "ទំនាក់ទំនង"} <ArrowUpRight size={16}/></Link>
    </nav>}
  </header>;
}

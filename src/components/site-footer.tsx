"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile, ui } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";
import { sectionHref } from "@/lib/routes";

export function SiteFooter() {
  const { language } = useLanguage();
  const homeHref = sectionHref("home", language);

  function handleBackToTop(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== homeHref) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <footer className="footer"><div className="container footer-inner">
    <div className="footer-meta"><Image className="footer-logo" src="/images/logo.png" alt={ui(language, "CHHEA CHHOUY — Full-Stack Developer", `${profile.khmerName} — អ្នកអភិវឌ្ឍន៍ Full-Stack`)} width={236} height={79} /></div>
    <div className="footer-links"><span>© {new Date().getFullYear()} {profile.name}</span><Link href={homeHref} className="footer-back" onClick={handleBackToTop}>{language === "en" ? "Back to top" : "ត្រឡប់ទៅលើ"} <ArrowUp size={15} /></Link></div>
  </div></footer>;
}

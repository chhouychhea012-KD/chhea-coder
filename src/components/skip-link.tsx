"use client";

import { useLanguage } from "@/components/language-provider";
import { ui } from "@/data/portfolio";

export function SkipLink() {
  const { language } = useLanguage();
  return <a className="skip-link" href="#main-content">{ui(language, "Skip to content", "រំលងទៅកាន់មាតិកា")}</a>;
}

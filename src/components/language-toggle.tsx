"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return <div className="language-toggle" role="group" aria-label={language === "en" ? "Select language" : "ជ្រើសរើសភាសា"}>
    <button type="button" className={language === "en" ? "language-active" : ""} onClick={() => setLanguage("en")} aria-label={language === "en" ? "Switch to English" : "ប្ដូរទៅភាសាអង់គ្លេស"} aria-pressed={language === "en"}>
      <Image src="/images/lang/en.png" alt="" width={32} height={32} />
    </button>
    <button type="button" className={language === "km" ? "language-active" : ""} onClick={() => setLanguage("km")} aria-label={language === "en" ? "Switch to Khmer" : "ប្ដូរទៅភាសាខ្មែរ"} aria-pressed={language === "km"}>
      <Image src="/images/lang/kh.png" alt="" width={32} height={32} />
    </button>
  </div>;
}

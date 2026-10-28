"use client";
import Link from "next/link";
import { ArrowLeft, MoveUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ui } from "@/data/portfolio";

export default function NotFound() {
  const { language } = useLanguage();
  return <main id="main-content" className="notfound container"><span className="eyebrow">{ui(language, "ERROR", "កំហុស")} / 404</span><h1>{ui(language, "Somewhere off the map", "រកមិនឃើញទំព័រនេះទេ")}<span className="period">.</span></h1><p>{ui(language, "The page you’re looking for doesn’t exist. Let’s get you back to the good stuff.", "ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមានទេ។ តោះត្រឡប់ទៅទំព័រដើមវិញ។")}</p><Link href="/" className="button button-primary"><ArrowLeft size={16}/> {ui(language, "Back to homepage", "ត្រឡប់ទៅទំព័រដើម")} <MoveUpRight size={16}/></Link></main>;
}

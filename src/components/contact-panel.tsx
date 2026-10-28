"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, ui } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function ContactPanel() {
  const { language } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyState("success"); }
    catch { setCopyState("error"); }
  }
  return <div className="contact-surface">
    <div className="contact-eyebrow"><span className="pulse-dot" /> 06 / {language === "en" ? "LET'S CONNECT" : "ទំនាក់ទំនង"}</div>
    <h2>{language === "en" ? <>Have a project in mind?<br /><span>Let&apos;s build something great.</span></> : <>មានគម្រោងក្នុងចិត្ត?<br /><span>តោះបង្កើតអ្វីដ៏ល្អជាមួយគ្នា។</span></>}</h2>
    <p>{language === "en" ? "I'm always interested in meaningful software projects, developer communities, and learning opportunities." : "ខ្ញុំតែងតែចាប់អារម្មណ៍លើគម្រោងសូហ្វវែរមានន័យ សហគមន៍អ្នកអភិវឌ្ឍន៍ និងឱកាសរៀនសូត្រ។"}</p>
    <div className="contact-actions"><a className="button button-light" href={`mailto:${profile.email}?subject=${encodeURIComponent(ui(language, "Hello CHHEA CHHOUY — let's connect", `សួស្តី ${profile.khmerName} — សូមភ្ជាប់ទំនាក់ទំនង`))}`}>{language === "en" ? "Send an Email" : "ផ្ញើអ៊ីមែល"} <ArrowUpRight size={18} /></a>
      <button type="button" className="button button-ghost" onClick={copyEmail}>{copyState === "success" ? <Check size={17}/> : <Copy size={17}/>} {copyState === "success" ? (language === "en" ? "Email Copied" : "បានចម្លងអ៊ីមែល") : (language === "en" ? "Copy Email" : "ចម្លងអ៊ីមែល")}</button>
    </div>
    <span className="copy-feedback" role="status">{copyState === "error" ? ui(language, `Could not copy automatically. Email: ${profile.email}`, `មិនអាចចម្លងបានទេ។ អ៊ីមែល៖ ${profile.email}`) : copyState === "success" ? ui(language, "Email address copied to clipboard.", "បានចម្លងអាសយដ្ឋានអ៊ីមែលទៅក្ដារតម្បៀតខ្ទាស់ហើយ។") : ""}</span>
    <div className="contact-bottom"><a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a><div><a href="https://github.com/Chhea012" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="https://www.linkedin.com/in/chhea-chhouy-337667374/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a></div></div>
    <div className="contact-map-card">
      <div className="contact-map-info">
        <span className="contact-map-label"><MapPin size={15} aria-hidden="true" /> {language === "en" ? "LOCATION" : "ទីតាំង"}</span>
        <h3>Passerelles numériques Cambodia</h3>
        <p>{language === "en" ? "Phnom Penh, Cambodia" : "ភ្នំពេញ ប្រទេសកម្ពុជា"}</p>
        <a className="contact-map-link" href="https://www.google.com/maps/search/?api=1&query=11.5508551%2C104.8830826" target="_blank" rel="noopener noreferrer">
          {language === "en" ? "Open in Maps" : "បើកក្នុង Google Maps"} <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.013973704625!2d104.8830826!3d11.5508551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1793194607873!5m2!1sen!2skh"
          title={language === "en" ? "Map showing Passerelles numériques Cambodia in Phnom Penh" : "ផែនទីបង្ហាញទីតាំង Passerelles numériques Cambodia នៅភ្នំពេញ"}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  </div>;
}

"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Github, LockKeyhole } from "lucide-react";
import { SkillBadge } from "@/components/skill-badge";
import { useLanguage } from "@/components/language-provider";
import { text, ui, type Project } from "@/data/portfolio";

function InfoSection({ label, heading, description }: { label: string; heading: string; description: string }) {
  return <article className="case-text-block"><span className="case-kicker">{label}</span><h2>{heading}</h2><p>{description}</p></article>;
}

export function ProjectDetail({ project, nextProject, index }: { project: Project; nextProject: Project; index: number }) {
  const { language } = useLanguage();
  const t = (value: { en: string; km: string }) => text(value, language);
  const category = project.category === "Professional" ? ui(language, "Professional", "វិជ្ជាជីវៈ") : project.category === "Web Applications" ? ui(language, "Web Applications", "កម្មវិធីវេប") : ui(language, "Automation", "ស្វ័យប្រវត្តិកម្ម");
  const projectContext = project.context ? t(project.context) : ui(language, "Personal / School Project", "គម្រោងផ្ទាល់ខ្លួន / គម្រោងសិក្សា");
  const role = project.role ? t(project.role) : ui(language, "Developer", "អ្នកអភិវឌ្ឍន៍");
  const period = project.period ? t(project.period) : ui(language, "Not specified", "មិនបានបញ្ជាក់");

  return <main id="main-content"><article className="case-page">
    <section className="case-hero"><div className="container">
      <Link className="back-link" href="/#projects"><ArrowLeft size={17} /> {ui(language, "All projects", "គម្រោងទាំងអស់")}</Link>
      <div className="case-hero-copy"><div className="eyebrow"><span className="eyebrow-dash" />{ui(language, "PROJECT", "គម្រោង")} / {project.number} <span className="case-dot">•</span> {category}</div>
        <h1>{t(project.title)}<span className="period">.</span></h1><p>{t(project.description)}</p>
      </div><div className="case-meta-grid"><div><span>{ui(language, "PROJECT CONTEXT", "បរិបទគម្រោង")}</span><strong>{projectContext}</strong></div><div><span>{ui(language, "MY ROLE", "តួនាទីរបស់ខ្ញុំ")}</span><strong>{role}</strong></div><div><span>{ui(language, "PERIOD", "រយៈពេល")}</span><strong>{period}</strong></div><div><span>{ui(language, "TECHNOLOGIES", "បច្ចេកវិទ្យា")}</span><strong>{project.technologies.length} {ui(language, "tools", "ឧបករណ៍")}</strong></div></div>
    </div></section>
    <section className="container case-visual-section"><div className={"case-visual project-" + project.accent}><div className="case-visual-grid" aria-hidden="true"/><div className="case-visual-inner"><div className="case-visual-top"><i/><i/><i/><span>{t(project.title).toUpperCase()} / {ui(language, "PORTFOLIO VIEW", "ទិដ្ឋភាពផលប័ត្រ").toUpperCase()}</span></div><div className="case-visual-content"><div className="case-sidebar"/><div className="case-widgets"><div/><div/><div/><div/></div></div></div><span className="case-art-label">{ui(language, "PROJECT", "គម្រោង")} / {String(index + 1).padStart(2,"0")}</span></div>
      {project.confidentialityNote && <p className="case-confidential"><LockKeyhole size={15}/> {t(project.confidentialityNote)}</p>}
    </section>
    <section className="case-details container"><div className="case-details-left">
      <InfoSection label={ui(language, "01 / THE CHALLENGE", "០១ / បញ្ហាប្រឈម")} heading={ui(language, "Understanding the problem", "ការយល់ដឹងអំពីបញ្ហា")} description={t(project.challenge)}/>
      <InfoSection label={ui(language, "02 / THE APPROACH", "០២ / វិធីសាស្ត្រ")} heading={ui(language, "How I approached it", "វិធីសាស្ត្រដែលខ្ញុំបានអនុវត្ត")} description={t(project.solution)}/>
      <div className="case-features"><span className="case-kicker">{ui(language, "03 / CORE FEATURES", "០៣ / មុខងារសំខាន់ៗ")}</span><h2>{ui(language, "What the project includes", "អ្វីខ្លះដែលមានក្នុងគម្រោង")}</h2><div className="feature-list">{project.features[language].map(f => <div key={f}><CheckCircle2 size={18}/><span>{f}</span></div>)}</div></div>
      <div className="case-features"><span className="case-kicker">{ui(language, "04 / MY CONTRIBUTION", "០៤ / ការរួមចំណែករបស់ខ្ញុំ")}</span><h2>{ui(language, "My responsibilities", "ទំនួលខុសត្រូវរបស់ខ្ញុំ")}</h2><div className="feature-list">{project.responsibilities[language].map(f => <div key={f}><BriefcaseBusiness size={18}/><span>{f}</span></div>)}</div></div>
    </div><aside className="case-details-aside"><h3>{ui(language, "Built with", "បង្កើតដោយប្រើ")}</h3><div className="case-stack">{project.technologies.map(t=><span key={t}><SkillBadge name={t}/>{t}</span>)}</div><div className="case-external">{project.repoUrl && <a className="button button-primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github size={17}/> {ui(language, "View repository", "មើលឃ្លាំងកូដ")} <ArrowUpRight size={17}/></a>}{project.liveUrl && <a className="button button-secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{ui(language, "Visit live project", "មើលគម្រោងផ្ទាល់")} <ArrowUpRight size={17}/></a>}{!project.repoUrl && !project.liveUrl && <p>{ui(language, "Public source code or live demo is not available for this project.", "មិនមានកូដប្រភពសាធារណៈ ឬ Demo ផ្ទាល់សម្រាប់គម្រោងនេះទេ។")}</p>}</div></aside></section>
    <section className="case-next"><div className="container case-next-inner"><div><span>{ui(language, "UP NEXT", "បន្ទាប់ទៀត")}</span><h2>{t(nextProject.title)}</h2></div><Link href={"/projects/" + nextProject.slug} className="round-next" aria-label={ui(language, "View", "មើល") + " " + t(nextProject.title)}><ArrowRight size={26}/></Link></div></section>
  </article></main>;
}

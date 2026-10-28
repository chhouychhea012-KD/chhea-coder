"use client";
import Link from "next/link";
import { ArrowUpRight, Layers2 } from "lucide-react";
import { SkillBadge } from "@/components/skill-badge";
import { text, ui, type Project } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { language } = useLanguage();
  return <Link href={`/projects/${project.slug}`} className={`project-card project-${project.accent} ${large ? "project-card-featured" : ""}`}>
    <div className="project-art" aria-hidden="true">
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="art-panel"><div className="art-panel-top"><i/><i/><i/><span>{ui(language, "PROJECT", "គម្រោង")} / {project.number}</span></div>
        <div className="art-panel-body"><div className="art-block art-block-a"/><div className="art-block art-block-b"/><div className="art-block art-block-c"/><div className="art-block art-block-d"/></div>
      </div><div className="art-floating"><Layers2 size={24}/></div>
    </div>
    <div className="project-info"><div className="project-meta"><span>{ui(language, project.category, project.category === "Professional" ? "វិជ្ជាជីវៈ" : project.category === "Web Applications" ? "កម្មវិធីវេប" : "ស្វ័យប្រវត្តិកម្ម")}</span></div>
      <div className="project-title-row"><h3>{text(project.title, language)}</h3><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20}/></span></div>
      <p>{text(project.description, language)}</p><div className="tech-tags">{project.technologies.slice(0, 3).map(t => <span key={t}><SkillBadge name={t}/>{t}</span>)}</div>
    </div>
  </Link>;
}

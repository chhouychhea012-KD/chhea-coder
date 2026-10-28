"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { projects, text, ui } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/project-card";

const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
const categoryLabel = (category: string, language: "en" | "km") => {
  if (language === "en") return category;
  const labels: Record<string, string> = { All: "ទាំងអស់", Professional: "វិជ្ជាជីវៈ", "Web Applications": "កម្មវិធីវេប", Automation: "ស្វ័យប្រវត្តិកម្ម" };
  return labels[category] ?? category;
};

export function ProjectExplorer() {
  const { language } = useLanguage();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter(project => {
    const matchesCategory = category === "All" || project.category === category;
    const content = `${text(project.title, language)} ${text(project.description, language)} ${categoryLabel(project.category, language)} ${project.category} ${project.technologies.join(" ")}`.toLowerCase();
    return matchesCategory && content.includes(query.toLowerCase().trim());
  }), [category, language, query]);
  const reset = () => { setCategory("All"); setQuery(""); };
  return <><div className="explorer-toolbar"><div className="filter-chips" aria-label={ui(language, "Project category filters", "តម្រងប្រភេទគម្រោង")}>
    {categories.map(c => <button type="button" key={c} className={`filter-chip ${category === c ? "filter-active" : ""}`} aria-pressed={category === c} onClick={() => setCategory(c)}>{categoryLabel(c, language)}</button>)}
  </div><label className="search-field"><Search size={17} aria-hidden="true" /><span className="sr-only">{ui(language, "Search projects", "ស្វែងរកគម្រោង")}</span><input type="search" placeholder={ui(language, "Search projects...", "ស្វែងរកគម្រោង...")} value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    <p className="result-count" role="status">{language === "en" ? `Showing ${filtered.length} of ${projects.length} projects` : `កំពុងបង្ហាញ ${filtered.length} ក្នុងចំណោម ${projects.length} គម្រោង`}</p>
    {filtered.length ? <div className="projects-grid">{filtered.map((project, index) => <ProjectCard key={project.slug} project={project} large={index === 0 && category === "All" && !query} />)}</div> : <div className="empty-projects"><Search size={32}/><h3>{ui(language, "No matching projects", "រកមិនឃើញគម្រោងដែលត្រូវគ្នាទេ")}</h3><p>{ui(language, "Try a different search or category.", "សូមសាកល្បងពាក្យស្វែងរក ឬប្រភេទផ្សេងទៀត។")}</p><button type="button" onClick={reset} className="button button-secondary">{ui(language, "Reset filters", "កំណត់តម្រងឡើងវិញ")} <X size={16}/></button></div>}
  </>;
}

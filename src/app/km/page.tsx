import type { Metadata } from "next";
import Link from "next/link";
import { projects, profile, skillGroups, text } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

const title = "ឈយ ឈា (Chhea Coder) | អ្នកអភិវឌ្ឍន៍ Full-Stack នៅកម្ពុជា";
const description =
  "គេហទំព័រផលប័ត្ររបស់ ឈយ ឈា (Chhea Coder) អ្នកអភិវឌ្ឍន៍ Full-Stack នៅភ្នំពេញ កម្ពុជា ដែលបង្កើតកម្មវិធីវេប ប្រព័ន្ធគ្រប់គ្រង APIs និងដំណោះស្រាយ Cloud។";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ឈយ ឈា",
    "Chhea Coder",
    "អ្នកអភិវឌ្ឍន៍ Full-Stack",
    "អ្នកអភិវឌ្ឍន៍វេបសាយ កម្ពុជា",
    "អ្នកអភិវឌ្ឍន៍កម្មវិធី ភ្នំពេញ",
  ],
  alternates: {
    canonical: "/km",
    languages: { "en-US": "/", "km-KH": "/km" },
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/km`,
    locale: "km_KH",
    alternateLocale: "en_US",
    type: "website",
  },
};

export default function KhmerPortfolioPage() {
  return (
    <main id="main-content" className="section">
      <div className="container" lang="km">
        <p className="eyebrow">CHHEA CODER / ផលប័ត្រវិជ្ជាជីវៈ</p>
        <h1>{profile.khmerName} <span className="gradient-text">(Chhea Coder)</span></h1>
        <p className="large-copy">
          ខ្ញុំបាទឈ្មោះ {profile.khmerName} ជាអ្នកអភិវឌ្ឍន៍ Full-Stack នៅភ្នំពេញ ប្រទេសកម្ពុជា។ ខ្ញុំបង្កើតកម្មវិធីវេប
          ប្រព័ន្ធគ្រប់គ្រងក្នុងស្ថាប័ន APIs មូលដ្ឋានទិន្នន័យ និងដំណោះស្រាយដែលអាចដាក់ឱ្យប្រើប្រាស់បានជាក់ស្តែង។
        </p>

        <section className="education-section" aria-labelledby="km-skills">
          <h2 id="km-skills">ជំនាញបច្ចេកទេស</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <span className="skill-number">{group.number}</span>
                <h3>{text(group.title, "km")}</h3>
                <p>{text(group.description, "km")}</p>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" aria-labelledby="km-projects">
          <h2 id="km-projects">គម្រោងដែលបានជ្រើសរើស</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <div className="project-info">
                  <h3>{text(project.title, "km")}</h3>
                  <p>{text(project.description, "km")}</p>
                  <Link className="text-link" href={`/projects/${project.slug}`}>
                    មើលព័ត៌មានលម្អិត
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p>
          <Link className="button button-primary" href="/">View English portfolio</Link>
        </p>
      </div>
    </main>
  );
}

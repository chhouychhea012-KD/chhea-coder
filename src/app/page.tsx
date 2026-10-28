"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, ChevronRight, Code2, Database, Download, Github, GraduationCap, Linkedin, MapPin, ServerCog, Sparkles, Terminal, Workflow, Zap } from "lucide-react";
import { ContactPanel } from "@/components/contact-panel";
import { ProjectExplorer } from "@/components/project-explorer";
import { SkillBadge } from "@/components/skill-badge";
import { education, experiences, languages, profile, skillGroups, text, ui, values, workshops } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

function SectionIntro({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-intro"><div className="eyebrow"><span className="eyebrow-dash" />{eyebrow}</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

export default function HomePage() {
  const { language } = useLanguage();
  const t = (value: { en: string; km: string }) => text(value, language);
  return <main id="main-content">
    <section className="hero-section section" id="home">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-availability"><span className="pulse-dot" /> {t(profile.title)} <span className="separator">/</span> {language === "en" ? "Based in Cambodia" : "នៅកម្ពុជា"}</div>
          <div className="hero-mini">{ui(language, "HELLO, I’M", "សួស្តី ខ្ញុំឈ្មោះ")} <span>CHHEA CHHOUY</span></div>
          <h1>{language === "en" ? <>I build <span className="gradient-text">useful digital products</span> with clarity &amp; care</> : <>ខ្ញុំបង្កើត <span className="gradient-text">ផលិតផលឌីជីថលមានប្រយោជន៍</span> ដោយយកចិត្តទុកដាក់</>}<span className="period">.</span></h1>
          <p className="hero-description">{t(profile.tagline)}</p>
          <div className="hero-actions">
            <Link href="/#projects" className="button button-primary">{language === "en" ? "Explore My Work" : "មើលគម្រោង"} <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/#contact" className="button button-secondary">{language === "en" ? "Let's Connect" : "ទំនាក់ទំនង"} <ChevronRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="hero-social-row"><span>{ui(language, "FIND ME ON", "ស្វែងរកខ្ញុំតាម")}</span>
            <a href="https://github.com/Chhea012" target="_blank" rel="noopener noreferrer" aria-label={ui(language, "Chhea on GitHub", "GitHub របស់ Chhea")}><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/chhea-chhouy-337667374/" target="_blank" rel="noopener noreferrer" aria-label={ui(language, "Chhea on LinkedIn", "LinkedIn របស់ Chhea")}><Linkedin size={18} /></a>
            <span className="hero-social-divider" /><span className="hero-location"><MapPin size={14} /> {ui(language, "Phnom Penh", "ភ្នំពេញ")}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-halo" aria-hidden="true" />
          <div className="portrait-frame"><div className="portrait-header"><span className="portrait-indicator" /><span>{ui(language, "PROFILE", "ប្រវត្តិរូប")} / CHHEA</span><span>01</span></div>
            <Image src={profile.portraitUrl} alt={ui(language, "Portrait of CHHEA CHHOUY", `រូបថតរបស់ ${profile.khmerName}`)} width={398} height={512} className="portrait-image" priority />
            <div className="portrait-caption"><div><small>{ui(language, "FULL-STACK DEVELOPER", "អ្នកអភិវឌ្ឍន៍ Full-Stack")}</small><strong>Chhea Chhouy</strong></div><ArrowUpRight size={23} aria-hidden="true" /></div>
          </div>
          <div className="floating-pill floating-pill-top"><span className="floating-pill-icon"><Code2 size={18} /></span><div><small>{ui(language, "FOCUS", "ជំនាញផ្តោត")}</small><strong>{ui(language, "Web applications", "កម្មវិធីវេប")}</strong></div></div>
          <div className="floating-pill floating-pill-bottom"><span className="floating-pill-icon"><Zap size={18} /></span><div><small>{ui(language, "EXPERIENCE", "បទពិសោធន៍")}</small><strong>{ui(language, "1+ year · Full-stack", "ជាង ១ ឆ្នាំ · Full-Stack")}</strong></div></div>
          <span className="hero-coordinate" aria-hidden="true">11.5564° N / 104.9282° E</span>
        </div>
      </div>
      <div className="container hero-bottom"><a href="#about" className="scroll-cue"><ArrowDown size={17} /> {ui(language, "SCROLL TO EXPLORE", "រំកិលចុះដើម្បីស្វែងយល់")}</a><span>{ui(language, "DESIGN · DEVELOPMENT · DEPLOYMENT", "រចនា · អភិវឌ្ឍ · ដាក់ឱ្យប្រើ")}</span></div>
    </section>

    <section id="about" className="section about-section"><div className="container">
      <SectionIntro eyebrow={language === "en" ? "01 / ABOUT ME" : "01 / អំពីខ្ញុំ"} title={language === "en" ? "A developer with a builder's mindset." : "អ្នកអភិវឌ្ឍន៍ដែលគិតបែបអ្នកសាងសង់។"} subtitle={language === "en" ? "I enjoy turning practical requirements into experiences that are useful, maintainable, and enjoyable." : "ខ្ញុំចូលចិត្តបម្លែងតម្រូវការជាក់ស្តែងទៅជាបទពិសោធន៍ដែលមានប្រយោជន៍ និងងាយថែទាំ។"} />
      <div className="about-layout"><div className="about-body"><p className="large-copy">{t(profile.about)}</p><p>{t(profile.aboutSecondary)}</p>
        <div className="about-actions"><a className="text-link" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><Download size={17} /> {ui(language, "View CV", "មើល CV")} <ArrowUpRight size={15} /></a><a className="text-link" href={profile.resumeUrl} download><Download size={17} /> {ui(language, "Download CV", "ទាញយក CV")}</a><span className="about-geo"><MapPin size={16} /> {ui(language, "Phnom Penh, Cambodia", "ភ្នំពេញ ប្រទេសកម្ពុជា")}</span></div>
        <div className="about-stats"><div><strong>1+</strong><span>{ui(language, "Year professional experience", "ឆ្នាំនៃបទពិសោធន៍វិជ្ជាជីវៈ")}</span></div><div><strong>8</strong><span>{ui(language, "Documented project stories", "គម្រោងដែលបានកត់ត្រា")}</span></div><div><strong>02</strong><span>{ui(language, "Professional roles", "តួនាទីវិជ្ជាជីវៈ")}</span></div></div>
      </div><div className="values-grid">{values.map((value, i) => <article className="value-card" key={value.index}><div className="value-card-top"><span>{value.index}</span>{i === 0 ? <Workflow size={21} /> : i === 1 ? <Sparkles size={21} /> : <Terminal size={21} />}</div><h3>{t(value.title)}</h3><p>{t(value.description)}</p></article>)}</div></div>
    </div></section>

    <section id="skills" className="section skills-section"><div className="container">
      <SectionIntro eyebrow={ui(language, "02 / EXPERTISE", "០២ / ជំនាញឯកទេស")} title={ui(language, "Tools I use to make things happen.", "ឧបករណ៍ដែលខ្ញុំប្រើដើម្បីបង្កើតលទ្ធផល។")} subtitle={ui(language, "My technical experience comes from professional work, hands-on school projects, and independent learning.", "បទពិសោធន៍បច្ចេកទេសរបស់ខ្ញុំបានមកពីការងារវិជ្ជាជីវៈ គម្រោងសិក្សាអនុវត្តផ្ទាល់ និងការរៀនដោយខ្លួនឯង។")} />
      <div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.number}><div className="skill-card-heading"><span className="skill-icon">{group.number === "01" ? <Code2 size={21} /> : group.number === "02" ? <ServerCog size={21} /> : group.number === "03" ? <Database size={21} /> : <Workflow size={21} />}</span><span className="skill-number">{group.number}</span></div><h3>{t(group.title)}</h3><p>{t(group.description)}</p><div className="skill-tags">{group.items.map(item => <span key={item}><SkillBadge name={item} />{item}</span>)}</div></article>)}</div>
      <p className="section-note">{ui(language, "Selected skills from my CV — grouped by experience area rather than arbitrary proficiency scores.", "ជំនាញដែលបានជ្រើសរើសពី CV របស់ខ្ញុំ និងរៀបចំតាមផ្នែកបទពិសោធន៍ ជំនួសឱ្យការដាក់ពិន្ទុកម្រិតជំនាញ។")}</p>
    </div></section>

    <section id="projects" className="section projects-section"><div className="container">
      <div className="projects-heading"><SectionIntro eyebrow={ui(language, "03 / SELECTED WORK", "០៣ / ស្នាដៃដែលបានជ្រើសរើស")} title={ui(language, "Proof of work, not just words.", "បង្ហាញស្នាដៃជាក់ស្តែង មិនមែនត្រឹមតែពាក្យសម្ដី។")} subtitle={ui(language, "Professional contributions and hands-on projects. Explore each story for my role, technologies and core features.", "ស្វែងយល់ពីការរួមចំណែកក្នុងការងារវិជ្ជាជីវៈ និងគម្រោងអនុវត្តផ្ទាល់ ដើម្បីមើលតួនាទី បច្ចេកវិទ្យា និងមុខងារសំខាន់ៗរបស់ខ្ញុំ។")} /><span className="project-counter">08 / {ui(language, "PROJECTS", "គម្រោង")}</span></div>
      <ProjectExplorer />
    </div></section>

    <section id="experience" className="section experience-section"><div className="container">
      <SectionIntro eyebrow={ui(language, "04 / EXPERIENCE", "០៤ / បទពិសោធន៍")} title={ui(language, "Where I've put my skills to work.", "កន្លែងដែលខ្ញុំបានយកជំនាញទៅប្រើក្នុងការងារ។")} subtitle={ui(language, "A practical mix of software delivery, systems thinking, and real team collaboration.", "រួមបញ្ចូលការអភិវឌ្ឍ និងដាក់ឱ្យប្រើកម្មវិធី ការគិតជាប្រព័ន្ធ និងការសហការជាក្រុមជាក់ស្តែង។")} />
      <div className="experience-layout"><div className="experience-timeline">{experiences.map((experience, index) => <article key={experience.organization} className="experience-entry"><div className="timeline-symbol"><BriefcaseBusiness size={18}/></div><div className="experience-card"><div className="experience-overline"><span>{ui(language, "ROLE", "តួនាទី")} {String(index + 1).padStart(2,"0")}</span><span>{t(experience.period)}</span></div><h3>{t(experience.role)}</h3><h4>{experience.organization}</h4><p>{t(experience.description)}</p><ul>{experience.points[language].map(x => <li key={x}>{x}</li>)}</ul><div className="tech-tags">{experience.technologies.map(t => <span key={t}><SkillBadge name={t}/>{t}</span>)}</div></div></article>)}</div><aside className="experience-aside"><div className="aside-top"><span>{ui(language, "WORK PHILOSOPHY", "គោលការណ៍ការងារ")}</span><Sparkles size={25}/></div><h3>{ui(language, "Start with the problem. Finish with something people can use.", "ចាប់ផ្តើមពីការយល់បញ្ហា ហើយបញ្ចប់ដោយដំណោះស្រាយដែលមនុស្សអាចប្រើបាន។")}</h3><p>{ui(language, "I pair clean implementation with a practical understanding of what users and teams need.", "ខ្ញុំអនុវត្តការងារប្រកបដោយរបៀបរៀបរយ ដោយផ្អែកលើការយល់ដឹងជាក់ស្តែងអំពីតម្រូវការរបស់អ្នកប្រើប្រាស់ និងក្រុមការងារ។")}</p></aside></div>
    </div></section>

    <section id="education" className="section education-section"><div className="container">
      <SectionIntro eyebrow={ui(language, "05 / LEARNING", "០៥ / ការសិក្សា")} title={ui(language, "Always learning. Always building.", "រៀនជានិច្ច និងបង្កើតជានិច្ច។")} subtitle={ui(language, "Education, training, and curiosity are an important part of my development journey.", "ការអប់រំ ការបណ្តុះបណ្តាល និងការចង់ដឹងចង់ឃើញ គឺជាផ្នែកសំខាន់នៃដំណើរអភិវឌ្ឍន៍របស់ខ្ញុំ។")} />
      <div className="education-layout"><div className="education-panel"><div className="subsection-heading"><GraduationCap size={22}/><h3>{ui(language, "Education", "ការអប់រំ")}</h3></div>{education.map(e => <article className="education-item" key={e.institution}><span><CalendarDays size={15}/>{t(e.period)}</span><h4>{t(e.credential)}</h4><p>{e.institution}</p></article>)}</div><div className="education-panel"><div className="subsection-heading"><Sparkles size={22}/><h3>{ui(language, "Learning & Workshops", "ការរៀន និងសិក្ខាសាលា")}</h3></div><p>{ui(language, "Practical learning in product thinking, teamwork and design.", "ការរៀនអនុវត្តអំពីការគិតបង្កើតផលិតផល ការងារជាក្រុម និងការរចនា។")}</p><div className="workshop-tags">{workshops.map(w => <span key={t(w)}>{t(w)}</span>)}</div><div className="language-list"><span>{ui(language, "LANGUAGES", "ភាសា")}</span>{languages.map(item => <div key={t(item.language)}><strong>{t(item.language)}</strong><small>{t(item.level)}</small></div>)}</div></div></div>
    </div></section>

    <section id="contact" className="section contact-section"><div className="container"><ContactPanel /></div></section>
  </main>;
}

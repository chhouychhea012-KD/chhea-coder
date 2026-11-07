"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Award, BriefcaseBusiness, CheckCircle2, CirclePause, CirclePlay, Database, HeartHandshake, Network, Presentation, Sparkles, UsersRound } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ui } from "@/data/portfolio";

type ActivitySlide = { src: string; alt: string; caption: string; kmCaption: string };

const workshopSlides: ActivitySlide[] = [
  { src: "/images/backendworkshop-1.png", alt: "Chhea Chhouy speaking at the PNC Backend Workshop", caption: "Making backend concepts practical for PNC Generation 2027", kmCaption: "ធ្វើឱ្យគំនិត Backend កាន់តែអាចយល់បានសម្រាប់និស្សិតជំនាន់ ២០២៧" },
  { src: "/images/backendworkshop-2.png", alt: "PNC Generation 2027 students attending the Backend Workshop", caption: "A focused session with the next generation of developers", kmCaption: "វគ្គចែករំលែកដ៏ផ្តោតជាមួយអ្នកអភិវឌ្ឍន៍ជំនាន់ថ្មី" },
  { src: "/images/backendworkshop-3.png", alt: "PNC students taking part in the Backend Workshop", caption: "Turning questions into a stronger understanding of backend development", kmCaption: "បម្លែងសំណួរទៅជាការយល់ដឹងកាន់តែច្បាស់អំពីការអភិវឌ្ឍ Backend" },
  { src: "/images/backendworkshop.png", alt: "Chhea Chhouy with PNC Generation 2027 after the Backend Workshop", caption: "Sharing experience with PNC Generation 2027", kmCaption: "ចែករំលែកបទពិសោធន៍ជាមួយនិស្សិត PNC ជំនាន់ ២០២៧" },
];

const mentorSlides: ActivitySlide[] = [
  { src: "/images/activities/image-2.png", alt: "Chhea Chhouy receiving his volunteer mentor certificate at PNC", caption: "Recognition for mentoring and guiding the VC1 project", kmCaption: "ការទទួលស្គាល់ចំពោះការណែនាំគម្រោង VC1" },
  { src: "/images/activities/cerlaborate.JPG", alt: "Chhea Chhouy with fellow volunteer mentors and project participants", caption: "A shared milestone with the mentoring community", kmCaption: "ព្រឹត្តិការណ៍ដ៏មានន័យជាមួយសហគមន៍អ្នកណែនាំ" },
  { src: "/images/activities/image-1.JPG", alt: "Volunteer mentors celebrating with their certificates", caption: "Celebrating the people behind the projects", kmCaption: "អបអរសាទរអ្នកដែលនៅពីក្រោយគម្រោង" },
];

const internshipSlides: ActivitySlide[] = [
  { src: "/images/activities/activitie-1/internship-1.jpg", alt: "Chhea Chhouy with The NGO Forum on Cambodia internship team", caption: "Learning and contributing with The NGO Forum on Cambodia team", kmCaption: "ការរៀន និងរួមចំណែកជាមួយក្រុម The NGO Forum on Cambodia" },
  { src: "/images/activities/activitie-1/internship-3.png", alt: "Chhea Chhouy presenting work during his internship", caption: "Sharing progress, ideas and practical solutions", kmCaption: "ចែករំលែកវឌ្ឍនភាព គំនិត និងដំណោះស្រាយជាក់ស្តែង" },
  { src: "/images/activities/activitie-1/internship-4.png", alt: "Chhea Chhouy with fellow interns at The NGO Forum on Cambodia", caption: "Working alongside an interdisciplinary internship team", kmCaption: "ធ្វើការរួមគ្នាជាមួយក្រុមអ្នកហាត់ការចម្រុះជំនាញ" },
  { src: "/images/activities/activitie-1/internship.jpg", alt: "Chhea Chhouy receiving a certificate of appreciation", caption: "Certificate of appreciation for commitment and contribution", kmCaption: "វិញ្ញាបនបត្រកោតសរសើរសម្រាប់ការប្តេជ្ញាចិត្ត និងការរួមចំណែក" },
];

function ActivityCarousel({ slides, active, setActive, paused, setPaused, label }: { slides: ActivitySlide[]; active: number; setActive: (value: number | ((current: number) => number)) => void; paused: boolean; setPaused: (value: boolean | ((current: boolean) => boolean)) => void; label: string }) {
  const { language } = useLanguage();
  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);
  const currentSlide = slides[active];

  return <div className="activity-slider" aria-roledescription="carousel" aria-label={label}>
    <div className="activity-slider-stage">
      {slides.map((slide, index) => <Image key={slide.src} src={slide.src} alt={slide.alt} fill sizes="(max-width: 800px) 100vw, 1120px" className={index === active ? "activity-slide activity-slide-active" : "activity-slide"} priority={index === 0} />)}
      <div className="activity-slider-scrim" aria-hidden="true" />
      <div className="activity-slider-caption"><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><p>{language === "en" ? currentSlide.caption : currentSlide.kmCaption}</p></div>
      <div className="activity-slider-controls">
        <button type="button" onClick={previous} aria-label={ui(language, "Previous photo", "រូបថតមុន")}><ArrowLeft size={19} /></button>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? ui(language, "Play slideshow", "ចាប់ផ្តើមស្លាយ") : ui(language, "Pause slideshow", "ផ្អាកស្លាយ")}>{paused ? <CirclePlay size={20} /> : <CirclePause size={20} />}</button>
        <button type="button" onClick={next} aria-label={ui(language, "Next photo", "រូបថតបន្ទាប់")}><ArrowRight size={19} /></button>
      </div>
    </div>
    <div className="activity-slider-dots" role="tablist" aria-label={ui(language, "Choose photo", "ជ្រើសរើសរូបថត")}>{slides.map((slide, index) => <button key={slide.src} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`${ui(language, "Show photo", "បង្ហាញរូបថត")} ${index + 1}`} aria-selected={index === active} role="tab"><span /></button>)}</div>
  </div>;
}

export function ActivitiesShowcase() {
  const { language } = useLanguage();
  const [workshopActive, setWorkshopActive] = useState(0);
  const [workshopPaused, setWorkshopPaused] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [internActive, setInternActive] = useState(0);
  const [internPaused, setInternPaused] = useState(false);

  useEffect(() => {
    if (workshopPaused) return;
    const timer = window.setInterval(() => setWorkshopActive((current) => (current + 1) % workshopSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, [workshopPaused]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % mentorSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (internPaused) return;
    const timer = window.setInterval(() => setInternActive((current) => (current + 1) % internshipSlides.length), 5600);
    return () => window.clearInterval(timer);
  }, [internPaused]);

  return <main id="main-content" className="activities-page">
    <section className="activities-hero">
      <div className="activities-orbit activities-orbit-one" aria-hidden="true" />
      <div className="activities-orbit activities-orbit-two" aria-hidden="true" />
      <div className="container activities-hero-inner">
        <Link href={language === "km" ? "/home/km" : "/home"} className="back-link"><ArrowLeft size={17} /> {ui(language, "Portfolio home", "ទំព័រដើមផលប័ត្រ")}</Link>
        <div className="activities-hero-grid">
          <div className="activities-intro">
            <div className="eyebrow"><span className="eyebrow-dash" />{ui(language, "ACTIVITIES & ACHIEVEMENTS", "សកម្មភាព និងសមិទ្ធផល")}</div>
            <h1>{ui(language, "Experiences that grew my craft — and helped others grow.", "បទពិសោធន៍ដែលពង្រឹងជំនាញខ្ញុំ និងជួយអ្នកដទៃរីកចម្រើន។")}</h1>
            <p>{ui(language, "Beyond building software, I value meaningful collaboration: speaking with the next generation at PNC, sharing what I know as a VC1 volunteer mentor, and contributing as a Full-Stack Developer Intern at The NGO Forum on Cambodia.", "ក្រៅពីការបង្កើតសូហ្វវែរ ខ្ញុំឱ្យតម្លៃលើការសហការដែលមានន័យ៖ ធ្វើបទបង្ហាញជាមួយនិស្សិតជំនាន់ថ្មីនៅ PNC ចែករំលែកចំណេះដឹងជាអ្នកណែនាំស្ម័គ្រចិត្ត VC1 និងរួមចំណែកជាអ្នកហាត់ការ Full-Stack Developer នៅ The NGO Forum on Cambodia។")}</p>
            <div className="activities-meta" aria-label={ui(language, "Activity details", "ព័ត៌មានសកម្មភាព")}>
              <div><Presentation size={18} /><span>{ui(language, "Speaker", "វាគ្មិន")}</span><strong>{ui(language, "PNC Backend Workshop", "សិក្ខាសាលា Backend នៅ PNC")}</strong></div>
              <div><UsersRound size={18} /><span>{ui(language, "Mentorship", "ការណែនាំ")}</span><strong>{ui(language, "VC1 Volunteer Mentor", "អ្នកណែនាំស្ម័គ្រចិត្ត VC1")}</strong></div>
              <div><BriefcaseBusiness size={18} /><span>{ui(language, "Internship", "ការហាត់ការ")}</span><strong>{ui(language, "Full-Stack Developer Intern", "អ្នកហាត់ការ Full-Stack Developer")}</strong></div>
            </div>
          </div>
          <aside className="activities-note">
            <Sparkles size={23} />
            <p>{ui(language, "The best experiences turn knowledge into impact: building useful systems, supporting teams, and creating room for others to learn.", "បទពិសោធន៍ដ៏ល្អបំផុតបម្លែងចំណេះដឹងទៅជាលទ្ធផល៖ បង្កើតប្រព័ន្ធមានប្រយោជ៍ គាំទ្រក្រុម និងបង្កើតឱកាសឱ្យអ្នកដទៃរៀន។")}</p>
            <span>SPEAKING / MENTORSHIP / INTERNSHIP</span>
          </aside>
        </div>
      </div>
    </section>

    <section className="activities-gallery-section workshop-gallery-section">
      <div className="container">
        <div className="activities-gallery-heading"><div><span className="activities-index">01 / 03</span><h2>{ui(language, "PNC Backend Workshop", "សិក្ខាសាលា Backend នៅ PNC")}</h2></div><p>{ui(language, "Guest speaker · 25 October 2026 · Sharing backend experience with PNC Generation 2027.", "វាគ្មិន · ២៥ តុលា ២០២៦ · ចែករំលែកបទពិសោធន៍ Backend ជាមួយនិស្សិត PNC ជំនាន់ ២០២៧។")}</p></div>
        <ActivityCarousel slides={workshopSlides} active={workshopActive} setActive={setWorkshopActive} paused={workshopPaused} setPaused={setWorkshopPaused} label={ui(language, "PNC Backend Workshop photographs", "រូបថតសិក្ខាសាលា Backend នៅ PNC")} />
      </div>
    </section>

    <section className="activities-impact-section workshop-topics-section"><div className="container">
      <div className="eyebrow"><span className="eyebrow-dash" />{ui(language, "WHAT I SHARED", "អ្វីដែលខ្ញុំបានចែករំលែក")}</div>
      <div className="activities-impact-grid">
        <article><Presentation size={23}/><span>01</span><h2>{ui(language, "What happens in the backend", "តើមានអ្វីកើតឡើងនៅ Backend")}</h2><p>{ui(language, "Introduced the role of backend development: receiving requests, applying business logic, protecting data and returning useful responses.", "ណែនាំអំពីតួនាទីនៃការអភិវឌ្ឍ Backend៖ ទទួលសំណើ អនុវត្តតក្កវិជ្ជាអាជីវកម្ម ការពារទិន្នន័យ និងបញ្ជូនលទ្ធផលមានប្រយោជន៍ត្រឡប់ទៅវិញ។")}</p></article>
        <article><Network size={23}/><span>02</span><h2>{ui(language, "How a full system connects", "របៀបដែលប្រព័ន្ធពេញលេញភ្ជាប់គ្នា")}</h2><p>{ui(language, "Explained how the frontend, APIs, backend services and database work together to create one complete application.", "ពន្យល់អំពីរបៀបដែល Frontend, APIs, សេវា Backend និង Database ធ្វើការរួមគ្នាដើម្បីបង្កើតកម្មវិធីពេញលេញមួយ។")}</p></article>
        <article><Database size={23}/><span>03</span><h2>{ui(language, "Lessons from real projects", "មេរៀនពីគម្រោងពិត")}</h2><p>{ui(language, "Shared practical project experience: understanding requirements, collaborating with a team, solving issues and delivering work people can use.", "ចែករំលែកបទពិសោធន៍គម្រោងជាក់ស្តែង៖ ការយល់តម្រូវការ សហការជាមួយក្រុម ដោះស្រាយបញ្ហា និងផ្តល់ការងារដែលមនុស្សអាចប្រើបាន។")}</p></article>
      </div>
    </div></section>

    <section className="activities-gallery-section">
      <div className="container">
        <div className="activities-gallery-heading"><div><span className="activities-index">02 / 03</span><h2>{ui(language, "Volunteer mentorship · VC1", "ការណែនាំស្ម័គ្រចិត្ត · VC1")}</h2></div><p>{ui(language, "Guiding junior students through the way real software projects are planned, built and completed.", "ណែនាំនិស្សិតជំនាន់ក្រោយអំពីរបៀបរៀបចំ បង្កើត និងបញ្ចប់គម្រោងសូហ្វវែរជាក់ស្តែង។")}</p></div>
        <ActivityCarousel slides={mentorSlides} active={active} setActive={setActive} paused={paused} setPaused={setPaused} label={ui(language, "Volunteer mentoring photographs", "រូបថតសកម្មភាពណែនាំស្ម័គ្រចិត្ត")} />
      </div>
    </section>

    <section className="activities-impact-section"><div className="container">
      <div className="eyebrow"><span className="eyebrow-dash" />{ui(language, "MENTORSHIP CONTRIBUTION", "ការរួមចំណែកក្នុងការណែនាំ")}</div>
      <div className="activities-impact-grid">
        <article><span>01</span><h2>{ui(language, "Lead with context", "ណែនាំដោយផ្តល់បរិបទ")}</h2><p>{ui(language, "Explained how real-world projects move from understanding requirements to planning, teamwork, delivery and review.", "ពន្យល់អំពីរបៀបដែលគម្រោងជាក់ស្តែងដំណើរការចាប់ពីការយល់តម្រូវការ ការរៀបចំផែនការ ការធ្វើការជាក្រុម ការប្រគល់ការងារ និងការត្រួតពិនិត្យ។")}</p></article>
        <article><span>02</span><h2>{ui(language, "Support the team", "គាំទ្រក្រុម")}</h2><p>{ui(language, "Guided junior students as they made decisions, solved practical issues and kept their project moving forward.", "ណែនាំនិស្សិតជំនាន់ក្រោយក្នុងការសម្រេចចិត្ត ដោះស្រាយបញ្ហាជាក់ស្តែង និងនាំគម្រោងរបស់ពួកគេឆ្ពោះទៅមុខ។")}</p></article>
        <article><span>03</span><h2>{ui(language, "Finish with confidence", "បញ្ចប់ដោយទំនុកចិត្ត")}</h2><p>{ui(language, "Helped the team bring its junior project to completion and celebrate the work behind the final result.", "ជួយក្រុមនាំគម្រោងនិស្សិតរបស់ពួកគេរហូតដល់ការបញ្ចប់ និងអបអរសាទរការខិតខំដែលនៅពីក្រោយលទ្ធផលចុងក្រោយ។")}</p></article>
      </div>
    </div></section>

    <section className="internship-section"><div className="container">
      <div className="internship-intro"><div><div className="eyebrow"><span className="eyebrow-dash" />03 / {ui(language, "INTERNSHIP EXPERIENCE", "បទពិសោធន៍ហាត់ការ")}</div><h2>{ui(language, "Building automation that supported meaningful work.", "បង្កើតស្វ័យប្រវត្តិកម្មដើម្បីគាំទ្រការងារដ៏មានន័យ។")}</h2></div><p>{ui(language, "As a Full-Stack Developer Intern at The NGO Forum on Cambodia, I contributed to the MACOR department's automation system — supporting the team and helping turn a practical workflow into a reliable web-based solution.", "ក្នុងនាមជាអ្នកហាត់ការ Full-Stack Developer នៅ The NGO Forum on Cambodia ខ្ញុំបានរួមចំណែកក្នុងប្រព័ន្ធស្វ័យប្រវត្តិកម្មរបស់ផ្នែក MACOR ដើម្បីគាំទ្រក្រុម និងបម្លែងលំហូរការងារជាក់ស្តែងទៅជាដំណោះស្រាយតាមវេបដែលអាចទុកចិត្តបាន។")}</p></div>
      <div className="internship-layout"><div className="internship-details"><div className="internship-role"><BriefcaseBusiness size={22}/><div><span>{ui(language, "ROLE", "តួនាទី")}</span><strong>{ui(language, "Full-Stack Developer Intern", "អ្នកហាត់ការ Full-Stack Developer")}</strong><small>The NGO Forum on Cambodia</small></div></div><div className="internship-points"><div><CheckCircle2 size={18}/><p>{ui(language, "Supported the MACOR department by building and improving its workflow automation system.", "គាំទ្រផ្នែក MACOR ដោយបង្កើត និងកែលម្អប្រព័ន្ធស្វ័យប្រវត្តិកម្មសម្រាប់លំហូរការងារ។")}</p></div><div><CheckCircle2 size={18}/><p>{ui(language, "Contributed across the full stack: interface work, application logic, data handling and practical system support.", "រួមចំណែកលើ Full Stack៖ ការងារផ្នែកចំណុចប្រទាក់ តក្កវិជ្ជាកម្មវិធី ការគ្រប់គ្រងទិន្នន័យ និងការគាំទ្រប្រព័ន្ធជាក់ស្តែង។")}</p></div><div><HeartHandshake size={18}/><p>{ui(language, "Worked closely with colleagues, shared progress, and learned how a mission-driven organization delivers technology for real operations.", "ធ្វើការយ៉ាងជិតស្និទ្ធជាមួយសហការី ចែករំលែកវឌ្ឍនភាព និងរៀនអំពីរបៀបដែលអង្គការមានបេសកកម្មប្រើបច្ចេកវិទ្យាសម្រាប់ប្រតិបត្តិការពិតប្រាកដ។")}</p></div></div><div className="internship-award"><Award size={19}/><div><span>{ui(language, "ACHIEVEMENT", "សមិទ្ធផល")}</span><strong>{ui(language, "Received a Certificate of Appreciation", "ទទួលបានវិញ្ញាបនបត្រកោតសរសើរ")}</strong><p>{ui(language, "Recognized for commitment and contribution during the internship.", "ត្រូវបានទទួលស្គាល់ចំពោះការប្តេជ្ញាចិត្ត និងការរួមចំណែកក្នុងអំឡុងពេលហាត់ការ។")}</p></div></div></div>
        <ActivityCarousel slides={internshipSlides} active={internActive} setActive={setInternActive} paused={internPaused} setPaused={setInternPaused} label={ui(language, "The NGO Forum internship photographs", "រូបថតការហាត់ការនៅ The NGO Forum")} />
      </div>
    </div></section>
  </main>;
}

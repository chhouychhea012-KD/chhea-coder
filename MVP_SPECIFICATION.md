# MY PORTFOLIO — COMPLETE FRONTEND MVP / BUILD SPECIFICATION

Version: 1.1 (CV-integrated)  |  Target: Next.js 16 App Router  |  Frontend only

## 0. Mission & contract for implementation agent
Build a genuinely polished, creative, fast, accessible, responsive personal portfolio for a Full Stack Developer. Produce complete working frontend code, not static screenshots or disconnected mockups. The website must look like a high-end developer/designer portfolio while remaining credible, easy to scan, and easy to update. Use real internal navigation and working frontend interactions. Do not add a backend, APIs, database, CMS, fake submission, or authentication.

**Working identity:** Chhea Chhouy — Full-Stack Developer, based on the supplied CV. See the authoritative CV-based content override at the end of this specification. Preserve CV-supported details and keep unknown dates or public permissions unspecified. Do not fabricate achievements or disclose confidential employer or private residence/reference information.

## 1. Product vision
**Business purpose:** Help recruiters, collaborators, and clients quickly understand who I am, what I build, which technologies I use, the quality of my work, and how to contact me.

**Core visitor journeys:**
1. Recruiter opens homepage → sees identity and specialties within 5 seconds → reviews featured projects → checks experience/skills → downloads CV or emails me.
2. Potential client scans relevant projects → opens project case study → sees problem, solution, technology, responsibilities, and outcomes → opens contact email.
3. Developer/peer explores skill categories and GitHub links → shares a project URL.
4. Mobile visitor can follow exactly the same journeys without hover-only interactions.

**Primary CTA:** View My Work. **Secondary CTA:** Contact Me. **Support CTA:** Download CV only when a genuine PDF is supplied.

## 2. Scope & priorities

### P0 — Mandatory to launch
- Complete, fully responsive homepage and dynamic project detail routes.
- Desktop sticky navigation; accessible mobile menu; active-section navigation.
- Hero identity, animated emphasis, social links, availability indicator if verified, view-work/contact CTAs.
- About section with short biography and genuine personal background.
- Expertise/skills section organized by categories, not arbitrary percentage bars.
- Featured projects and project portfolio with functional client-side search/filter; empty state and reset.
- Each project opens a real details page. Include overview, problem, solution, role, stack, screenshots/visuals, links if valid.
- Experience timeline with editable content; hide unverified/empty items.
- Contact section with real `mailto:` link, copy-email feedback, optional social links; no simulated form submission.
- Footer, back-to-top, responsive light/dark theme, theme persistence.
- SEO title/description, page metadata, semantic tags, sitemap/robots, valid structured data only if facts are verified.
- Keyboard navigation, visible focus, accessible form labels, reduced-motion support, correct color contrast.
- Fully typed local content: profile, projects, skills, experience, socials.
- Graceful empty data, missing links, not-found project routes.

### P1 — Optional after P0
- English/Khmer language toggle with complete translations and appropriate Khmer font.
- Dedicated `/about`, `/projects`, `/contact` routes if homepage becomes too long.
- Client-side command menu with keyboard shortcut; copy-project-link button.
- Native share where available and copy fallback.
- Project image lightbox, tabs, gallery carousel; validated downloadable CV.
- Static blog/articles via MDX; no CMS required.
- More advanced tasteful cursor and scroll effects respecting reduced motion.

### Explicitly out of scope
Backend/database, API routes for contact submission, user accounts, CMS/admin, payments, live chat, fake analytics, unverified GitHub metrics, contact-form delivery promises, unlicensed assets, and copying another designer's portfolio.

## 3. Pages, navigation & information architecture

```text
/
  Header (Brand, Home, About, Skills, Projects, Experience, Contact, Theme)
  Hero
  Trust / short intro / optional specialty strip
  About
  Skills / Tech Stack
  Featured Projects + All Projects list + filters
  Experience
  Process / Services (optional concise section)
  Contact
  Footer
/projects/[slug]
  Project hero, meta, overview, challenge, solution, key features,
  responsibilities, technology, image gallery, key learnings,
  external links (when available), previous/next project
/not-found
  Friendly 404 and return-home CTA
```

Required anchor links: `#home`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`. Logo returns home. Avoid placeholder anchors that do nothing. Scroll offset must account for sticky header. Project cards link to `/projects/[slug]`. Back to projects returns to `/#projects`.

## 4. Creative visual identity

**Art direction:** "Midnight engineering studio" — editorial typography, rich dark navy/near-black background, crisp cobalt-blue accents, fine gridlines, glass-like frosted surfaces, asymmetric typography, generous whitespace, carefully controlled neon glow, architectural mock project graphics. Modern but not gaming-like; recruiters must be able to read content effortlessly.

**Design tokens:**
- Dark background `#070B14`; secondary surface `#0D1425`; card `#101A2E`; text `#F4F7FB`; muted text `#A7B5CB`; primary `#5B8CFF`; secondary accent `#8B5CF6`; success `#46D9A1`; border `rgba(170, 190, 230, .14)`.
- Light: background `#F6F8FC`; surface white; text `#111827`; muted `#526076`; border `#DCE3EF`; accent deep blue `#2455E6`.
- Body font: modern sans, e.g. Geist/system-sans; large editorial heading; monospace for labels or chips only. Use legal font distribution or system fallbacks.
- Max content width 1160–1240px; desktop section padding 88–120px; mobile 64–80px; 8px spacing scale.
- Card radius 20–24px; button pill; subtle gradient borders and shadows.
- One clear visual accent per section; avoid excessive gradients/particle effects.

**Hero composition:** Two-column desktop layout (left: name, role, concise positioning, CTAs, stats only if accurate; right: abstract frontend/developer visual card or user-approved portrait). Mobile: one column with readable title and clean stacking. Include animated status dot only for a truthful availability label. Do not show fake 'years of experience' or numeric outcomes.

**Section composition:** Label/eyebrow → large headline → short description → interactive content. Mix a large featured project, 2-column project cards, large skill pills, subtle experience timeline, strong contact banner.

**Motion:** Short reveal/translate animation, stagger list items, mild card hover lift/tilt (nonessential), progress indicator and subtle gradient movement; 150–500ms durations. Disable or reduce via `prefers-reduced-motion`; no scroll hijacking, loading screen, autoplay video, or flashing.

## 5. Detailed feature requirements (one by one)

### 5.1 Global header
- Brand button with name/monogram; home navigation.
- Sticky after page start with translucent surface and blur.
- Desktop nav with proper links and visible hover/active state.
- Mobile menu open/close button uses `aria-expanded` and clear label, closes on nav selection and Escape.
- Theme toggle has accessible name and correct theme icon; stores preference locally and avoids hydration flashes.
- Contact CTA displays at primary action position.

### 5.2 Hero
- Eyebrow: `PORTFOLIO / FULL STACK DEVELOPER`.
- Large headline: `I build digital experiences that work beautifully.`
- Supporting subheading describing frontend and backend capability without unverified claims.
- View Projects scrolls to `#projects`; Let's Talk scrolls to `#contact` or opens real mailto.
- Responsive abstract browser/code illustration in CSS; optional real personal portrait asset.
- Social icons visible only when URLs are configured.

### 5.3 About
- Genuine introduction, short strengths, primary focus and working values.
- Optional location display only when the owner explicitly approves it.
- 3–4 credibility cards: `Frontend craft`, `Backend systems`, `Product thinking`, `Collaboration` (descriptive; not fake metrics).
- Resume link shows only if `/public/resume.pdf` exists and is the actual user's resume.

### 5.4 Skills
- Categories: Frontend; Backend; Database; UI/UX & Tooling.
- Example frontend: Next.js, React, TypeScript, JavaScript, HTML/CSS, Tailwind.
- Example backend: Java, Spring Boot, Node.js, REST APIs.
- Example database: PostgreSQL, SQL, Oracle SQL (include only if truthful).
- Example tools: Git, Figma, Docker (include only if truthful).
- Render simple concise chips with category icon. No dishonest proficiency percentages or years.
- Optional segmented category filter; keyboard-accessible.

### 5.5 Projects
- Large featured card and grid, each with category, title, short problem/solution summary, tech chips, and arrow.
- Working search across title, description and technology.
- Filter categories from actual data; active filter clear; result count; no-results feedback with Reset button.
- Every project has unique slug; links to own detail route.
- External GitHub/live demo links only if valid and permitted. Use `rel="noopener noreferrer"` for new tabs.
- Use media with real text alternatives; if screenshot not provided, intentionally designed abstract case-study cover and clearly marked sample.
- Project data is not presented as proven completed public work until verified by owner.

### 5.6 Project detail route
- Read project using slug from data file; valid static paths build; invalid slug shows 404.
- Intro hero with category, title, description, year if known, role if known, tech stack.
- Sections: Project Overview, Challenge, Solution, Key Features, My Role, Technology, Learnings/Outcomes (only verified), Screenshot gallery, Project links.
- Back-to-projects, next/previous projects, SEO metadata based on project.
- Works without backend and directly navigated/deep links work.

### 5.7 Experience
- Vertical timeline (role, team/company if disclosed, start/end dates if verified, impact bullets).
- The supplied CV confirms two work-experience records; render those two entries, with no invented role dates.
- No fictional job titles, organizations, or metrics.

### 5.8 Contact
- Prominent collaboration CTA; responsive and clear.
- Show configurable real email; `mailto:email?subject=...` opens user email client.
- Copy Email uses Clipboard API with success/error feedback, and graceful fallback.
- LinkedIn/GitHub links only if supplied.
- **No fake Send Message form.** An actual message form requires an explicitly authorized backend/external form service and is outside frontend-only MVP.

### 5.9 Footer
- Copyright current year; brand; internal navigation; configured socials; back-to-top action.
- Avoid filler testimonials or unverified endorsements.

### 5.10 Empty/loading/error handling
- Filter zero-result state with Reset action.
- No project data → friendly message and no broken links.
- Invalid project slug → polished 404.
- If no portfolio links exist, suppress buttons rather than broken `#` links.
- External asset errors have visual fallback.

## 6. Data contracts
Use local typed arrays/objects in `/src/data/portfolio.ts`. A sample model:

```ts
export type ProjectCategory = "Web App" | "Enterprise System" | "Mobile" | "UI/UX";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  responsibilities: string[];
  tech: string[];
  year?: string;
  role?: string;
  screenshots?: { src: string; alt: string }[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  isSample?: boolean;
}

export interface PortfolioProfile {
  displayName: string;
  headline: string;
  about: string[];
  email?: string;
  availability?: string;
  resumeUrl?: string;
  socialLinks: { label: string; href: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization?: string;
  period?: string;
  description: string;
  achievements?: string[];
}
```

Place *all* editable identity, skills, experiences, copy, and projects in `/src/data`. A project URL must not be set to `#`; omit it if unknown. Provide the eight CV-supported project entries listed in the CV-based override section; no fake/sample projects are required.

## 7. File architecture

```text
portfolio/
├── public/
│   ├── projects/                 # add approved screenshots
│   ├── images/                   # add approved portrait/logo
│   └── resume.pdf                # only if real resume supplied
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── projects/[slug]/page.tsx
│   ├── components/
│   │   ├── site-header.tsx
│   │   ├── theme-provider.tsx
│   │   ├── hero.tsx
│   │   ├── section-heading.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── project-card.tsx
│   │   ├── experience.tsx
│   │   ├── contact.tsx
│   │   └── site-footer.tsx
│   ├── data/portfolio.ts
│   └── lib/utils.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

Use Server Components for static pages/SEO where possible. Put `"use client"` only in pieces that need state, interaction, browser APIs, or Motion. Never leak `window`/`localStorage` into server-rendered render paths.

## 8. State and frontend business rules
- `theme`: persisted as `localStorage` value `dark|light`, honors system preference if no saved preference.
- `menuOpen`: client state; only visible on mobile; ESC/backdrop/nav click dismiss.
- `projectQuery`: client state; filter live on change; case-insensitive.
- `categoryFilter`: client state (`All` or category); AND-ed with query.
- `copyStatus`: copied/failed/idle; polite ARIA feedback.
- `activeSection`: optional intersection observer; no fragile scroll handler on every frame.
- `profile.email`: missing/placeholder => no working email action; show editable fallback message.
- `projects`: array drives cards, filters, feature counts, static route params, page metadata, previous/next links.

## 9. UX design acceptance
### Desktop
1440px width: max-width centered layout, two-column hero, visually balanced cards, clear left-to-right reading. Functional hover and focus.
### Tablet
768–1023px: 1–2 columns where readable, no horizontal overflow, header collapsed appropriately.
### Mobile
320–767px: single-column text and cards, 44px+ touch targets, no clipped headings, no hover dependency, safe spacing and readable buttons.
### General
Readable minimum body 16px, proper H1/H2 hierarchy, one H1/page, labels in plain English, consistent radii, no auto-scrolling, no blocked navigation, loading states if any media loads.

## 10. SEO & accessibility
- Page-specific metadata; semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Generated `sitemap.xml` and `robots.txt` using canonical URL from `NEXT_PUBLIC_SITE_URL` or editable constant.
- Open Graph/Twitter metadata; no broken OG image path.
- Links use meaningful visible text. Decorative visuals `aria-hidden`; actual images have meaningful `alt`.
- Keyboard focus states; skip-to-content; Escape to close mobile menu; `aria-pressed` on filters.
- Screen reader announcements for copied email and filter result count where appropriate.
- Respect reduced-motion and browser zoom; WCAG AA contrast target.
- Consider JSON-LD Person only after contact/social/profile fields verified.

## 11. Performance & quality targets
- Target Lighthouse mobile Performance >=90 (depends on real assets/deployment); Accessibility >=95, Best Practices >=95, SEO >=95.
- Target LCP <=2.5s and CLS <=0.1 on ordinary production mobile connections; measure, don't claim untested.
- Avoid autoplay videos, giant animation libraries, huge fonts, remote background images; use `next/image` for approved screenshots, optimized formats and right sizes.
- No client-side JS on purely static sections where unnecessary.
- No console errors, hydration warnings, missing keys, dead links, or unwanted horizontal scroll.
- `npm run build` and `npm run lint` pass. No TypeScript errors.

## 12. Milestones / delivery checklist
### Stage A — Foundation
[ ] Initialize Next.js App Router + TypeScript + Tailwind 4 + ESLint.
[ ] Implement tokens, CSS theme, typography, content container, reusable primitives.
[ ] Create typed portfolio data and placeholder rules.
### Stage B — Homepage
[ ] Header, Hero, About, Skills, Projects, Experience, Contact, Footer.
[ ] Responsive styling and navigation behavior.
### Stage C — Projects
[ ] Working filters, search, reset, project cards, dynamic slug detail routes, 404.
[ ] Conditional project external links; deep-link direct access.
### Stage D — Polish
[ ] Accessible interactions; theme persistence; copy email; all responsive breakpoints.
[ ] Metadata, sitemap, robots, link integrity, reduced motion, final QA.
### Stage E — Content & launch
[ ] Verify the CV-based biography, project descriptions, employer naming, public CV, emails, repository URLs and screenshots.
[ ] Confirm permission to publish work screenshots/names.
[ ] Test on Chrome, Firefox, Safari, iOS and Android.
[ ] Deploy frontend; verify live URLs and Search Console later if desired.

## 13. Definition of Done — measurable
- [ ] All P0 modules implemented, not just depicted.
- [ ] Functional anchors, mobile menu, theme toggle, filtering, and project detail routes.
- [ ] Text and projects sourced from editable typed data.
- [ ] Contact actions use genuine links/clipboard; no false success states.
- [ ] All unverified claims visually identified as samples or removed.
- [ ] Lighthouse, responsive, keyboard, reduced-motion, and production build tested.
- [ ] `npm run dev`, `npm run build`, `npm run lint` work.
- [ ] No APIs, server actions, databases, auth or CMS required.

## 14. Recommended commands

```bash
npx create-next-app@latest my-portfolio --typescript --eslint --app --src-dir --tailwind
cd my-portfolio
npm install motion lucide-react
npm run dev
npm run build
```

Use the current official Next.js 16.x patch level, React supplied by Next.js, Tailwind CSS 4, and Motion (`motion/react`). Do not add Framer Motion's older import package just to animate a few elements. A plain CSS animation is perfectly sufficient where appropriate.

## 15. Implementation-agent task (copy/paste)

> Build this entire personal developer portfolio as a complete, production-quality **frontend-only Next.js App Router + TypeScript + Tailwind CSS 4** application. Follow every P0 requirement and acceptance criterion in this document. Use an unmistakably premium editorial dark/blue design with a light mode, subtle accessible animations, responsive layouts, and reusable components. Store content in strongly typed local data. Implement all navigation, mobile menu behavior, sticky header, theme toggle with persisted preference, project search/filter/reset, dynamic project detail pages with static params, graceful 404, copy email action, and mailto contact. Use the CV-sourced data from sections A–F and preserve confidentiality; never invent results or testimonials. No backend, CMS, database, server actions, authentication or fake message submission. Provide runnable code, README and production build, with no TypeScript, lint or accessibility errors. Don't stop after generating only a homepage mockup.

## 16. Helpful official references
- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS for Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- Motion for React: https://motion.dev/docs/react
- Next.js SEO metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

---

# CV-BASED CONTENT INTEGRATION — AUTHORITATIVE OVERRIDE (v1.1)

The supplied two-page CV is the content source of truth for identity, projects, skill categories, experience, education and relevant professional links. This section **overrides any examples, placeholders, sample-project defaults or empty-experience recommendations above**. All text below must be maintained in `/src/data/portfolio.ts` and rendered by reusable React components. The accompanying source project already incorporates these content records.

## A. Verified public identity

- **Name:** Chhea Chhouy (also styled CHHEA CHHOUY).
- **Job title:** Full-Stack Developer.
- **Professional summary:** Experienced in CRM, education, internal management platforms, and practical web projects, with frontend, backend, data and deployment exposure.
- **Professional experience headline:** `1+ years` as expressed in the CV (avoid incrementing this automatically).
- **Public city:** Phnom Penh, Cambodia. Do **not** show the CV's specific residential street address.
- **Professional email:** `chheadeveloper@gmail.com`.
- **LinkedIn:** `https://www.linkedin.com/in/chhea-chhouy-337667374/`.
- **GitHub:** `https://github.com/Chhea012` inferred from multiple CV repository URLs; verify the account and current links before going live.
- **Portrait asset:** Extracted from the CV and placed at `/public/images/chhea-portrait.jpg` for the Next.js hero. This is the original CV portrait, not an AI-generated replacement.
- **Public CV asset:** `/public/resume.pdf`, a privacy-safe one-page public edition generated from the supplied CV that excludes residential address and unrelated reference contacts. Do not publish the original two-page PDF unreviewed.

### Approved introductory copy

**Hero title:** `I build useful digital products with clarity & care.`

**Hero subtitle:** `Full-Stack Developer creating thoughtful web applications, internal platforms, and practical tools — from interface to deployment.`

**About:** `I'm Chhea Chhouy, a Full-Stack Developer who enjoys building efficient, approachable software. I've worked on CRM, education, and internal management products, and I enjoy connecting useful features with clean, friendly interfaces.`

This is adapted from the owner's CV without adding invented awards, clients, employer dates or performance figures.

## B. CV work-experience timeline

| Role | Organization | CV-supported highlights | Date policy |
|---|---|---|---|
| Full-Stack Developer | KD Global Management | Custom CRM, KD Academy, KD Vision; workflow automation; dashboards; role-based access control; Vue.js, Laravel, Vuetify, PHP, MySQL, AWS | CV does not give exact job start/end dates — do not fabricate dates |
| IT Intern (Full-Stack Developer) | The NGO Forum on Cambodia | Service agreement management software for freelance consultants, web development using Python frameworks, AWS EC2 Ubuntu deployment | CV does not give exact job start/end dates — do not fabricate dates |

Do not present school roles (Team Lead / Scrum Master) as full-time employment. They belong to project role metadata.

## C. CV project catalogue: eight case-study entries

| # | Slug | Project | Context / role | Date | URL |
|---|---|---|---|---|---|
| 1 | `kd-business-platforms` | Custom CRM, KD Academy, KD Vision | KD Global Management, Full-Stack Developer | Not supplied | Private professional project; no public repository |
| 2 | `consultant-agreement-management` | Service Agreement Management | NGO Forum on Cambodia, Full-Stack Intern | Not supplied | Private professional project; no public repository |
| 3 | `pos-system` | POS System | Virtual Company One, Scrum Master & Coder | Mar–Apr 2025 | `https://github.com/Chhea012/VC1_POS_System` |
| 4 | `leave-management-system` | Leave Management System | Virtual Company Two, NGO Forum on Cambodia | Jul–Aug 2025 | Repository not provided |
| 5 | `task-management-app` | Task Management App | School project, Team Lead | Jan 2025 | `https://github.com/Chhea012/Task-Management-App-B12` |
| 6 | `web-scraping-automation` | Web Scraping Automation | School project, Team Lead | Nov 2024 | `https://github.com/Chhea012/webdata-scraper-project` |
| 7 | `music-band-website` | Music Band Website | School project, Team Lead | Oct–Nov 2024 | `https://github.com/Chhea012/class_a_music_band` |
| 8 | `wordpress-aws-hosting` | Hosting WordPress | School deployment project | Jan 2025 | Repository not provided |

### Detailed project content requirements

**KD Business Platforms:** Cover the Custom CRM System, KD Academy, and KD Vision as a **single grouped professional case study** unless the owner supplies enough approved public detail for separate pages. The role includes feature work, dashboards, permissions, and automated workflows. Show original abstract UI artwork instead of private employer screenshots. Technologies: Vue.js, Laravel, Blade, Vuetify, JavaScript, PHP, MySQL, REST APIs, Nginx, Linux, Git, AWS, Cloudflare.

**Consultant Agreement Management:** Explain agreement records, automation and workflow, responsive interface, and AWS EC2 deployment. Technologies: Python, Flask, Django, Bootstrap, CSS, jQuery, Chart.js, Git, Jira, Figma, AWS EC2, Ubuntu. Do not reveal internal agreements, customers or financial terms.

**POS System:** This is a school project. User role: Scrum Master and coder; features: inventory, sales and financial tracking, barcode scanning, Telegram chatbot. Technologies: PHP (MVC), MySQL, HTML/CSS/SASS, Bootstrap, jQuery, Chart.js, Composer, Git, Jira, AWS EC2 Ubuntu. Provide public GitHub repository button.

**Leave Management System:** This is a school project from July 14–August 30, 2025. Attendance, leave and permissions for team visibility; Laravel implementation, AWS EC2 Ubuntu deployment. Avoid falsely asserting a live production URL.

**Task Management App:** Team Lead; task creation, organization, status tracking and calendar integration. Technologies: HTML, CSS, SASS, Bootstrap, JavaScript, Chart.js, Firebase, localStorage, Figma, GitHub. Provide GitHub button.

**Web Scraping Automation:** Team Lead; Python desktop GUI using Requests, BeautifulSoup, Tkinter and JSON. It is not a web SaaS app, and the portfolio should label its project category **Automation** rather than web-only. Provide GitHub button.

**Music Band Website:** Team Lead; responsive presentation of band information, videos, media. HTML, CSS, SASS, Figma. Provide GitHub button. Do not play or upload copyrighted music without rights.

**WordPress on AWS:** Cloud hosting experience; WordPress running on AWS EC2 Ubuntu and Linux environment. Include deployment outcomes only as described in CV, without uptime or performance claims.

**Case-study template:** overview → challenge → solution → key features → technologies → my responsibilities → links if real. Do not invent fabricated screenshots, customer testimonials, usage statistics, percentages, deployment metrics, or source code for company systems.

## D. Exact skills from CV (grouped for UI)

**Frontend:** Vue.js, Nuxt.js, React.js, JavaScript, Bootstrap 5, Tailwind CSS, HTML, CSS, SASS.

**Backend:** Laravel, Node.js (APIs/Microservices), Python (Flask/Django), PHP, TypeScript OOP, REST APIs.

**Database / Services:** MySQL, SQLite, Firebase.

**Cloud / Deployment:** AWS (EC2, S3, RDS), Cloudflare, Ubuntu Linux, Nginx, WordPress, Netlify/Vercel.

**Tools:** Git, GitHub, Asana, Jira, Canva, Draw.io, Postman, Lucidchart, Figma, MobaXterm, Hostinger, Namecheap, GoDaddy.

**Data:** Python algorithms, Power BI, Chart.js.

Skills can be displayed as chips, not subjective percent meters. The portfolio implementation uses a curated subset, while the full CV preserves additional technologies. Do not imply all listed tools were used in every project.

## E. Education and additional development

1. **Passerelles Numériques Cambodia** — Associate Degree in Web Programming, 2024–2026.
2. **Pouk High School** — Baccalaureate (Bac II), 2020–2023.
3. **Workshops:** Project Management, Data Analytics, Product Ownership, UX/UI Design; Agile collaboration, Jira, Git/GitHub, analysis, Python/Power BI, and design activities.
4. **Languages:** Khmer (Mother Tongue), English (Intermediate).
5. **Interests:** Volunteering, training classmates, personal development projects, exploring programming languages.

The CV lists company visits; they should **not** be presented as employers, clients, partnerships or endorsements. They can remain off the MVP homepage.

## F. Frontend implementation scope from CV

### Homepage required sections

1. **Hero:** Portrait, name, role, headline, short text, Explore Projects CTA, Contact CTA, LinkedIn/GitHub.
2. **About:** Two-paragraph CV-based biography, three genuine professional highlights, open privacy-safe CV.
3. **Skills:** Four cards for Frontend, Backend, Data & Cloud, Tools & Workflow.
4. **Projects:** Eight searchable/filterable projects with CV-based details and working dynamic routes.
5. **Experience:** Two real entries; do not show invented exact employment dates.
6. **Education & Learning:** Degree, high school, workshops and language proficiency.
7. **Contact:** Public email, mailto, copy email, LinkedIn/GitHub; no fake form delivery.
8. **Footer:** Brand, current year and navigation.

### Project routes

`/projects/kd-business-platforms`, `/projects/consultant-agreement-management`, `/projects/pos-system`, `/projects/leave-management-system`, `/projects/task-management-app`, `/projects/web-scraping-automation`, `/projects/music-band-website`, `/projects/wordpress-aws-hosting`.

### Data/privacy/content guards

- Include personal portrait only in user-authorized public website.
- Do not publish full residential address, reference names/phones/emails, nonpublic employer code or screenshots.
- Keep contact forms frontend-only using `mailto:`; no fake successful delivery toast.
- CV URLs are external links and should be tested before production.
- Professional company names in the CV may be spelling variants; confirm exact display names before deployment.
- The dates for roles are unknown; the portfolio should not invent them.
- Abstract case-study visuals are stylistic representations only, never claim they are live product screenshots.

## G. Updated implementation prompt for Codex

> Build a complete, beautiful, production-quality **frontend-only Next.js (App Router) + TypeScript + Tailwind CSS 4** portfolio for **CHHEA CHHOUY**, based on the authoritative CV content in sections A–F and the MVP requirements above. Include the owner's original portrait extracted from the CV, a safely redacted/curated public CV, modern blue/navy editorial visual identity, polished responsive homepage, light/dark theme persistence, sticky accessible navigation, searchable project explorer with category filters, eight CV-based dynamic project pages, two actual work experiences, skills from the CV, education/workshops, and genuine email/LinkedIn/GitHub links. Give accurate project roles and dates; display no invented claims, statistics, testimonials or confidential employer screenshots. Include README and strongly typed editable `src/data/portfolio.ts`. Do not implement a backend, APIs, database, admin, authentication, CMS, or pretend that static email forms transmit messages. Make all UI interactions functional and perform production build checks. Use the files in `chhea-portfolio-frontend/` as the initial implementation.


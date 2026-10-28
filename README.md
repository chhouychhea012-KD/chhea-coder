# Chhea Chhouy · Full-Stack Developer Portfolio

A complete **frontend-only** portfolio built with Next.js App Router, TypeScript and Tailwind CSS 4. Portfolio information comes from the owner's CV, with privacy-sensitive details excluded from the published pages.

## Run

```bash
npm install
npm run dev
```

Visit http://localhost:3000. To production-build: `npm run lint && npm run typecheck && npm run build`.

## Features

- Responsive modern dark/light interface and original portrait from the supplied CV
- CV-based about, skills, work experience, education and workshop information
- Eight CV-supported projects and individual project detail pages
- Project search, category filters, empty state and navigation
- Downloadable **privacy-safe public CV** (`public/resume.pdf`), with residence and third-party reference contact details omitted
- Live `mailto:` contact and Copy Email with feedback; real GitHub and LinkedIn links
- Project repository links where supplied in CV
- Accessible mobile navigation, theme preference storage, reduced-motion styling
- Static generation and route-level SEO; **no backend, auth, database, or API**

## Edit content

All content is in `src/data/portfolio.ts`. Real screenshots (when authorized) can be added to `public/images`, and project case studies edited without touching component logic. The abstract case-study art is intentionally illustrative, not a screenshot of confidential work.

Set `NEXT_PUBLIC_SITE_URL=https://your-domain.example` on deployment for the sitemap. No environment secrets are required.

## Privacy and publishing checks

The supplied original CV includes a precise home address and other people's reference contact details. This website excludes them and uses a curated public CV instead. Confirm employer naming, public project descriptions, any live/demo links, and permission for company/project screenshots before deployment. Professional projects are not linked to private repositories.

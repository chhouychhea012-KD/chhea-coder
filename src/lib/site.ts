const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const SITE_URL = configuredSiteUrl || "https://chheacoder.pro";
export const SITE_NAME = "Chhea Chhouy | Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Portfolio of Chhea Chhouy, a Full-Stack Developer in Cambodia building reliable web applications, internal platforms, APIs, and cloud-ready software.";

export const SEO_KEYWORDS = [
  "Chhea Chhouy",
  "Chhea Coder",
  "Full-Stack Developer Cambodia",
  "Full-Stack Developer Phnom Penh",
  "Web Developer Cambodia",
  "Next.js Developer",
  "React Developer",
  "Software Engineer Cambodia",
  "Web Application Developer",
];

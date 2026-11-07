const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const SITE_URL = configuredSiteUrl || "https://chheacoder.pro";
export const SITE_NAME = "Chhea Coder | Chhea Chhouy, Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Chhea Coder is the portfolio of Chhea Chhouy, a Full-Stack Developer in Cambodia building reliable web applications, internal platforms, APIs, and cloud-ready software.";

export const SEO_KEYWORDS = [
  "Chhea Chhouy",
  "Chhea Coder",
  "Chheacoder",
  "ឈយ ឈា",
  "Chhea Coder កម្ពុជា",
  "អ្នកអភិវឌ្ឍន៍ Full-Stack",
  "អ្នកអភិវឌ្ឍន៍វេបសាយ កម្ពុជា",
  "អ្នកអភិវឌ្ឍន៍កម្មវិធី ភ្នំពេញ",
  "Full-Stack Developer Cambodia",
  "Full-Stack Developer Phnom Penh",
  "Web Developer Cambodia",
  "Next.js Developer",
  "React Developer",
  "Software Engineer Cambodia",
  "Web Application Developer",
];

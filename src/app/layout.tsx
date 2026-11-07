import type { Metadata, Viewport } from "next";
import { profile, text } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/skip-link";
import { LanguageProvider } from "@/components/language-provider";
import { SEO_KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${profile.name}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SEO_KEYWORDS,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "Technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: "km_KH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: SITE_DESCRIPTION },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080c15" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              alternateName: profile.khmerName,
              url: SITE_URL,
              image: `${SITE_URL}${profile.portraitUrl}`,
              jobTitle: text(profile.title, "en"),
              description: SITE_DESCRIPTION,
              email: profile.email,
              sameAs: profile.socials.map((social) => social.href),
              address: { "@type": "PostalAddress", addressLocality: "Phnom Penh", addressCountry: "KH" },
              knowsAbout: SEO_KEYWORDS.slice(4),
            }),
          }}
        />
        <LanguageProvider><SkipLink /><div className="site-shell"><SiteHeader />{children}<SiteFooter /></div></LanguageProvider>
      </body>
    </html>
  );
}

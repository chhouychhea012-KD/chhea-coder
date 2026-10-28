import type { Metadata, Viewport } from "next";
import { profile, text } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/skip-link";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${profile.name} — ${text(profile.title, "en")}`, template: `%s | ${profile.name}` },
  description: text(profile.tagline, "en"),
  openGraph: { title: `${profile.name} — ${text(profile.title, "en")}`, description: text(profile.tagline, "en"), type: "website" },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080c15" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider><SkipLink /><div className="site-shell"><SiteHeader />{children}<SiteFooter /></div></LanguageProvider>
      </body>
    </html>
  );
}

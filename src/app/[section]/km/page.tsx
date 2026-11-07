import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import { isPortfolioSection, portfolioSections } from "@/lib/routes";

type Props = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return portfolioSections.map((section) => ({ section }));
}

export default async function KhmerPortfolioSectionPage({ params }: Props) {
  const { section } = await params;
  if (!isPortfolioSection(section)) notFound();

  return <HomePage section={section} />;
}

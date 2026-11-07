import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects, text } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? {
        title: text(project.title, "km"),
        description: text(project.description, "km"),
        alternates: { canonical: `/projects/${project.slug}/km`, languages: { "en-US": `/projects/${project.slug}`, "km-KH": `/projects/${project.slug}/km` } },
        openGraph: { title: text(project.title, "km"), description: text(project.description, "km"), url: `${SITE_URL}/projects/${project.slug}/km`, locale: "km_KH", alternateLocale: "en_US", type: "website" },
      }
    : { title: "រកមិនឃើញគម្រោង" };
}

export default async function KhmerProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  return <ProjectDetail project={project} nextProject={projects[(index + 1) % projects.length]} index={index} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects, text } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project
    ? {
        title: text(project.title, "en"),
        description: text(project.description, "en"),
        keywords: project.technologies,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
          title: text(project.title, "en"),
          description: text(project.description, "en"),
          url: `${SITE_URL}/projects/${project.slug}`,
          siteName: "Chhea Chhouy | Full-Stack Developer",
          locale: "en_US",
          type: "website",
        },
      }
    : { title: "Project not found" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];
  return <ProjectDetail project={project} nextProject={nextProject} index={index} />;
}

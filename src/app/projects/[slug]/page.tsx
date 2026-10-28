import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects, text } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project
    ? { title: text(project.title, "en"), description: text(project.description, "en"), openGraph: { title: text(project.title, "en"), description: text(project.description, "en") } }
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

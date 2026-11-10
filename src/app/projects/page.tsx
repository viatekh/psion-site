import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { getProjects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Light, LED, sound and video work for festivals, clubs and artists.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="flex flex-1 flex-col">
      <TopNav />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}

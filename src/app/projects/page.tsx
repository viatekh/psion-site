import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Lighting, LED and show design work for festivals, clubs and live events.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}

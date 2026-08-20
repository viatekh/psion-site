import { TopNav } from "@/components/TopNav";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}

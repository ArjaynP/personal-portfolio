import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Projects"
        title="All projects"
        description="A snapshot of AI/ML builds, systems work, and product-facing features."
      />
      <div className="grid grid-auto-fill gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

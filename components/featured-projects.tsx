import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of my most impactful work</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:underline">
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
        <Link
          href="/projects"
          className="md:hidden flex items-center justify-center gap-2 text-primary hover:underline mt-8"
        >
          View all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

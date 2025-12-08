import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata = {
  title: "Projects | Your Name",
  description: "A collection of AI/ML and software engineering projects",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of my work in AI, machine learning, and software engineering. Each project
              represents a unique challenge and learning experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

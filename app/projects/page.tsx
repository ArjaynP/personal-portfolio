import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Youtube, FileText } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Arjayn Piratheeparatnam",
  description: "Explore my portfolio of AI/ML and software engineering projects.",
};

export default function ProjectsPage() {
  // Group projects by category
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A collection of my work in AI/ML, data engineering, and software development.
                Each project represents a unique challenge and solution in the tech space.
              </p>
            </div>

            {/* Filter by category */}
            <div className="flex flex-wrap gap-2 mt-8">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                All
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group relative flex flex-col rounded-lg border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                    {project.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority={project.featured}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-mono text-primary/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Category Badge */}
                    <Badge variant="secondary" className="absolute top-4 left-4">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h2 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0">
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 5 && (
                        <Badge variant="outline" className="text-xs font-normal">
                          +{project.techStack.length - 5}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-border/50">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.links.youtube && (
                        <a
                          href={project.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Youtube className="h-4 w-4" />
                          <span>Video</span>
                        </a>
                      )}
                      {project.links.paper && (
                        <a
                          href={project.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <FileText className="h-4 w-4" />
                          <span>Paper</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

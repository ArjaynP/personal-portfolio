import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my most impactful work in AI/ML and software engineering.
            </p>
          </div>
          <Button asChild variant="ghost" className="gap-2 self-start sm:self-auto">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    priority={project.featured}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-mono text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 text-xs"
                >
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs font-normal">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 relative z-10">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.youtube && (
                    <a
                      href={project.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="YouTube demo"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

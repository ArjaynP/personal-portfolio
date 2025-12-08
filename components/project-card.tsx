import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Youtube, FileText, Award } from "lucide-react"
import type { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden bg-card hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="Watch demo video"
            >
              <Youtube className="w-5 h-5" />
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="Read paper"
            >
              <FileText className="w-5 h-5" />
            </a>
          )}
          {project.links.devpost && (
            <a
              href={project.links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="View on Devpost"
            >
              <Award className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
        {featured && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Key Challenges Solved</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.challengesSolved.slice(0, 2).map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="line-clamp-1">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href={`/projects/${project.id}`} className="inline-block mt-4 text-sm text-primary hover:underline">
          View Details →
        </Link>
      </CardContent>
    </Card>
  )
}

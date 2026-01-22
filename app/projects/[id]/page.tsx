import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Youtube, FileText, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Arjayn Piratheeparatnam`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Back Navigation */}
        <div className="mx-auto max-w-4xl px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 -ml-4">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-6">
              {/* Category & Featured Badge */}
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{project.category}</Badge>
                {project.featured && (
                  <Badge className="bg-primary text-primary-foreground gap-1">
                    <Award className="h-3 w-3" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                {project.title}
              </h1>

              {/* Short Description */}
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild className="gap-2">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.links.youtube && (
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      Watch Demo
                    </a>
                  </Button>
                )}
                {project.links.paper && (
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      Read Paper
                    </a>
                  </Button>
                )}
                {project.links.devpost && (
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <a href={project.links.devpost} target="_blank" rel="noopener noreferrer">
                      <Award className="h-4 w-4" />
                      Devpost
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="aspect-video rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center">
              <div className="text-8xl font-mono text-primary/20">{project.title.charAt(0)}</div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-12">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Problem Statement */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Problem Statement</h2>
                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-1.5 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Architecture Diagram Placeholder */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Architecture</h2>
                <div className="aspect-[2/1] rounded-lg bg-card border border-border/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2 font-mono opacity-50">{"[Architecture Diagram]"}</div>
                    <p className="text-sm">System architecture visualization</p>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.challenges.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-card border border-border/50 space-y-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-medium">
                          C
                        </span>
                        <div>
                          <p className="font-medium">Challenge</p>
                          <p className="text-muted-foreground text-sm">{item.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                          S
                        </span>
                        <div>
                          <p className="font-medium">Solution</p>
                          <p className="text-muted-foreground text-sm">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Learned */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">What I Learned</h2>
                <ul className="space-y-2">
                  {project.whatYouLearned.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Goals */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Future Goals</h2>
                <ul className="space-y-2">
                  {project.futureGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">→</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

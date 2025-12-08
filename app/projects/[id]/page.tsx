import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Youtube, FileText, Award, CheckCircle, Lightbulb, Target } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Your Name`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.fullDescription}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.youtube && (
                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-4 h-4" />
                    Demo Video
                  </a>
                </Button>
              )}
              {project.links.paper && (
                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                  <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" />
                    Paper
                  </a>
                </Button>
              )}
              {project.links.devpost && (
                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                  <a href={project.links.devpost} target="_blank" rel="noopener noreferrer">
                    <Award className="w-4 h-4" />
                    Devpost
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Thumbnail */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border mb-12">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Tech Stack */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
            </CardContent>
          </Card>

          {/* What You Built */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">What I Built</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.whatYouBuilt}</p>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.architectureDescription}</p>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-secondary/50">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Architecture diagram"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </CardContent>
          </Card>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Challenges Solved */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Challenges Solved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challengesSolved.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Lessons Learned */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                What I Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Future Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.futureGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

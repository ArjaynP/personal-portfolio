import { experiences } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <p className="text-muted-foreground mb-12">My professional journey in tech</p>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <span className="text-sm text-muted-foreground">
                  {experience.startDate} — {experience.endDate}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-primary">{experience.company}</span>
                )}
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">{experience.location}</span>
              </div>
              <p className="text-muted-foreground mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey in AI/ML and software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1 md:-translate-x-1.5 top-2" />

                {/* Date - visible on one side */}
                <div
                  className={`hidden md:flex items-start ${
                    index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12 order-1"
                  }`}
                >
                  <span className="text-sm font-medium text-primary">{exp.duration}</span>
                </div>

                {/* Content card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Mobile date */}
                    <span className="md:hidden text-sm font-medium text-primary">
                      {exp.duration}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`space-y-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "" : "md:ml-auto"
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

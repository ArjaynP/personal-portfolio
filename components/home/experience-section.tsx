import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { Calendar, Briefcase, TrendingUp } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions across AI/ML, robotics, and full-stack development
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 hover:-translate-y-1">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="mt-1">
                          {exp.companyEmoji ? (
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                              {exp.companyEmoji}
                            </div>
                          ) : exp.companyLogo ? (
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-border flex-shrink-0 group-hover:border-primary/50 transition-colors">
                              <Image
                                src={exp.companyLogo}
                                alt={`${exp.company} logo`}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-base font-medium text-muted-foreground">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg border border-border/50">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-sm">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-foreground font-medium transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Index number watermark */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-muted/5 group-hover:text-primary/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

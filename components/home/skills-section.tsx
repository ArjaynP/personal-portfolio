import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { Code2, Cpu, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    key: "languages" as const,
    label: "Languages",
    icon: Code2,
    description: "Programming languages I work with",
  },
  {
    key: "ml" as const,
    label: "ML Frameworks",
    icon: Cpu,
    description: "Machine learning frameworks and libraries",
  },
  {
    key: "frameworks" as const,
    label: "Frameworks",
    icon: Layers,
    description: "Web and Application frameworks",
  },
  {
    key: "tools" as const,
    label: "Developer Tools",
    icon: Wrench,
    description: "Tools that enhance my development workflow",
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            Technologies and tools that I use.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.key);
            const Icon = category.icon;

            return (
              <div
                key={category.key}
                className="rounded-lg border border-border/50 bg-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.label}</h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">{category.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {categorySkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

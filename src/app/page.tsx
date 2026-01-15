import Image from "next/image";
import Link from "next/link";
import { personalProfile } from "@/data/personal";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/30 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-teal-200/80">
            {personalProfile.title}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {personalProfile.name}
          </h1>
          <p className="max-w-2xl text-lg text-slate-100/90">
            {personalProfile.intro}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full bg-white/10 px-4 py-2 font-semibold ring-1 ring-white/15">
              Research-minded, product-driven
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 font-semibold ring-1 ring-white/15">
              Systems + UX partner
            </span>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/projects"
              className="rounded-full bg-teal-400 px-5 py-3 text-slate-900 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              Contact Me
            </Link>
            <Link
              href={personalProfile.resume}
              className="rounded-full border border-white/15 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal-400/20 via-indigo-400/20 to-pink-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-slate-900/40">
            <Image
              src="/headshot.png"
              alt="Portrait"
              width={420}
              height={420}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Impactful builds and ML systems"
          description="Selected projects that blend modeling rigor with production reliability."
        />
        <div className="grid grid-auto-fill gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="text-sm font-semibold text-teal-200 transition hover:text-white"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <section id="experience" className="space-y-6">
        <SectionHeader
          eyebrow="Experience"
          title="Roles where I shipped ML products"
          description="From prototype to production: leading ML platforms, shipping features, and partnering across engineering and product."
        />
        <ExperienceTimeline />
      </section>

      <section id="skills" className="space-y-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies That I Use"
          description="What I use to deliver robust AI/ML systems and full-stack applications."
        />
        <SkillsGrid />
      </section>
    </div>
  );
}

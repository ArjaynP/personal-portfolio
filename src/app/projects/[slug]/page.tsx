import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Project`,
    description: project.tagline,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <div className="space-y-10">
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/25">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200/80">
          <span>{project?.year}</span>
          <span className="h-px w-10 bg-white/30" />
          <span>Overview</span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3 md:max-w-3xl">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              {project?.title}
            </h1>
            <p className="text-lg text-slate-200/90">{project?.tagline}</p>
            <p className="text-base text-slate-200/80">{project?.description}</p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.14em] text-teal-200/80">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
                {project?.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 md:w-72">
            <Image
              src={project?.screenshots[0] ?? "/projects/neuratrail-thumb.svg"}
              alt={project?.title ?? "Project visual"}
              width={640}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          {project?.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Problem"
            title="What needed to be solved"
            description={project?.problem ?? ""}
          />
          <SectionHeader
            eyebrow="Solution"
            title="Approach and system"
            description={project?.overview ?? ""}
          />
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Key challenges</p>
            <ul className="grid list-disc gap-2 pl-5 text-sm text-slate-200/90">
              {project?.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">What I built</p>
            <ul className="grid list-disc gap-2 pl-5 text-sm text-slate-200/90">
              {project?.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <Image
              src={project?.screenshots[1] ?? "/architecture-template.svg"}
              alt={`${project?.title} architecture`}
              width={900}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-300">{project?.architecture}</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/20 lg:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">What I learned</h3>
          <ul className="grid list-disc gap-2 pl-5 text-sm text-slate-200/90">
            {project?.learnings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">What I would improve next</h3>
          <ul className="grid list-disc gap-2 pl-5 text-sm text-slate-200/90">
            {project?.improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

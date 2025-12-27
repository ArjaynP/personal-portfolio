import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-100 ring-1 ring-inset ring-white/15">
      {label}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const primaryLinks = project.links.filter((link) =>
    ["GitHub", "Live Demo"].includes(link.label)
  );
  const fallbackLinks = project.links.slice(0, 2);
  const topLinks = primaryLinks.length ? primaryLinks : fallbackLinks;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <Image
          src={project.screenshots[0] ?? "/projects/govai.png"}
          alt={`${project.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.featured}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 text-slate-100">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-slate-300">{project.tagline}</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200 whitespace-nowrap">
            {project.year}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-teal-400 px-4 py-2 text-slate-900 transition hover:-translate-y-0.5 hover:bg-teal-300"
          >
            View details
          </Link>
          <div className="flex flex-wrap items-center gap-2 text-xs text-teal-100">
            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 px-3 py-1 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-200/90">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {project.tech.length > 4 && <TechBadge label={`+${project.tech.length - 4}`} />}
        </div>
        <div className="grid gap-2 text-xs text-slate-200/90">
          <div>
            <p className="font-semibold text-white">Key challenges</p>
            <ul className="list-disc pl-4">
              {project.challenges.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">What I built</p>
            <ul className="list-disc pl-4">
              {project.contributions.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

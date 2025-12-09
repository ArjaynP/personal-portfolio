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
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(248,113,113,0.28),transparent_30%)]" />
        <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 text-slate-100">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-slate-300">{project.tagline}</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            {project.year}
          </span>
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
        <div className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-teal-200 transition hover:text-white"
          >
            View details →
          </Link>
          <div className="flex items-center gap-2 text-xs text-teal-100">
            {project.links.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

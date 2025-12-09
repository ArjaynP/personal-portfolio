import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div
          key={`${exp.company}-${exp.role}`}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-inner shadow-slate-900/20"
        >
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-teal-200/80">
                {exp.timeframe}
              </p>
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-300">{exp.company}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
              {exp.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-200/90">{exp.summary}</p>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-slate-200/90">
            {exp.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

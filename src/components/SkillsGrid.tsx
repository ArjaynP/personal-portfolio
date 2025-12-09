import { skillGroups } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 shadow-inner shadow-slate-900/10"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-teal-200/80">
            {group.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/5 px-3 py-1 font-semibold text-slate-200 ring-1 ring-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

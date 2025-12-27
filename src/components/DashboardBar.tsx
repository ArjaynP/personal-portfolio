import { personalProfile } from "@/data/personal";

const dashboardStats = [
  { label: "Focus", value: "AI/ML" },
  { label: "Availability", value: personalProfile.availability },
  { label: "Location", value: personalProfile.location },
  { label: "Primary Stack", value: "Python • TypeScript" },
];

export function DashboardBar() {
  return (
    <section className="mx-auto mt-4 max-w-6xl px-6">
      <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-slate-900/10 backdrop-blur md:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100"
          >
            <span className="text-xs uppercase tracking-[0.08em] text-slate-400">
              {stat.label}
            </span>
            <span className="font-semibold text-white">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

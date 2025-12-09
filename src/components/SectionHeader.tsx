export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-200/80">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm text-slate-200/80">{description}</p>
      ) : null}
    </div>
  );
}

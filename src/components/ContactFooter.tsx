import Link from "next/link";
import { personalProfile } from "@/data/personal";

const contacts = [
  { label: "Email", href: `mailto:${personalProfile.email}` },
  { label: "GitHub", href: personalProfile.github },
  { label: "LinkedIn", href: personalProfile.linkedin },
  { label: "Instagram", href: personalProfile.instagram },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/70 py-10 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-teal-200/80">Contact</p>
          <p className="text-lg font-semibold text-white">Let\'s collaborate</p>
          <p className="max-w-xl text-sm text-slate-300">
            I enjoy shipping ML features end-to-end—research, data, infra, and product polish.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          {contacts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

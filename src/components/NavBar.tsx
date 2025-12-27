import Link from "next/link";
import { personalProfile } from "@/data/personal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-900/80 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {personalProfile.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-teal-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href={personalProfile.resume} target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 font-semibold transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
          >
            Resume
          </Link>
          <Link
            href={`mailto:${personalProfile.email}`}
            className="hidden rounded-full bg-teal-400 px-4 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-teal-300 sm:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

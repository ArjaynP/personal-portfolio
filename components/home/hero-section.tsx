import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-primary">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href="/#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image / Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem]">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border/50 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              
              {/* Center content */}
              <div className="absolute inset-6 rounded-full bg-card flex items-center justify-center border border-border overflow-hidden">
                <Image
                    src="/top_pick.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}

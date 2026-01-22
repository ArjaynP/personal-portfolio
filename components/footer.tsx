import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"I'm always open to discussing new projects, opportunities, or just having a chat about AI/ML."}
            </p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              <Mail className="h-4 w-4" />
              {socialLinks.email}
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href={personalInfo.resumeUrl} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resume
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

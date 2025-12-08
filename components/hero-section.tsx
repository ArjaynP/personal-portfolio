import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { ArrowRight, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">{personalInfo.name}</h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">{personalInfo.title}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/projects">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={personalInfo.headshot || "/placeholder.svg"}
              alt={`${personalInfo.name} headshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

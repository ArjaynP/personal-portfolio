import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}

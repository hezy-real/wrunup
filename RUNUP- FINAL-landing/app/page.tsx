import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <HeroSection />
      <div id="solutions">
        <ServicesSection />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="blog">
        <BlogPreviewSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}

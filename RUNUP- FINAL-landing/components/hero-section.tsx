"use client"

import { Button } from "@/components/ui/button"
import { useCalendly } from "./calendly-integration"

export function HeroSection() {
  const { openCalendly } = useCalendly()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up tracking-tight bg-gradient-to-r from-[#030440] to-[#1B1C4E] bg-clip-text text-transparent">
          Growth systems that help you scale faster
        </h1>
        <p className="text-xl md:text-2xl text-[#6B6B6B] mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          Streamline your workflows and reduce manual work with AI-powered automation solutions designed for modern
          businesses.
        </p>
        <div className="animate-fade-in-up animate-delay-400">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={openCalendly}
            aria-label="Schedule a consultation to discover automation solutions for your business"
          >
            Ready to discover?
          </Button>
        </div>
      </div>
    </section>
  )
}

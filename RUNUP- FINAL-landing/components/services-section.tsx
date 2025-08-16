"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Lead Generation",
    description: "AI Cold Email Systems, Application Systems, Content Systems.",
    isDark: true,
  },
  {
    title: "AI Automated Fulfillment, Onboarding Systems",
    description: "Automation tools for streamlined task tracking, reporting, and deadlines.",
    isDark: false,
  },
  {
    title: "Sales Administration",
    description: "Automated CRM updates, deal tracking, and reporting.",
    isDark: true,
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#030440] to-[#1B1C4E] bg-clip-text text-transparent">
          Our solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transform transition-all duration-700 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                className={`h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  service.isDark
                    ? "bg-[#1E2A38]" // Updated dark boxes to deep desaturated blue-gray
                    : "bg-[#FAFBFC]" // Updated white box to softer white
                }`}
              >
                <CardContent className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      service.isDark
                        ? "text-white" // Pure white headings on dark boxes
                        : "text-[#0D1B2A]" // Dark blue headings on white box
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${
                      service.isDark
                        ? "text-[#C9D1D9]" // Light gray body text on dark boxes
                        : "text-[#4B5563]" // Medium gray body text on white box
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, DollarSign, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Automate repetitive tasks and reduce processing time by up to 90%",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Cut operational costs while increasing productivity and efficiency",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Grow your business without proportionally increasing your workload",
  },
]

export function BenefitsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Why Choose RunUp?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center transform transition-all duration-700 ease-out ${
                visibleItems[index] ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

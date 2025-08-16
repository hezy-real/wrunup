import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "RunUp transformed our lead generation process. We're now generating 3x more qualified leads with half the manual effort.",
  },
  {
    quote:
      "The AI Automated Fulfillment, Onboarding Systems has been a game-changer. Our team productivity increased by 150% in just 3 months.",
  },
  {
    quote:
      "Sales administration used to take hours daily. Now it's completely automated, and our conversion rates have improved significantly.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

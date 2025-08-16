import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function BlogHeader() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="group bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#030440] to-[#1B1C4E] bg-clip-text text-transparent">
              RunUp Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover insights, strategies, and tips to automate your business processes and scale efficiently.
          </p>
        </div>
      </div>
    </section>
  )
}

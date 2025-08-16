"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Automation Can Transform Your Lead Generation Process",
    description:
      "Discover how artificial intelligence can revolutionize your lead generation strategy, increase conversion rates, and reduce manual work by up to 80%.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Lead Generation",
    slug: "ai-automation-lead-generation",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Onboarding Systems That Actually Work",
    description:
      "Learn how to create automated onboarding workflows that improve customer satisfaction while reducing your team's workload.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Onboarding",
    slug: "scalable-onboarding-systems",
    featured: false,
  },
  {
    id: 3,
    title: "The Complete Guide to Project Management Automation",
    description:
      "From task assignment to progress tracking, discover how to automate your project management processes for maximum efficiency.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Project Management",
    slug: "project-management-automation-guide",
    featured: true,
  },
  {
    id: 4,
    title: "ROI Calculator: Measuring the Impact of Business Automation",
    description:
      "Use our proven framework to calculate the return on investment for your automation initiatives and justify your technology investments.",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Strategy",
    slug: "automation-roi-calculator",
    featured: false,
  },
  {
    id: 5,
    title: "Common Automation Mistakes (And How to Avoid Them)",
    description:
      "Learn from the most frequent pitfalls businesses encounter when implementing automation solutions and how to sidestep these costly errors.",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Best Practices",
    slug: "common-automation-mistakes",
    featured: false,
  },
  {
    id: 6,
    title: "Integration Strategies: Connecting Your Business Tools Seamlessly",
    description:
      "Master the art of tool integration to create a unified workflow that eliminates data silos and improves team collaboration.",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Integration",
    slug: "business-tool-integration-strategies",
    featured: true,
  },
]

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <Card
              key={post.id}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                post.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={post.featured ? "default" : "secondary"}>{post.category}</Badge>
                  {post.featured && (
                    <Badge variant="outline" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">{post.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Button className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMorePosts} variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Ways AI Automation Can Transform Your Business",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented growth.",
    date: "December 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "The Future of Workflow Automation",
    excerpt: "Explore emerging trends in automation technology and what they mean for your business strategy.",
    date: "December 10, 2024",
    readTime: "7 min read",
  },
  {
    title: "ROI Calculator: Measuring Automation Success",
    excerpt: "Learn how to calculate and maximize the return on investment from your automation initiatives.",
    date: "December 5, 2024",
    readTime: "4 min read",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

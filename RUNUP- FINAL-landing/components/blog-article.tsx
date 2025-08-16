import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  date: string
  readTime: string
  category: string
  content: string
}

interface BlogArticleProps {
  post: BlogPost
}

export function BlogArticle({ post }: BlogArticleProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <article className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="group bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <header className="mb-12">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#030440] to-[#1B1C4E] bg-clip-text text-transparent">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-8 bg-card rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
          <p className="text-muted-foreground mb-6">
            Discover how RunUp can help you implement these automation strategies and scale your operations efficiently.
          </p>
          <Link href="/#contact">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

import { Navigation } from "@/components/navigation"
import { BlogHeader } from "@/components/blog-header"
import { BlogGrid } from "@/components/blog-grid"

export const metadata = {
  title: "Blog - RunUp | Business Automation Insights & Tips",
  description:
    "Discover the latest insights, tips, and strategies for business automation, workflow optimization, and scaling your operations with RunUp's expert guidance.",
  keywords:
    "business automation blog, workflow optimization tips, automation strategies, business scaling insights, RunUp blog, AI automation guides, process improvement",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "RunUp Blog - Business Automation Insights & Expert Tips",
    description:
      "Expert insights on business automation, workflow optimization, and scaling strategies. Learn from industry professionals.",
    url: "https://runup.com/blog",
    siteName: "RunUp",
    images: [
      {
        url: "/blog-og-image.png",
        width: 1200,
        height: 630,
        alt: "RunUp Blog - Business Automation Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunUp Blog - Business Automation Insights",
    description: "Expert tips and strategies for business automation and workflow optimization",
    images: ["/blog-twitter-image.jpg"],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <BlogHeader />
      <BlogGrid />
    </div>
  )
}

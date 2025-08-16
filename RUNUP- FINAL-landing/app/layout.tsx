import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { CalendlyProvider } from "@/components/calendly-integration"

export const metadata: Metadata = {
  title: "RunUp - Business Automation Solutions | Workflow Automation for Companies",
  description:
    "Growth systems that help you scale faster. RunUp provides AI-powered automation solutions for lead generation, project management, and sales administration to streamline workflows and reduce manual work.",
  keywords:
    "business automation solutions, workflow automation for companies, AI automation, lead generation automation, project management automation, sales automation, business process automation, workflow optimization, automation consulting",
  generator: "v0.app",
  metadataBase: new URL("https://runup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RunUp - Business Automation Solutions | Scale Faster with AI",
    description:
      "Transform your business with AI-powered automation solutions. Streamline workflows, boost efficiency, and scale without extra staff.",
    url: "https://runup.com",
    siteName: "RunUp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RunUp Business Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunUp - Business Automation Solutions",
    description: "Growth systems that help you scale faster with AI automation",
    images: ["/twitter-image.png"],
    creator: "@runup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RunUp",
              description: "Business automation solutions and AI-powered workflow optimization",
              url: "https://runup.com",
              logo: "https://runup.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://linkedin.com/company/runup", "https://twitter.com/runup"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Business Process Automation",
                  description: "AI-powered automation solutions for lead generation and workflow optimization",
                },
                {
                  "@type": "Service",
                  name: "Workflow Optimization",
                  description: "Streamline business operations and reduce manual work",
                },
              ],
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <CalendlyProvider>{children}</CalendlyProvider>
      </body>
    </html>
  )
}

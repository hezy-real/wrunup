"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useCalendly } from "./calendly-integration"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const { openCalendly } = useCalendly()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isOnBlogPage = pathname?.startsWith("/blog")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isOnBlogPage) {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#030440] to-[#1B1C4E] bg-clip-text text-transparent cursor-pointer">
                RunUp
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-gray-700 hover:text-[#030440] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-[#030440] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-[#030440] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Testimonials
              </button>
              {isOnBlogPage ? (
                <Link
                  href="/#blog"
                  className="text-gray-700 hover:text-[#030440] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-700 hover:text-[#030440] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </button>
              )}
              <button
                onClick={openCalendly}
                className="bg-[#030440] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1B1C4E] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={openCalendly}
              className="bg-[#030440] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1B1C4E] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

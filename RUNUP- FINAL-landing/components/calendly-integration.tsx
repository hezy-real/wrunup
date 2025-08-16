"use client"

import type React from "react"

import { useEffect } from "react"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function useCalendly() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/tabra/30min",
      })
    } else {
      // Fallback to opening in new tab if script hasn't loaded yet
      window.open("https://calendly.com/tabra/30min", "_blank")
    }
  }

  return { openCalendly }
}

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
    }
  }, [])

  return <>{children}</>
}

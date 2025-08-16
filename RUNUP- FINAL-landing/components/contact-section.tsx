"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCalendly } from "./calendly-integration"

export function ContactSection() {
  const { openCalendly } = useCalendly()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error sending your message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get in touch with our automation experts and start your transformation today.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold mb-12 shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={openCalendly}
          >
            Choose a time
          </Button>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Or Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your automation needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

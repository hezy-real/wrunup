import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    console.log("Contact form submission:", {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    // For now, just return success
    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

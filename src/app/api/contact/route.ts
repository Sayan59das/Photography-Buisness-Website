import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations/contact"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { firstName, lastName, email, phone, eventDate, location, message } = parsed.data

  try {
    await prisma.booking.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        phone: phone || null,
        eventDate: eventDate ? new Date(eventDate) : null,
        location: location || null,
        message,
      },
    })
  } catch (error) {
    console.error("[contact] failed to save booking inquiry", error)
    return NextResponse.json(
      { error: "We couldn't save your inquiry right now. Please try again in a moment." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}

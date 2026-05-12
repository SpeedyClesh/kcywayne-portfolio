import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all subscribers (admin only)
export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      where: { active: true },
      orderBy: { subscribedAt: 'desc' },
    })
    return NextResponse.json(subscribers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 })
  }
}

// POST subscribe with telegram handle
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { telegramHandle } = body

    if (!telegramHandle) {
      return NextResponse.json({ error: 'Telegram handle is required' }, { status: 400 })
    }

    const handle = telegramHandle.startsWith('@')
      ? telegramHandle.toLowerCase()
      : `@${telegramHandle.toLowerCase()}`

    const existing = await prisma.subscriber.findUnique({
      where: { telegramHandle: handle },
    })

    if (existing) {
      if (existing.active) {
        return NextResponse.json({ error: 'Already subscribed!' }, { status: 409 })
      }
      // Reactivate if they unsubscribed before
      const updated = await prisma.subscriber.update({
        where: { telegramHandle: handle },
        data: { active: true },
      })
      return NextResponse.json({ message: 'Welcome back! Resubscribed successfully.', subscriber: updated })
    }

    const subscriber = await prisma.subscriber.create({
      data: { telegramHandle: handle },
    })

    return NextResponse.json({ message: 'Subscribed successfully!', subscriber }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}

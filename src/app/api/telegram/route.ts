import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { postId } = body

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    const post = await prisma.post.findUnique({ where: { id: postId } })
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const channelId = process.env.TELEGRAM_CHANNEL_ID

    if (!botToken || !channelId) {
      return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 })
    }

    const message = `
🔥 *New Insight from Kcywayne*

*${post.title}*

${post.excerpt || post.content.slice(0, 200)}...

🏷️ ${post.tag} | 💎 Built on TON

👉 Read more on kcywayne.com
    `.trim()

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: channelId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    const telegramData = await telegramRes.json()

    if (!telegramData.ok) {
      return NextResponse.json({ error: 'Telegram send failed', details: telegramData }, { status: 500 })
    }

    return NextResponse.json({ message: 'Notification sent!', telegram: telegramData })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all published posts (public)
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST create new post (admin only)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, content, excerpt, tag, published } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        tag: tag || 'General',
        published: published || false,
        publishedAt: published ? new Date() : null,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}

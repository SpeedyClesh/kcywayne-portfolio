import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@kcywayne.com'
  const password = process.env.ADMIN_PASSWORD || 'Kcywayne@2025'

  const existing = await prisma.admin.findUnique({ where: { email } })
  if (existing) {
    console.log('Admin already exists')
    return
  }

  const hashed = await bcrypt.hash(password, 12)
  const admin = await prisma.admin.create({
    data: { email, password: hashed },
  })
  console.log('Admin created:', admin.email)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

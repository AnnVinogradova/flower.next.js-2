import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
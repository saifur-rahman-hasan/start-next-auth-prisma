// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
export default async function handler(req, res) {

  const data = await prisma.user.findMany({
    include: {
      roles: true
    }
  })

  res.status(200).json({ data: data })
}

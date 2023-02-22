import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {

    //create post
    try {
        const data = await prisma.post.findMany({
            include: {
                user: true,
                Comment: true,
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(403).json({error: "Um erro ocorreu buscando as postagens!"})
    }
  }
}

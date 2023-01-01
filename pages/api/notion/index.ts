import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from './notion'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notionService = new NotionService()
  if (req.method === 'GET') {
    try {
      const category = req.query.category as string
      const database = await notionService.getAll(category)
      res.status(200).json(database)
    } catch (error) {
      res.status(404).json({ message: 'error happened' })
      console.error(error)
    }
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from './notion'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notionService = new NotionService()
  const id = req.query.id as string

  if (req.method === 'GET') {
    try {
      const blockData = await notionService.getAllBlock(id)

      res.status(200).json(blockData)
    } catch (error) {
      res.status(404).json({ message: 'error happened' })
      console.error(error)
    }
  }
}

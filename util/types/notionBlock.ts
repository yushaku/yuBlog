import { Richtext } from './notion'

export interface NotionBlocks {
  object: string
  results: NotionBlock[]
  next_cursor?: string
  has_more: boolean
}

interface NotionBlock {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  has_children: boolean
  type: string
  paragraph?: Paragraph
}

interface Paragraph {
  text: Richtext[]
}

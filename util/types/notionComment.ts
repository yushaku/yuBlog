import { CreatedBy, Richtext, Parent } from './notion'

export interface NotionComment {
  object: 'comment'
  id: string
  parent: Parent
  discussion_id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  rich_text: Richtext[]
}

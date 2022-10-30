import { BlogPost, ResPost } from '@/util/types/notion'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@notionhq/client'

export default class NotionService {
  client: Client
  database = process.env.NOTION_DATABASE ?? ''

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_SECRET })
  }

  private postTransformer(page: ResPost): BlogPost {
    let cover = page.cover.type
    switch (cover) {
      case 'file':
        cover = page.cover.file
        break
      case 'external':
        cover = page.cover.external.url
        break
      default:
        cover = ''
    }

    return {
      id: page.id,
      tags: page.properties.Tags.multi_select,
      title: page.properties.Name.title[0].text.content,
      date: page.created_time,
      image: cover,
      author: page.created_by.id,
    }
  }

  async getAll(category = 'article'): Promise<BlogPost[]> {
    const response = await this.client.databases.query({
      database_id: this.database,
      filter: {
        and: [
          {
            property: 'status',
            select: {
              equals: 'done',
            },
          },
          {
            property: 'category',
            select: {
              equals: category,
            },
          },
        ],
      },
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => this.postTransformer(page))
  }

  async getSingleBlogPost(PageId: string): Promise<any> {
    return await this.client.pages.retrieve({
      page_id: PageId,
    })
  }

  async getOne(blockId: string) {
    return await this.client.blocks.retrieve({
      block_id: blockId,
    })
  }

  async getPostDetailChild(blockId: string) {
    return await this.client.blocks.children.list({
      block_id: blockId,
    })
  }

  async getBlocks(blockId: string) {
    const blocks = []
    let cursor
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { results, next_cursor }: any = await this.client.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      })
      blocks.push(...results)
      if (!next_cursor) {
        break
      }
      cursor = next_cursor
    }
    return blocks
  }
}

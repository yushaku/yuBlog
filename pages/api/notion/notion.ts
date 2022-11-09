/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogPost, ResPost } from '@/util/types'
import { Client } from '@notionhq/client'
import moment from 'moment'

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
      date: moment(page.created_time).format('LL'),
      image: cover,
      author: page.created_by.id,
    }
  }

  async getAll(
    category = 'article',
    startCursor?: string,
    pageSize = 10,
  ): Promise<{
    posts: BlogPost[]
    next_cursor: string | null
    has_more: boolean
  }> {
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
      start_cursor: startCursor,
      page_size: pageSize,
    })

    return {
      posts: response.results.map((page: any) => this.postTransformer(page)),
      next_cursor: response.next_cursor,
      has_more: response.has_more,
    }
  }

  async getPage(pageId: string) {
    const page: any = await this.client.pages.retrieve({
      page_id: pageId,
    })

    return this.postTransformer(page)
  }

  async getAllBlock(id: string) {
    const page = await this.getPage(id)
    const blocks = await this.getBlocks(id)

    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await this.getBlocks(block.id),
          }
        }),
    )

    const blocksWithChildren = blocks.map((block) => {
      if (block.has_children && !block[block.type].children) {
        block[block.type]['children'] = childBlocks.find((x) => x.id === block.id)?.children
      }
      return block
    })

    return {
      page,
      blocks: blocksWithChildren,
    }
  }
  async getBlocks(blockId: string) {
    const blocks = []
    let cursor
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

  async getComments(blockId: string) {
    return await this.client.comments.list({
      block_id: blockId,
    })
  }

  async createComment(pageId: string, content: string, userId?: string) {
    const body = []

    body.push({
      text: {
        content,
      },
    })

    if (userId) {
      body.push({
        mention: {
          user: {
            object: 'user',
            id: '',
          },
        },
      })
    }

    return this.client.comments.create({
      parent: {
        page_id: pageId,
      },
      rich_text: body,
    })
  }

  async searchPage(query: string) {
    return await this.client.search({
      query,
      sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time',
      },
    })
  }
}

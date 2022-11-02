import NotionService from '@/apis/notion'
import { renderBlock, Text } from '@/util/renderBlock'
import { ResPost } from '@/util/types'
import Link from 'next/link'
import React, { Fragment } from 'react'
import Layout from '@/components/layout'

const NotionDetail = ({ page, blocks }: { page: ResPost; blocks: any }) => {
  if (!page || !blocks) {
    return <div />
  }

  return (
    <Layout title={page.properties.Name.title[0].plain_text}>
      <div>
        <article className="px-8 max-w-[700px] mx-auto leading-6">
          <h1 className="text-2xl">
            <Text text={page.properties.Name.title} />
          </h1>

          <section>
            {blocks.map((block: any) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href="/" className="inline-block mb-5">
              ← Go home
            </Link>
          </section>
          <h1>text</h1>
        </article>
      </div>
    </Layout>
  )
}

export default NotionDetail

export const getStaticPaths = async () => {
  const notionService = new NotionService()

  const database = await notionService.getAll()
  return {
    paths: database.map(({ id }) => ({ params: { id } })),
    fallback: true,
  }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const { id } = context.params

  const notionService = new NotionService()

  const page = await notionService.getPage(id)
  const blocks = await notionService.getBlocks(id)

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await notionService.getBlocks(block.id),
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
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  }
}

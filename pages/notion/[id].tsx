/* eslint-disable @typescript-eslint/no-explicit-any */
import NotionService from '@/apis/notion'
import { renderBlock } from '@/util/renderBlock'
import { BlogPost, ResPost } from '@/util/types'
import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import Layout from '@/components/layout'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const NotionDetail = ({ page, blocks }: { page: BlogPost; blocks: any }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  if (!page || !blocks) {
    return <div />
  }

  const title = page.title

  return (
    <Layout title={title}>
      <div className="bg-dark_subBackground pt-[20vh] pb-[5vh] px-6 tracking-wider">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[30px] font-extrabold leading-10">{title}</h1>
          <p className="mt-1">{page.date}</p>
        </div>
      </div>

      <article className="py-[5vh] max-w-[800px] mx-auto leading-6 px-6">
        <section className="text-[20px]">
          {blocks.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}

          <Link href="/notion" className="block mb-5 pt-8">
            <div className="flex items-center gap-2">
              <AiOutlineArrowLeft />
              Go Back
            </div>
          </Link>
        </section>
      </article>
    </Layout>
  )
}

export default NotionDetail

export const getStaticPaths = async () => {
  const notionService = new NotionService()

  const database = await notionService.getAll().then((data) => data.posts)
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

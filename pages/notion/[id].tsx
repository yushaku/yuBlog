/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderBlock } from '@/util/renderBlock'
import { BlogPost } from '@/util/types'
import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import Layout from '@/components/layout'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import LoadingPage from '@/components/LoadingPage'
import { getArticleDetail } from '@/apis'

const NotionDetail = () => {
  const key = '/notion'
  const id = useRouter().query.id as string

  const { isLoading, data } = useQuery(
    [key, id],
    (): Promise<{ page: BlogPost; blocks: any }> => getArticleDetail(id),
    {
      cacheTime: Infinity,
      staleTime: 10000,
      refetchOnWindowFocus: false,
    },
  )

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const title = data?.page.title || ''
  const blocks = data?.blocks || []

  console.log(blocks)

  if (isLoading) return <LoadingPage />

  return (
    <Layout title={'title'}>
      <div className="bg-dark_subBackground pt-[20vh] pb-[5vh] px-6 tracking-wider">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[30px] font-extrabold leading-10">{title}</h1>
          <p className="mt-1">{data?.page.date}</p>
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

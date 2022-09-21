/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'
// import { useAmp } from 'next/amp'
import 'prismjs/themes/prism-tomorrow.css'
import Image from 'next/image'
import { getPostDetail } from '@/apis'
import { PostDetail } from '@/util/types/post'
import renderContentFragment from '@/util/renderContentFragment'
import RelatedPostList from '@/components/relatedPost/RelatedPostList'
import CommentSection from '@/components/comment/CommentSection'
import ReactSection from '@/components/article/ReactSection'
import Layout from '@/components/layout'

// export const config = { amp: 'hybrid' }
// export const config = { amp: true }
// const loadAmp = useAmp()

const PostDetailPage = () => {
  const [postDetail, setPostDetail] = useState<PostDetail>()

  const postSlug = useRouter().query.postSlug?.[0] as string

  useEffect(() => {
    const highlight = () => {
      Prism.highlightAll()
    }
    highlight()
  }, [postDetail])

  useEffect(() => {
    const abortController = new AbortController()

    getPostDetail(postSlug).then((responsePostDetail) => {
      setPostDetail(responsePostDetail)
    })

    return () => {
      console.log('remove side effect post detail')
      abortController.abort()
    }
  }, [postSlug])

  return (
    <Layout title={postDetail && postDetail.title}>
      {postDetail && (
        <div>
          <div className="p-4 max-w-[800px] mx-auto mt-[100px]">
            <h1 className="py-4 text-[40px] text-light_accentColor font-extrabold dark:text-dark_accentColor ">
              {postDetail.title}
            </h1>

            <Image src={postDetail.featuredImage.url} alt={postDetail.title} width={1000} height={500} />

            <p className="text-[24px] text-light_textColor dark:text-dark_textColor mt-12">{postDetail.excerpt}</p>
          </div>

          <div id="postSection" className="p-4 max-w-[800px] mx-auto text-2xl mt-[70px]">
            {postDetail.content.raw.children.map((typeObj: any, index: number) => {
              const children = typeObj.children.map((item: any, itemIndex: number) =>
                renderContentFragment(itemIndex, item.text, item),
              )

              return renderContentFragment(index, children, typeObj, typeObj.type)
            })}
          </div>
        </div>
      )}

      <ReactSection />

      <CommentSection postSlug={postSlug} />

      <RelatedPostList tagSlug={postDetail?.tags[0]?.tagSlug ?? 'javascript'} />
    </Layout>
  )
}

export default PostDetailPage

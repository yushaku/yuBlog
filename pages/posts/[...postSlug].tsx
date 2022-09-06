/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'
import Link from 'next/link'
// import { useAmp } from 'next/amp'
import { AiOutlineDown } from 'react-icons/ai'
import 'prismjs/themes/prism-tomorrow.css'

import { getPostDetail } from '../../apis'
import { PostDetail } from '../../util/types/post'
import renderContentFragment from '../../hooks/useContentFragment'
import RelatedPostList from '@/components/relatedPost/RelatedPostList'
import CommentSection from '@/components/comment/CommentSection'
import ReactSection from '@/components/article/ReactSection'
import Layout from '@/components/layout'

// export const config = { amp: 'hybrid' }
export const config = { amp: true }

const PostDetailPage = () => {
  const [postDetail, setPostDetail] = useState<PostDetail>()

  // const loadAmp = useAmp()

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
          <div
            style={{
              backgroundImage: `url(${postDetail.featuredImage.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className={`relative h-[100vh] w-[100vw] bg-cover bg-center`}
          >
            <div
              className="absolute 
              top-[40%] left-[5%] w-[90%] 
              md:left-[10%] md:w-[80%] 
              lg:top-[35%] lg:left-[20%] lg:w-[60%]"
            >
              <h1 className="py-4 text-[50px] dark:text-dark_accentColor text-light_textColor font-extrabold md:text-[60px] lg:text-[75px] shadow-inner">
                {postDetail.title}
              </h1>
              <p className="text-[24px] text-light_textColor dark:text-dark_textColor md:text-[28px]">
                {postDetail.excerpt}
              </p>
            </div>
            <motion.div
              className=" absolute text-4xl bottom-10 right-[50%] cursor-pointer"
              animate={{
                y: [-10, 10],
                opacity: [100, 10],
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Link href="#postSection">
                <a>
                  <AiOutlineDown />
                </a>
              </Link>
            </motion.div>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { getPostDetail } from '../../apis'
import { PostDetail } from '../../util/types/post'
import renderContentFragment from '../../hooks/useContentFragment'
import Head from 'next/head'
import RelatedPostList from '../../components/relatedPost/RelatedPostList'
import CommentSection from '../../components/comment/CommentSection'

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import ReactSection from '../../components/article/ReactSection'
import Link from 'next/link'

const PostDetailPage = () => {
  const [postDetail, setPostDetail] = useState<PostDetail>()

  const router = useRouter()
  const postSlug = router.query.postSlug?.[0] as string

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
      abortController.abort()
    }
  }, [postSlug])

  return (
    <div className="">
      <Head>
        <title> {postDetail && postDetail.title}</title>
      </Head>

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
              <Link href="#post_body">
                <AiOutlineDown />
              </Link>
            </motion.div>
          </div>

          <div id="post_body" className="p-4 max-w-[800px] mx-auto text-2xl mt-[70px]">
            {postDetail.content.raw.children.map((typeObj: any, index: number) => {
              const children = typeObj.children.map((item: any, itemIndex: number) =>
                renderContentFragment(itemIndex, item.text, item),
              )

              return renderContentFragment(index, children, typeObj, typeObj.type)
            })}
          </div>
        </div>
      )}
      <div className=" dark:bg-dark_subBackground container mx-auto p-12 max-w-[1200px]">
        <CommentSection postSlug={postSlug} />
      </div>

      <RelatedPostList tagSlug={postDetail?.tags[0].tagSlug || ''} />
    </div>
  )
}

export default PostDetailPage

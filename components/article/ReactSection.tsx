import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt, AiOutlineComment } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { API_URL } from '@/util/constants/url'
import FaceBookShareBtn from './shareBtn/FaceBookShareBtn'
import LinkedinShareBtn from './shareBtn/LinkedinShareBtn'
import TwitterShareBtn from './shareBtn/TwitterShareBtn'

const ReactSection = () => {
  const [like, setLike] = useState(false)
  const [isClickShare, setIsClickShare] = useState(false)
  const [showReactBtn, setShowReactBtn] = useState(true)

  const { asPath } = useRouter()
  const path = API_URL + asPath

  // useEffect(() => {
  //   const CommentSection = window.document.querySelector('#CommentSection')
  //   const postSection = window.document.querySelector('#postSection')

  //   const startOpen = postSection?.getBoundingClientRect()?.top as number
  //   const endOpen = CommentSection?.getBoundingClientRect()?.top as number

  //   const handleScrollToShowReactBtn = () => {
  //     // console.log('window.scrollY' + window.scrollY)
  //     // console.log('startOpen' + startOpen)
  //     console.log(window.scrollY > startOpen && window.scrollY < endOpen)
  //     // console.log(window.scrollY < endOpen)

  //     if (window.scrollY > startOpen && window.scrollY < endOpen) {
  //       setShowReactBtn(true)
  //     }
  //     if (window.scrollY > endOpen) {
  //       setShowReactBtn(false)
  //     }
  //   }
  //   window.addEventListener('scroll', handleScrollToShowReactBtn)
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollToShowReactBtn)
  //   }
  // }, [showReactBtn])

  return (
    <motion.section className="p-4 max-w-[800px] mx-auto text-2xl my-[20px] lg:fixed lg:top-[30%] lg:left-[7%] xl:left-[11%]">
      {showReactBtn && (
        <ul className=" flex lg:flex-col gap-4 items-center">
          <li onClick={() => setLike(!like)} className="icon text-4xl">
            {like ? <AiFillHeart className="" /> : <AiOutlineHeart />}
          </li>

          <li className="icon text-4xl">
            <Link href="#CommentSection">
              <AiOutlineComment />
            </Link>
          </li>

          <li className="icon text-4xl flex lg:flex-col translate-y-1 " onClick={() => setIsClickShare(!isClickShare)}>
            <AiOutlineShareAlt />
            <ul
              className={`ml-2 lg:ml-0 lg:mt-4 flex lg:flex-col gap-2  ${
                isClickShare ? 'h-[100%]' : 'h-0'
              } overflow-hidden`}
            >
              <li>
                <FaceBookShareBtn url={path} />
              </li>
              <li>
                <LinkedinShareBtn url={path} />
              </li>
              <li>
                <TwitterShareBtn url={path} />
              </li>
            </ul>
          </li>
        </ul>
      )}
    </motion.section>
  )
}

export default ReactSection

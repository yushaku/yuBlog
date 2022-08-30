import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt, AiOutlineComment } from 'react-icons/ai'
import { DeployUrl, localUrl } from '../../util/constants/url'
import FaceBookShareBtn from './shareBtn/FaceBookShareBtn'
import LinkedinShareBtn from './shareBtn/LinkedinShareBtn'
import TwitterShareBtn from './shareBtn/TwitterShareBtn'

const ReactSection = () => {
  const [like, setLike] = useState(false)
  const [isClickShare, setIsClickShare] = useState(false)

  const { asPath } = useRouter()
  const NODE_ENV = process.env.NODE_ENV

  const path = (NODE_ENV === 'development' ? localUrl : DeployUrl) + asPath

  return (
    <motion.section className="p-4 max-w-[800px] mx-auto text-2xl my-[20px] lg:fixed lg:top-[30%] lg:left-[7%] xl:left-[11%]">
      <ul className=" flex lg:flex-col gap-4 items-center">
        <li onClick={() => setLike(!like)} className="icon text-3xl">
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </li>

        <li className="icon text-3xl">
          <Link href="#CommentSection">
            <AiOutlineComment />
          </Link>
        </li>

        <li className="icon text-3xl flex lg:flex-col translate-y-1 " onClick={() => setIsClickShare(!isClickShare)}>
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
    </motion.section>
  )
}

export default ReactSection

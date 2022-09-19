import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart, AiOutlineComment, AiOutlineImport } from 'react-icons/ai'
import { articleItemProps } from '@/util/types/props'
import moment from 'moment'

const ArticleItem = ({ title, tags, featuredImage, postSlug, createdAt }: articleItemProps) => {
  const formatCreatedAt = moment(createdAt).format('LL')
  return (
    <div id="ArticleContainerItem" className="relative rounded-2xl">
      <section
        id="ArticleItem"
        className="absolute flex flex-col items-center justify-center 
      dark:bg-dark_subBackground
        px-4 rounded-2xl"
      >
        <Link href={`/posts/${postSlug}`}>
          <div className=" cursor-pointer">
            <h3 className="text-lg dark:text-dark_subTextColor">{formatCreatedAt}</h3>
            <h1 className="text-2xl line-clamp-2 font-semibold dark:text-dark_accentColor mb-8 mt-2">{title}</h1>
            <Image
              src={featuredImage.url}
              alt={title}
              width={550}
              height={310}
              className=" rounded-lg"
              layout="responsive"
              loading="lazy"
            />
          </div>
        </Link>
        <div>
          <ul className="flex gap-4 items-start mt-4">
            {tags &&
              tags.map((tag, index) => {
                return (
                  <Link href={`tags/${tag.tagSlug}`} key={index}>
                    <li
                      style={{ backgroundColor: tag.tagColor.hex, color: tag.textColor.hex }}
                      className={`px-6 rounded-3xl text-lg font-medium cursor-pointer`}
                    >
                      {tag.title}
                    </li>
                  </Link>
                )
              })}
          </ul>
        </div>
        <div className="w-[100%] flex justify-between mt-4">
          <span className="flex items-center justify-center gap-2 text-xl cursor-pointer">
            <AiOutlineHeart />
            like
          </span>
          <span className="flex items-center justify-center gap-2 text-xl cursor-pointer">
            <AiOutlineComment />
            comments
          </span>
          <span className="flex items-center justify-center gap-2 text-xl cursor-pointer">
            <AiOutlineImport />
            save
          </span>
        </div>
      </section>
    </div>
  )
}

export default ArticleItem

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'

type tagsDetail = {
  name: string
  color: string
}

type articleItemProps = {
  title: string
  tags: tagsDetail[]
  imageLink: string
  slug: string
  time: string
}

const ArticleItem = ({ title, tags, imageLink, slug, time }: articleItemProps) => {
  return (
    <div id="ArticleContainerItem" className="relative rounded-2xl">
      <section
        id="ArticleItem"
        className="absolute flex flex-col items-center justify-center 
      dark:bg-dark_subBackground
        p-4 rounded-2xl"
      >
        <Link href={`/article/${slug}`}>
          <div className=" cursor-pointer">
            <h3 className="text-lg line-clamp-3 dark:text-dark_subTextColor">{time}</h3>
            <h1 className="text-3xl font-semibold dark:text-dark_accentColor mb-12 mt-2">{title}</h1>
            <Image src={imageLink} alt={title} width={550} height={310} className=" rounded-lg" />
          </div>
        </Link>
        <div>
          <ul className="flex gap-4 items-start mt-4">
            {tags.map((tag, index) => {
              return (
                <li key={index} className={`bg-[${tag.color}] px-6 rounded-3xl text-lg font-medium`}>
                  {tag.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="w-[100%] flex justify-evenly mt-4">
          <span className="flex items-center justify-center gap-2 text-xl">
            <AiOutlineHeart />
            like
          </span>
          <span className="flex items-center justify-center gap-2 text-xl">
            <AiOutlineComment />
            comments
          </span>
        </div>
      </section>
    </div>
  )
}

export default ArticleItem

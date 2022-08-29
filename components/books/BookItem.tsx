import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { articleItemProps } from '@/util/types/props'
import moment from 'moment'

const BookItem = ({ title, tags, featuredImage, postSlug, createdAt, authorId }: articleItemProps) => {
  const formatCreatedAt = moment(createdAt).format('LL')

  return (
    <article
      id="card"
      className="relative flex flex-col h-[350px] w-[400px] min-w-[250px] p-6 rounded-2xl dark:bg-dark_subBackground bg-light_subBackground shadow-cardShadow duration-200"
    >
      <Link href={`posts/${postSlug}`}>
        <div className=" cursor-pointer">
          <header id="card-header " className="mb-auto">
            <p
              className="text-[14px] mb-[1rem] 
              text-[#7a7a8c]"
            >
              {formatCreatedAt}
            </p>
            <h2
              id="card-header_title"
              className="text-2xl m-[0.25rem] mr-0 mb-auto cursor-pointer dark:text-dark_accentColor"
            >
              {title}
            </h2>
          </header>
          <div id="card-author" className="relative grid grid-cols-2 items-center mt-12">
            <span id="author-avatar">
              <Image
                src={authorId?.avatar.url ?? '/anya.png'}
                alt="logo"
                width={30}
                height={30}
                layout="responsive"
                loading="lazy"
                className="rounded-full"
              />
            </span>

            <svg
              id="half-circle"
              viewBox="0 0 106 57"
              className=" absolute -bottom-3 left-0 w-[67px] h-[48px] fill-transparent stroke-[8px] stroke-dark_accentColor"
            >
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="ml-4">
              <h4 className="author-name-prefix text-xl font-semibold">Author</h4>
              {authorId?.name}
            </div>
          </div>
        </div>
      </Link>

      <div id="tags" className="flex gap-2 mt-10 mb-0 pt-2 pb-4 leading-4">
        {tags.map((tag, index) => (
          <TagItem title={tag.title} key={index} />
        ))}
      </div>
    </article>
  )
}

export default BookItem

const TagItem = ({ title }: { title: string }) => (
  <Link href={`tags/${title}`}>
    <a
      className="relative font-semibold text-sm uppercase text-textGrayLight px-3 py-1 border border-[#665f72] rounded-full
      dark:text-dark_subTextColor"
    >
      {title}
    </a>
  </Link>
)

import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

interface Props {
  title: string
  postSlug: string
  excerpt: string
}

const ArticleItem = ({ title, postSlug, excerpt }: Props) => {
  return (
    <Link href={`posts/${postSlug}`}>
      <li className="flexCenter dark:bg-dark_subBackground bg-light_subBackground rounded-md group hover:shadow-2xl shadow-white hover:-translate-x-1 hover:-translate-y-1 animationAll">
        <div className="px-4 py-3">
          <h2 className="line-clamp-1 text-2xl group-hover:text-dark_accentColor font-medium">{title}</h2>
          <p className="text-xl line-clamp-3 mt-3">{excerpt}</p>
          <span className="flex items-center gap-2 group-hover:text-dark_accentColor group-hover:gap-3 text-lg mt-2 animationAll">
            read more
            <BsArrowRight />
          </span>
        </div>
      </li>
    </Link>
  )
}

export default ArticleItem

import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  postSlug: string
  excerpt: string
}

const ArticleItem = ({ title, postSlug, excerpt }: Props) => {
  return (
    <Link href={`posts/${postSlug}`}>
      <li className="flex items-center justify-center p-4 m-4 dark:bg-dark_subBackground bg-light_subBackground rounded-md">
        <i className="text-5xl">📖</i>
        <div className="px-4">
          <h2 className="line-clamp-2 text-3xl dark:text-dark_accentColor">{title}</h2>
          <p className="text-xl line-clamp-2">{excerpt}</p>
        </div>
      </li>
    </Link>
  )
}

export default ArticleItem

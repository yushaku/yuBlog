import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface props {
  title: string
  description: string
  imageLink: string
  slug: string
}

const BookItem = ({ title, description, imageLink, slug }: props) => {
  return (
    <Link href={`posts/${slug}`}>
      <div
        className="flex items-center justify-start w-[500px] dark:bg-dark_subBackground p-8 rounded-md gap-2 cursor-pointer"
        id="book"
      >
        <div className="w-[50%]">
          <Image src={imageLink} alt="image book" width={140} height={210} layout="responsive" loading="lazy" />
        </div>
        <div className="w-[70%]">
          <h2 className="text-3xl text-dark_accentColor">{title}</h2>
          <p className="text-xl line-clamp-5 mt-4">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookItem

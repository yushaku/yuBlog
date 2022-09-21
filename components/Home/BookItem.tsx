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
        className="flex items-center justify-start flex-col md:flex-row relative 
        w-[300px] md:w-[400px] lg:w-[500px] dark:bg-dark_subBackground p-8 rounded-md gap-2 cursor-pointer"
        id="book"
      >
        <div className="w-[50%] absolute top-0 left-0 md:relative">
          <Image src={imageLink} alt="image book" width={140} height={210} loading="lazy" />
        </div>
        <div className="w-[70%]">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-dark_accentColor">{title}</h2>
          <p className="text-lg md:text-lx line-clamp-5 mt-4">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookItem

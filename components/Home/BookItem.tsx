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
        className="relative
        flex flex-col items-center justify-start gap-2 md:flex-row  
        w-[300px] md:w-[400px] lg:w-[500px] 
        dark:bg-dark_subBackground rounded-md cursor-pointer"
        id="book"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 md:relative">
          <Image src={imageLink} alt="image book" width={1000} height={1000} loading="lazy" />
        </div>
        <div className="w-[100%] z-20 dark:bg-dark_background/80 md:w-[70%] p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-dark_accentColor">{title}</h2>
          <p className="text-lg md:text-lx line-clamp-5 mt-4">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookItem

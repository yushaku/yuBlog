import React from 'react'
import Image from 'next/image'

interface props {
  title: string
  description: string
  imageLink: string
}

const BookItem = ({ title, description, imageLink }: props) => {
  return (
    <div className="flex w-[500px] dark:bg-dark_subBackground p-8 rounded-md" id="book">
      <div className="w-[50%]">
        <Image src={imageLink} alt="image book" width={140} height={210} />
      </div>
      <div className="w-[70%]">
        <h2 className="text-3xl text-dark_accentColor">{title}</h2>
        <p className="text-xl line-clamp-6">{description}</p>
      </div>
    </div>
  )
}

export default BookItem

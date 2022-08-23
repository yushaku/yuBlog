import React from 'react'
import { tagItemProps } from '../../util/types/props'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

const RelatedPostItem = ({ id, title, featuredImage, createdAt, postSlug }: tagItemProps) => {
  const formatCreatedAt = moment(createdAt).format('LL')

  return (
    <Link href={`/posts/${postSlug}`} key={id}>
      <div className="w-[300px] h-[300px] rounded-lg dark:bg-dark_subBackground cursor-pointer">
        <Image src={featuredImage.url} alt={title} height={180} width={300} className=" rounded-lg" />
        <div className="px-2">
          <h2 className="text-md">{title}</h2>
          <p className="text-sm text-dark_subTextColor">{formatCreatedAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default RelatedPostItem

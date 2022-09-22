/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { CommentType } from '@/util/types/post'
import Image from 'next/image'
import moment from 'moment'

const CommentItem = ({ id, updatedAt, createdAt, comment, reader, author }: CommentType) => {
  const commentOwner = reader ?? author
  const formatCreatedAt = moment(createdAt).format('LL')
  const formatUpdatedAt = moment(updatedAt).format('LL')

  const TimeElement = () =>
    formatCreatedAt !== formatUpdatedAt ? (
      <p className="text-sm dark:text-dark_subTextColor">updated at: {formatUpdatedAt}</p>
    ) : (
      <p className="text-sm dark:text-dark_subTextColor">{formatCreatedAt}</p>
    )

  return (
    <div key={id} className="flex items-center gap-6 p-2 rounded-lg dark:bg-dark_background">
      <div className="pl-4">
        <Image
          src={commentOwner?.avatar.url ?? ''}
          alt={commentOwner?.email}
          width={60}
          height={60}
          className=" rounded-full"
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center ">
        <h2 className=" text-2xl font-semibold">{commentOwner?.name}</h2>
        <section>{comment}</section>
        <TimeElement />
      </div>
    </div>
  )
}

export default CommentItem

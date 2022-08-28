/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { CommentType } from '../../util/types/post'
import Image from 'next/image'
import moment from 'moment'
import renderContentFragment from '../../hooks/useContentFragment'

const CommentItem = ({ id, updatedAt, createdAt, comment, reader, author }: CommentType) => {
  const commentOwner = reader ?? author
  console.log(commentOwner)
  const formatCreatedAt = moment(createdAt).format('LL')
  const formatUpdatedAt = moment(updatedAt).format('LL')

  const showTimeElement = () =>
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
        />
      </div>
      <div className="flex flex-col justify-center ">
        <h2 className=" text-2xl font-semibold">{commentOwner?.name}</h2>
        <section>
          {comment.raw.children.map((typeObj: any, index: number) => {
            const children = typeObj.children.map((item: any, itemIndex: number) =>
              renderContentFragment(itemIndex, item.text, item),
            )

            return renderContentFragment(index, children, typeObj, typeObj.type)
          })}
        </section>
        {showTimeElement()}
      </div>
    </div>
  )
}

export default CommentItem

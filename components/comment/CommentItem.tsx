/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import { CommentType } from '@/util/types/post'
import Image from 'next/image'
import moment from 'moment'
import { FaUserCircle, FaTrash, FaEdit, FaReply } from 'react-icons/fa'
import { deleteComment, EditComment } from '@/apis'

const CommentItem = ({ id, updatedAt, createdAt, comment, reader, author }: CommentType) => {
  const commentOwner = reader ?? author
  const [isEdit, setIsEdit] = useState(false)
  const formatCreatedAt = moment(createdAt).format('LL')
  const formatUpdatedAt = moment(updatedAt).format('LL')

  const handleDeleteComment = () => {
    deleteComment(id)
  }

  const TimeElement = () =>
    formatCreatedAt !== formatUpdatedAt ? (
      <p className="text-sm dark:text-dark_subTextColor">updated at: {formatUpdatedAt}</p>
    ) : (
      <p className="text-sm dark:text-dark_subTextColor">{formatCreatedAt}</p>
    )

  const AvatarElement = () => {
    const src = commentOwner?.avatar?.url
    if (src) {
      return (
        <Image
          src={src}
          alt={commentOwner.email}
          width={60}
          height={60}
          className=" rounded-full"
          layout="responsive"
          loading="lazy"
        />
      )
    }
    return <FaUserCircle className="text-5xl" />
  }

  return (
    <>
      <div key={id} className="flex items-center justify-between p-2 rounded-lg dark:bg-dark_background">
        <div className="flex items-center gap-6">
          <div className="pl-4">
            <AvatarElement />
          </div>
          <div className="flex flex-col justify-center ">
            <h2 className=" text-xl font-semibold">{commentOwner?.name}</h2>
            <section className="text-lg mt-1">{comment}</section>
            <TimeElement />
          </div>
        </div>

        <div className="pr-8 flex gap-4">
          <FaEdit
            className="text-[22px] hover:dark:text-dark_accentColor hover:text-light_accentColor cursor-pointer"
            onClick={() => setIsEdit(!isEdit)}
          />
          <FaReply className="text-[22px] hover:dark:text-dark_accentColor hover:text-light_accentColor cursor-pointer" />
          <FaTrash
            className="text-[22px] hover:dark:text-dark_accentColor hover:text-light_accentColor cursor-pointer"
            onClick={handleDeleteComment}
          />
        </div>
      </div>
      <MiniCommentField isEdit={isEdit} setIsEdit={setIsEdit} id={id} />
    </>
  )
}

export default CommentItem

const MiniCommentField = ({ isEdit, setIsEdit, id }: any) => {
  const editForm = useRef<HTMLTextAreaElement>(null)

  const handleEditComment = () => {
    if (editForm.current?.value) {
      EditComment(id, editForm.current?.value)
    }
    setIsEdit(!isEdit)
  }

  if (isEdit)
    return (
      <div
        className="flex float-right w-[100%] mb-2 mt-1 rounded-lg            
        dark:bg-dark_background bg-gray-50"
      >
        <textarea
          required
          ref={editForm}
          id="commentInput"
          placeholder="Your comment..."
          className="block p-2.5 w-full text-lg 
            focus:outline-none focus:ring-0
            rounded-lg 
            dark:bg-dark_background 
            border-gray-800 
            text-light_textColor 
            dark:placeholder-dark_textColor 
            dark:text-dark_textColor"
        ></textarea>
        <button
          className="px-4 text-lg dark:hover:text-dark_accentColor hover:text-light_accentColor"
          onClick={() => setIsEdit(!isEdit)}
        >
          cancel
        </button>
        <button
          className="px-4 text-lg dark:hover:text-dark_accentColor hover:text-light_accentColor"
          onClick={handleEditComment}
        >
          Send
        </button>
      </div>
    )
  return <span></span>
}

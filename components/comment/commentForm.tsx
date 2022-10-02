import React, { useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { publicComment, submitComment } from '@/apis'

interface Props {
  postSlug: string
}

const CommentForm = ({ postSlug }: Props) => {
  const { data: session } = useSession()
  const userAvatarLink = session?.user?.image

  const commentForm = useRef<HTMLTextAreaElement>(null)

  const handleSentComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (session?.user?.email && commentForm.current) {
      submitComment({
        parentId: '',
        comment: commentForm.current.value,
        post: postSlug,
        reader: session.user.email,
      }).then((resData) => {
        publicComment(resData.createComment.id)
      })

      commentForm.current.value = ''
      commentForm.current.focus()
    }
  }

  const handleCancel = () => {
    if (commentForm.current) console.log(commentForm.current?.value)
  }

  return (
    <form method="POST" onSubmit={handleSentComment} className="w-[100%] mb-8 text-[20px] flex items-center gap-10">
      <div>
        {userAvatarLink ? (
          <Image
            src={userAvatarLink}
            alt="avatar user"
            className="rounded-full"
            width={48}
            height={48}
            loading="lazy"
          />
        ) : (
          <FaUserCircle className="text-5xl" />
        )}
      </div>

      <div className="w-[100%] ">
        <div className="w-[100%] mb-2">
          <textarea
            required
            id="commentInput"
            rows={3}
            ref={commentForm}
            placeholder="Your comment..."
            className="block p-2.5 w-full text-lg 
            rounded-lg border border-gray-800 
            bg-gray-50 text-light_textColor 
            focus:outline-none focus:ring-0

            dark:bg-dark_background 
            dark:border-gray-600 
            dark:placeholder-dark_textColor 
            dark:text-dark_textColor"
          ></textarea>
        </div>

        {/* <span className="flex items-center p-2 gap-3 w-[110px] dark:hover:text-dark_accentColor cursor-pointer hover:border-b-2 hover:border-dark_accentColor">
          <FaCode />
          code
        </span> */}

        <input type="submit" value="send" className="button float-right cursor-pointer px-12 mx-1" />

        <button onClick={handleCancel} className="border rounded-md py-2 px-4 mx-1 float-right cursor-pointer ">
          cancel
        </button>
      </div>
    </form>
  )
}

export default CommentForm

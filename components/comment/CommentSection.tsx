import React, { useEffect, useState } from 'react'
import { getCommentsOfPost } from '../../apis/comments'
import { CommentType } from '../../util/types/post'
import CommentForm from './commentForm'
import CommentItem from './CommentItem'

const CommentSection = ({ postSlug }: { postSlug: string }) => {
  const [commentList, setCommentList] = useState<CommentType[]>([])

  useEffect(() => {
    getCommentsOfPost(postSlug)
      .then((resCommentList) => {
        setCommentList(resCommentList)
      })
      .catch((err) => console.error(err))

    return () => {
      console.log('remove side effect')
    }
  }, [postSlug])

  return (
    <div
      id="CommentSection"
      className=" dark:bg-dark_subBackground 
      container mx-auto p-12 max-w-[1200px]"
    >
      <h2 className="text-3xl dark:text-dark_accentColor font-semibold mb-8">Comment</h2>
      <CommentForm />
      <ul className="flex flex-col gap-2">
        {commentList &&
          commentList.map((comment) => {
            return (
              <li key={comment.id}>
                <CommentItem
                  id={comment.id}
                  updatedAt={comment.updatedAt}
                  createdAt={comment.createdAt}
                  comment={comment.comment}
                  reader={comment.reader}
                  author={comment.author}
                />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CommentSection

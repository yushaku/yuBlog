import React, { useEffect, useState } from 'react'
import { getCommentsOfPost } from '../../apis/comments'
import { CommentType } from '../../util/types/post'
import CommentItem from './CommentItem'

const CommentSection = ({ postSlug }: { postSlug: string }) => {
  const [commentList, setCommentList] = useState<CommentType[]>([])

  useEffect(() => {
    getCommentsOfPost(postSlug)
      .then((resCommentList) => {
        setCommentList(resCommentList)
        console.log(resCommentList)
      })
      .catch((err) => console.error(err))

    return () => {
      console.log('remove side effect')
    }
  }, [postSlug])

  return (
    <div>
      <h2 className="text-3xl dark:text-dark_accentColor font-semibold mb-8">Comment</h2>
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

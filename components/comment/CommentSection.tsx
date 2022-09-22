import React, { useEffect, useState } from 'react'
import { getCommentsOfPost } from '@/apis/comments'
import { CommentType } from '@/util/types/post'
import CommentForm from './commentForm'
import CommentItem from './CommentItem'

const CommentSection = ({ postSlug }: { postSlug: string }) => {
  const [commentList, setCommentList] = useState<CommentType[]>([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    if (postSlug && pageNumber > 0)
      getCommentsOfPost(postSlug, 5 * pageNumber)
        .then((resCommentList) => {
          setCommentList(resCommentList)
        })
        .catch((err) => console.error(err))

    return () => {
      console.log('remove side effect')
    }
  }, [postSlug, pageNumber])

  return (
    <div id="CommentSection" className="container mx-auto dark:bg-dark_subBackground p-12 max-w-[1200px]">
      <h2 className="text-3xl dark:text-dark_accentColor font-semibold mb-8">Comment</h2>

      <CommentForm postSlug={postSlug} />

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

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="text-xl dark:text-dark_accentColor text-light_accentColor"
        >
          load more
        </button>
      </div>
    </div>
  )
}

export default CommentSection

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/comments`)
//   const comment = res.json()

//   return {
//     props: { comment },
//     revalidate: 1,
//   }
// }

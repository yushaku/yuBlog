import React from 'react'
import { createComment } from '../../apis'

const CommentForm = () => {
  return (
    <form method="post" onSubmit={() => createComment()}>
      <input type="text" name="comment" id="comment" placeholder="comment" />
      <input type="button" value="send" className=" cursor-pointer" />
    </form>
  )
}

export default CommentForm

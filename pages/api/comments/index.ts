import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export const handlerAddComment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { comment, post, reader, author } = req.body
    const mutation = gql`
      mutation addComment($comment: String!, $post: String!, $reader: String, $author: String) {
        createComment(
          data: {
            comment: $comment
            post: { connect: { postSlug: $post } }
            reader: { connect: { email: $reader } }
            author: { connect: { email: $author } }
          }
        ) {
          id
        }
      }
    `
    try {
      const result = await myGraphQlCLient.request(mutation, {
        comment,
        post,
        reader,
        author,
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(422).json(error)
    }
  }
}

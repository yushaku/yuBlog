import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[POST] create comment')

  if (req.method === 'POST') {
    const { parentId, comment, post, reader } = req.body
    const mutation = gql`
      mutation addComment($parentId: String!, $comment: String!, $post: String!, $reader: String) {
        createComment(
          data: {
            parentId: $parentId
            comment: $comment
            post: { connect: { postSlug: $post } }
            reader: { connect: { email: $reader } }
          }
        ) {
          id
          parentId
          comment
          post {
            postSlug
          }
          reader {
            ... on Reader {
              email
            }
          }
        }
      }
    `
    try {
      const result = await myGraphQlCLient.request(mutation, {
        parentId,
        comment,
        post,
        reader,
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(422).json(error)
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body
    const mutation = gql`
      mutation deleteComment($id: String) {
        deleteComment(where: { id: $id }) {
          id
          parentID
          comment
          post
          reader
          author
        }
      }
    `
    try {
      const result = await myGraphQlCLient.request(mutation, { id })
      res.status(200).json(result)
    } catch (error) {
      res.status(422).json(error)
    }
  }
}

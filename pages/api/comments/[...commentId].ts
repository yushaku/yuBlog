import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('get in to server')
  console.log(req.query)
  const commentId = req.query.commentId as string[]
  const id = commentId[0]

  if (req.method === 'DELETE') {
    const mutation = gql`
      mutation deleteComment($id: ID) {
        deleteComment(where: { id: $id }) {
          id
          parentId
          comment
          post {
            postSlug
          }
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

  if (req.method === 'POST') {
    const mutation = gql`
      mutation publishComment($id: ID) {
        publishComment(where: { id: $id }, to: PUBLISHED, publishBase: true, locales: [en], withDefaultLocale: true) {
          id
        }
      }
    `
    try {
      const result = await myGraphQlCLient.request(mutation, { id })
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json(error)
    }
  }

  if (req.method === 'PUT') {
    const { comment } = req.body

    console.log(comment)

    const mutation = gql`
      mutation publishComment($id: ID, $comment: String!) {
        publishComment(where: { id: $id, comment: $comment }) {
          comment
        }
      }
    `
    try {
      const result = await myGraphQlCLient.request(mutation, { id, comment })
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json(error)
    }
  }
}

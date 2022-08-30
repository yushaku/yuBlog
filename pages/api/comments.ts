import { gql } from 'graphql-request'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../apis/graphQLClient'

type Data = {
  name: string
}

export default async function handlerAddComment(req: NextApiRequest, res: any) {
  const mutation = gql`
    mutation addComment($comment: String!, $post: String!, $reader: String, $author: String) {
      addComment(
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
    const result = await myGraphQlCLient.request(mutation, req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(422).json(error)
  }
}

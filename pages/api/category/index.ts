import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('[post] create category')
    const mutation = gql`
      mutation addCategory($title: String!, $slug: String) {
        insert_category_one(object: { title: $title, slug: $slug }) {
          title
          slug
        }
      }
    `

    try {
      const result = await myGraphQlCLient.request(mutation, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(error)
    }
    // res.status(200).json({ message: 'ok' })
  }
}

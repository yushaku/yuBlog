import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('[post] create category')
    const { title, slug } = req.body

    const mutation = gql`
      mutation addCategory($title: String!, $slug: String!) {
        createCategory(data: { name: $title, slug: $slug }) {
          name
        }
      }
    `

    try {
      const result = await myGraphQlCLient.request(mutation, { title, slug })
      res.status(200).json(result)
    } catch (error) {
      res.status(422).json(error)
    }
  }
}

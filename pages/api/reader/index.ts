import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myGraphQlCLient } from '../../../apis/graphQLClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = gql`
      query MyQuery($email: String!) {
        reader(where: { email: $email }) {
          id
          email
          name
        }
      }
    `

    try {
      const result = await myGraphQlCLient.request(query, req.query)

      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  if (req.method === 'POST') {
    console.log('[post] create category')
    const { email, name, password } = req.body

    const mutation = gql`
      mutation addReader($email: String!, $name: String!, $password: String!) {
        createReader(data: { email: $email, name: $name, password: $password }) {
          name
          email
          password
        }
      }
    `

    try {
      const result = await myGraphQlCLient.request(mutation, { email, name, password })
      res.status(200).json(result)
    } catch (error) {
      res.status(422).json(error)
    }
  }
}

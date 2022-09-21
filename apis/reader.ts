import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string

export const getReader = async (email: string) => {
  await fetch(
    '/api/reader?' +
      new URLSearchParams({
        email,
      }),
    {
      method: 'GET',
      mode: 'same-origin',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((data) => data.json())
    .catch((error) => console.error(error))
}

export const createReader = async (email: string, name: string, password: 'sign in by third party') => {
  await fetch('/api/reader', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  })
    .then((data) => data.json())
    .catch((error) => console.error(error))
}

export const getReaderByEmail = async (email: string) => {
  const query = gql`
    query MyQuery($email: String!) {
      reader(where: { email: $email }) {
        id
        email
        name
        password
      }
    }
  `
  const result = await request(graphqlAPI, query, { email })
  return result.reader
}

export const checkReaderEmailExist = async (email: string) => {
  const query = gql`
    query MyQuery($email: String!) {
      reader(where: { email: $email }) {
        id
      }
    }
  `
  const result = await request(graphqlAPI, query, { email })
  return result.reader !== null
}

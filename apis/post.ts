import request, { gql } from 'graphql-request'
import { myGraphQlCLient } from './graphQLClient'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT || ''

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            postSlug
            title
            excerpt
            createdAt
            featuredImage {
              url
            }
            tags {
              title
              tagColor {
                hex
              }
            }
            authorId {
              name
            }
          }
        }
      }
    }
  `

  const result = await myGraphQlCLient.request(query)
  return result?.postsConnection.edges
}

export const getPostDetail = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String) {
      postsConnection(where: { postSlug: $slug }) {
        edges {
          node {
            postSlug
            title
            excerpt
            createdAt
            content {
              raw
            }
            featuredImage {
              url
            }
            tags {
              title
              tagSlug
              tagColor {
                hex
              }
            }
            authorId {
              name
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })
  return result?.postsConnection?.edges[0]?.node
}

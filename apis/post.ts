import { request, gql } from 'graphql-request'

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

  const result = await request(graphqlAPI, query)
  console.log(result.postsConnection.edges)
  return result?.postsConnection.edges
}

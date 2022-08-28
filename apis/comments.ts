import request, { gql } from 'graphql-request'
import { CommentType } from '../util/types/post'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT || ''

export const getCommentsOfPost = async (slug: string): Promise<CommentType[]> => {
  const query = gql`
    query MyQuery($slug: String!) {
      comments(where: { post: { postSlug: $slug } }) {
        updatedAt
        createdAt
        comment {
          raw
        }
        reader {
          ... on Reader {
            name
            email
            avatar {
              url
            }
          }
        }
        author {
          ... on AuthorId {
            email
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result?.comments
}

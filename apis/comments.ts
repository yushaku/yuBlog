import request, { gql } from 'graphql-request'

import { CommentType } from '@/util/types/post'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string

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

// const variables = {
//   comment: 'Inception',
//   post: 'test create comment',
//   author: 'yushaku5011@gmail.com Yushaku',
//   reader: null,
// }

// export const createComment = async () => {
//   const mutation = gql`
//     mutation addComment($comment: String!, $post: String!, $reader: String, $author: String) {
//       addComment(
//         data: {
//           comment: $comment
//           post: { connect: { postSlug: $post } }
//           reader: { connect: { email: $reader } }
//           author: { connect: { email: $author } }
//         }
//       ) {
//         id
//       }
//     }
//   `
//   const data = await graphQLClient.request(mutation, variables)
//   console.log(data)
// }

const variables = {
  comment: 'Inception',
  post: 'test create comment',
  author: 'yushaku5011@gmail.com Yushaku',
  reader: null,
}

export const submitComment = async () => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(variables),
  })

  return result.json()
}

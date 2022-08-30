import request, { gql, GraphQLClient } from 'graphql-request'
import { CommentType } from '../util/types/post'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string
const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: 'Bearer MY_TOKEN',
  },
})

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

const variables = {
  comment: 'Inception',
  post: 'test create comment',
  author: 'yushaku5011@gmail.com Yushaku',
  reader: null,
}

export const createComment = async () => {
  const mutation = gql`
    mutation addComment($comment: String!, @post: String!, $reader: String, $author: String) {
      insert_movies_one(object: { comment: $comment, post: $post, reader: $reader, author: $author  }) {
        comment
        post
        reader
        author
      }
    }
  `
  const data = await graphQLClient.request(mutation, variables)
  console.log(data)
}

import request, { gql } from 'graphql-request'

import { CommentType } from '@/util/types/post'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string

export const getCommentsOfPost = async (slug: string): Promise<CommentType[]> => {
  const query = gql`
    query MyQuery($slug: String!) {
      comments(where: { post: { postSlug: $slug } }) {
        updatedAt
        createdAt
        comment
        reader {
          name
          email
          avatar {
            url
          }
        }
        author {
          email
          name
          avatar {
            url
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result?.comments
}

interface Props {
  parentId: string
  comment: string
  post: string
  reader: string | null
}

export const submitComment = async ({ parentId, comment, post, reader }: Props) => {
  console.log('call api create comment updated')

  await fetch('/api/comments', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ parentId, comment, post, reader }),
  }).then((data) => data.json())
}

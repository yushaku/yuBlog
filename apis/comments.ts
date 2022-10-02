import request, { gql } from 'graphql-request'

import { CommentType } from '@/util/types/post'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string

export const getCommentsOfPost = async (slug: string, limit = 5): Promise<CommentType[]> => {
  const query = gql`
    query MyQuery($slug: String!, $limit: Int) {
      comments(where: { post: { postSlug: $slug } }, first: $limit) {
        id
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
  const result = await request(graphqlAPI, query, { slug, limit })
  return result?.comments
}

interface Props {
  parentId: string
  comment: string
  post: string
  reader: string | null
}

export const submitComment = async ({ parentId, comment, post, reader }: Props) => {
  return await fetch('/api/comments', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ parentId, comment, post, reader }),
  }).then((data) => data.json())
}

export const deleteComment = async (id: string) => {
  return await fetch(`/api/comments/${id}`, {
    method: 'DELETE',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

export const EditComment = async (id: string, comment: string) => {
  await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  }).then((data) => data.json())
}

export const publicComment = async (id: string) => {
  await fetch(`/api/comments/${id}`, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

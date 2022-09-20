/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, gql } from 'graphql-request'
import { myGraphQlCLient } from './graphQLClient'

import { articleItemProps } from '@/util/types/props'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT as string

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        id
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getPostOfCategory = async (slug: string): Promise<articleItemProps[]> => {
  const query = gql`
    query MyQuery($slug: String!) {
      postsConnection(where: { category: { slug: $slug } }, first: 4) {
        edges {
          node {
            id
            title
            createdAt
            postSlug
            featuredImage {
              url
            }
            tags {
              tagSlug
              title
              tagColor {
                hex
              }
              textColor {
                hex
              }
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  const newArticleList: articleItemProps[] = []
  result?.postsConnection?.edges.forEach((article: any) => {
    newArticleList.push(article.node)
  })
  return newArticleList
}

export const getBooksOfCategory = async (slug: string, limit = 2): Promise<articleItemProps[]> => {
  const query = gql`
    query MyQuery($slug: String!, $limit: Int!) {
      category(where: { slug: $slug }) {
        posts(first: $limit) {
          authorId {
            name
            avatar {
              url
            }
          }
          postSlug
          title
          featuredImage {
            url
          }
          excerpt
          createdAt
          tags {
            tagSlug
            title
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, {
    slug,
    limit,
  })
  return result.category.posts
}

export const getPostOfTags = async (slug: string): Promise<articleItemProps[]> => {
  const query = gql`
    query MyQuery($slug: String!) {
      postsConnection(where: { tags_some: { tagSlug: $slug } }) {
        edges {
          node {
            id
            title
            postSlug
            createdAt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  const newArticleList: articleItemProps[] = []
  result?.postsConnection?.edges.forEach((article: any) => {
    newArticleList.push(article.node)
  })
  return newArticleList
}

const fakeData = {
  title: 'testing',
  slug: 'testing',
}

export const createCategory = async () => {
  const result = await fetch('/api/category', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fakeData),
  })

  return result.json()
}

export const addCategory = async () => {
  const mutation = gql`
    mutation addCategory($title: String!, $slug: String) {
      insert_category_one(object: { title: $title, slug: $slug }) {
        title
        slug
      }
    }
  `
  const result = await myGraphQlCLient.request(mutation, fakeData)
  return result
}

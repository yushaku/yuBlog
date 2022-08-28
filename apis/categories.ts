/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, gql } from 'graphql-request'
import { articleItemProps } from '../util/types/props'

const graphqlAPI = process.env.GRAPHQL_CMS_ENDPOINT || ''

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
  return result
}

export const getPostOfCategory = async (slug: string): Promise<articleItemProps[]> => {
  const query = gql`
    query MyQuery($slug: String!) {
      postsConnection(where: { category: { slug: $slug } }) {
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

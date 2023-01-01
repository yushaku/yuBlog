import { ResCallDb } from '@/util/types'
import { useQuery } from 'react-query'

export const getArticleDetail = async (id: string) => {
  if (!id) return

  return fetch(`/api/notion/${id}`, {
    method: 'GET',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

const key = 'notion'
const option = {
  cacheTime: Infinity,
  staleTime: 10000,
  refetchOnWindowFocus: false,
}

export const useGetArticle = (category: 'article') => {
  return useQuery(
    key,
    async (): Promise<ResCallDb> => {
      const data = await fetch(`/api/notion?category=${category}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return await data.json()
    },
    option,
  )
}

export const useGetArticleList = (id: string) => {
  return useQuery(
    key,
    async () => {
      const data = await fetch(`/api/notion/${id}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => data.json())

      return data
    },
    option,
  )
}

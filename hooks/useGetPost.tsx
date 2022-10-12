import { getBooksOfCategory, getPostsOfCategory } from '@/apis'
import { articleItemProps } from '@/util/types/props'
import { useEffect, useState } from 'react'

const useGetPost = (title: string, counter?: number) => {
  const [postList, setPostList] = useState<articleItemProps[]>([])

  useEffect(() => {
    const abortController = new AbortController()

    if (title === 'books' || title === 'article') {
      getBooksOfCategory(title, counter)
        .then((responsePostList) => {
          setPostList(responsePostList)
        })
        .catch((err) => console.error(err))
    } else {
      getPostsOfCategory(title, counter)
        .then((responsePostList) => {
          setPostList(responsePostList)
        })
        .catch((err) => console.error(err))
    }

    return () => {
      abortController.abort()
    }
  }, [title, counter])

  return postList
}

export default useGetPost

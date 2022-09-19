import { getBooksOfCategory, getPostOfCategory } from '@/apis'
import { articleItemProps } from '@/util/types/props'
import { useEffect, useState } from 'react'

const useGetPost = (title: string) => {
  const [postList, setPostList] = useState<articleItemProps[]>([])

  useEffect(() => {
    const abortController = new AbortController()

    if (title === 'books') {
      getBooksOfCategory(title)
        .then((responsePostList) => {
          setPostList(responsePostList)
        })
        .catch((err) => console.error(err))
    } else {
      getPostOfCategory(title)
        .then((responsePostList) => {
          setPostList(responsePostList)
        })
        .catch((err) => console.error(err))
    }

    return () => {
      abortController.abort()
    }
  }, [title])

  return postList
}

export default useGetPost

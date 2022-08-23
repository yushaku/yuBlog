import React, { useEffect, useState } from 'react'
import { getPostOfTags } from '../../apis'
import { articleItemProps } from '../../util/types/props'
import RelatedPostItem from './RelatedPostItem'

const RelatedPostList = ({ tagSlug }: { tagSlug: string }) => {
  const [relatedPostList, seRelatedPostList] = useState<articleItemProps[]>([])
  useEffect(() => {
    getPostOfTags(tagSlug).then((resData) => {
      seRelatedPostList(resData)
    })
  }, [tagSlug])

  console.log(relatedPostList)

  return (
    <div className="max-w-[1200px] mx-auto text-2xl mt-[70px]">
      <h1 className=" text-3xl dark:text-dark_accentColor">Related Post</h1>
      <ul className="flex gap-8 my-4 py-8 overflow-x-scroll scrollBar">
        {relatedPostList.map((item) => {
          return (
            <li key={item.id}>
              <RelatedPostItem
                id={item.id}
                featuredImage={item.featuredImage}
                title={item.title}
                postSlug={item.postSlug}
                createdAt={item.createdAt}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RelatedPostList

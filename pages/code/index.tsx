import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { getPostOfCategory } from '../../apis'
import CodeItem from '../../components/code/CodeItem'
import { articleItemProps } from '../../util/types/props'

const Coding = () => {
  const [codePostList, setArticleList] = useState<articleItemProps[]>([])
  useEffect(() => {
    getPostOfCategory('code').then((responseArticleList) => {
      setArticleList(responseArticleList)
    })
  }, [])

  return (
    <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
      <Head>
        <title>developer</title>
      </Head>
      <section className=" flex flex-col gap-[3rem] p-12 ">
        {codePostList.map((codeItem) => {
          return (
            <CodeItem
              key={codeItem.id}
              title={codeItem.title}
              excerpt={codeItem.excerpt || ''}
              tags={codeItem.tags}
              postSlug={codeItem.postSlug}
              featuredImage={codeItem.featuredImage}
              createdAt={codeItem.createdAt}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Coding

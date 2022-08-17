import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ArticleItem from '../../components/article/ArticleItem'
import { getPostOfCategory } from '../../apis'
import { articleItemProps } from '../../util/types/props'

const Article = () => {
  const [articleList, setArticleList] = useState<articleItemProps[]>([])
  useEffect(() => {
    getPostOfCategory('article').then((responseArticleList) => {
      setArticleList(responseArticleList)
    })
    return () => {
      console.log('remove call api')
    }
  }, [])

  console.log(articleList)

  return (
    <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
      <Head>
        <title>Article</title>
      </Head>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[6rem] items-center">
        {articleList &&
          articleList.map((article) => {
            return (
              <div key={article.id}>
                <ArticleItem
                  title={article.title}
                  featuredImage={article.featuredImage}
                  postSlug={article.postSlug}
                  tags={article.tags}
                  createdAt={article.createdAt}
                />
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default Article

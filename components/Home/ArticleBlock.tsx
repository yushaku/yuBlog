import React from 'react'

import useGetPost from '@/hooks/useGetPost'
import ArticleItem from './ArticleItem'
import { articleItemProps } from '@/util/types/props'

const ArticleBlock = () => {
  const articleList: articleItemProps[] = useGetPost('article', 3)
  const devList = useGetPost('code', 3)

  return (
    <div id="list_article" className="flex flex-col md:flex-row gap-8 my-[15vh]">
      <div id="Explore">
        <h1 className=" dark:text-dark_accentColor text-3xl">Article</h1>
        <p className=" border-t-4 border-red-400 w-[100px] py-4"></p>
        <ul className="">
          {articleList.map((itemArticle, index) => {
            return (
              <li key={index}>
                <ArticleItem
                  title={itemArticle.title}
                  postSlug={itemArticle.postSlug}
                  excerpt={itemArticle.excerpt as string}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div id="Explore">
        <h1 className=" dark:text-dark_accentColor text-3xl">developing</h1>
        <p className=" border-t-4 border-red-400 w-[170px] py-4"></p>
        <ul className="">
          {devList.map((itemArticle, index) => {
            return (
              <li key={index}>
                <ArticleItem
                  title={itemArticle.title}
                  postSlug={itemArticle.postSlug}
                  excerpt={itemArticle.excerpt as string}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ArticleBlock

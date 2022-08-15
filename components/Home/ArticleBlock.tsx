import React from 'react'
import ArticleItem from './ArticleItem'

const ArticleBlock = () => {
  return (
    <div id="list_article" className="flex flex-col md:flex-row gap-8 my-[15vh]">
      <div id="Explore">
        <h1 className=" dark:text-dark_accentColor text-3xl">Explore</h1>
        <p className=" border-t-4 border-red-400 w-[150px] py-4"></p>
        <ul className="">
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      </div>
      <div id="Latest_Articles">
        <h1 className=" dark:text-dark_accentColor text-3xl">Latest Articles</h1>
        <p className=" border-t-4 border-red-400 w-[150px] py-4"></p>
        <ul>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      </div>
    </div>
  )
}

export default ArticleBlock

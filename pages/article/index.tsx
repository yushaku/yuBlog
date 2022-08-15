import React from 'react'
import Head from 'next/head'
import ArticleItem from '../../components/article/ArticleItem'
const Article = () => {
  return (
    <div className="container px-4 mx-auto">
      <Head>
        <title>Article</title>
      </Head>
      <section className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </section>
      <section className=" flex py-8 overflow-x-scroll scrollBar mt-[130px]">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </section>
    </div>
  )
}

export default Article

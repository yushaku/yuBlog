import Head from 'next/head'
import React from 'react'
import ArticleItem from '../../components/article/ArticleItem'

const articleList = [
  {
    id: 'id',
    title: 'I made 100 CSS loaders for your next project',
    tags: [
      { name: 'tags', color: '#333' },
      { name: 'tags 2', color: '#333' },
    ],
    imageLink:
      'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    slug: 'slug',
    time: 'date here',
  },
  {
    id: 'id_2',
    title: 'I made 100 CSS loaders for your next project',
    tags: [
      { name: 'tags', color: '#333' },
      { name: 'tags 2', color: '#333' },
    ],
    imageLink:
      'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    slug: 'slug',
    time: 'date here',
  },
]

const Article = () => {
  return (
    <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
      <Head>
        <title>Article</title>
      </Head>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[6rem] items-center">
        {articleList.map((article) => {
          return (
            <div key={article.id}>
              <ArticleItem
                title={article.title}
                imageLink={article.imageLink}
                slug={article.slug}
                tags={article.tags}
                time={article.time}
              />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Article

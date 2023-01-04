import React from 'react'

import ArticleItem from './ArticleItem'

import { BsArrowRight } from 'react-icons/bs'

const ArticleBlock = () => {
  const articleList = [
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      title: 'test',
      postSlug: 'tets',
      excerpt: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
  ]

  return (
    <div id="list_article" className="flex flex-col lg:flex-row justify-between my-[15vh] gap-y-12">
      <div className="max-w-[900px]">
        <h1 className="dark:text-dark_accentColor text-3xl">RECENTLY PUBLISHED</h1>
        <ul className="grid gap-8 mt-10">
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

      <div className="sticky top-0">
        <h1 className="dark:text-dark_accentColor text-3xl">POPULAR CONTENT</h1>
        <ul className="max-w-[350px] mt-10 grid gap-2 text-xl pl-4">
          {articleList.map((item, index) => {
            return (
              <li key={index} className="flex group hover:text-dark_accentColor">
                <i className="text-dark_accentColor animationAll -translate-x-5 group-hover:-translate-x-3">
                  <BsArrowRight />
                </i>
                <h2>{item.title}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ArticleBlock

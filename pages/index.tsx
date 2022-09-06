import type { NextPage } from 'next'
import React from 'react'
import ArticleBlock from '@/components/Home/ArticleBlock'
import BookItem from '@/components/Home/BookItem'
import CategoryBlock from '@/components/Home/CatagoryBlock'
import { bookList } from '@/mocks/books'
import Layout from '@/components/layout'

const Home: NextPage = () => {
  return (
    <Layout title="Yushaku blog">
      <div className="relative h-[100vh] w-[100vw] bg-[url('../public/bg.jpg')] bg-cover bg-center"></div>

      <div className=" myContainer mt-[80px] ">
        <CategoryBlock />
        <ArticleBlock />

        <div id="bookBlock" className=" items-center text-center">
          <h2 className="text-3xl dark:text-dark_accentColor font-semibold my-8">Read my Book Notes</h2>
          <div className="flex gap-8 items-center justify-center flex-col lg:flex-row">
            {bookList.map((book) => (
              <div key={book.id}>
                <a href={book.link}>
                  <BookItem title={book.title} description={book.description} imageLink={book.imageLink} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="Subscribe" className="mt-[10vh] ">
          <h1 className="text-3xl dark:text-dark_accentColor my-4">💌 Subscribe to Sunday Snippets</h1>

          <div className="flex gap-4 justify-center items-center">
            <div className="">
              <p>Your emails always warm the cockles of my heart </p>
              <p>
                Join a growing community of more than 150,000 (🤯) friendly readers. Every Sunday I share actionable
                productivity tips, practical life advice, and high-quality insights from across the web, directly to
                your inbox.
              </p>
            </div>
            <form action="" className="flex flex-col">
              <input type="text" name="name" id="name" className="input" placeholder="Your name" />
              <input type="email" required name="email" id="email" className="input" placeholder="Your email" />
              <input type="submit" value="SUBSCRIBE" className="button" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

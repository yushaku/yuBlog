import type { NextPage } from 'next'
import React from 'react'
import ArticleBlock from '@/components/Home/ArticleBlock'
import CategoryBlock from '@/components/Home/CategoryBlock'
import BooksBlock from '@/components/Home/BooksBlock'
import Layout from '@/components/layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout title="Yushaku blog">
      <div>
        <div className="relative top-0 bottom-0 w-[100vw] h-[100vh]">
          <Image src="/bg.jpg" alt="yushaku logo background" layout="fill" />
        </div>

        <div
          id="Subscribe"
          className="max-w-[800px] absolute top-[30%] left-0 right-0 mx-auto text-xl backdrop-blur-sm p-12 rounded-lg"
        >
          <div className="text-3xl font-medium dark:text-dark_accentColor my-4">
            <h2>😀 Hey friends</h2>
            <h2 className="mt-1">I am Yushaku. I am a fullstack developer</h2>
          </div>

          <div className="">
            <div className="">
              <p>
                On this site we explore the strategies and tools that help us live happier, healthier, more productive
                lives.
              </p>
              <p>
                And over at Sunday Snippets - my weekly newsletter - I share actionable productivity tips and practical
                life advice. Sign up below to join a growing community of more than 160,000 friendly readers.
              </p>
            </div>
            <form action="" className="flex mt-6 items-center gap-4">
              <input
                type="email"
                required
                name="email"
                id="email"
                className="textInput w-[500px]"
                placeholder="Your email"
              />
              <input type="submit" value="SUBSCRIBE" className="button" />
            </form>
          </div>
        </div>
      </div>

      <div className=" myContainer mt-[80px] ">
        <CategoryBlock />
        <ArticleBlock />
        <BooksBlock />
      </div>
    </Layout>
  )
}

export default Home

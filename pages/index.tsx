import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import ArticleBlock from '@/components/Home/ArticleBlock'
import BooksBlock from '@/components/Home/BooksBlock'
import CategoryBlock from '@/components/Home/CategoryBlock'
import Layout from '@/components/layout'
import LoadingPage from '@/components/LoadingPage'
import useLoading from '@/hooks/useLoading'
import { delayShowOf } from '@/util/animate'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  const isLoading = useLoading()

  if (isLoading) return <LoadingPage />
  else
    return (
      <Layout title="Yushaku blog">
        <div>
          <div className="relative top-0 bottom-0 w-[100vw] h-[100vh]">
            <Image src="/bg.jpg" alt="yushaku logo background" layout="fill" loading="lazy" />
          </div>

          <div
            id="Subscribe"
            className="max-w-[800px] absolute top-[15%] md:top-[30%] left-0 right-0 mx-auto text-xl backdrop-blur-sm p-12 rounded-lg"
          >
            <div className="text-3xl font-medium dark:text-dark_accentColor my-4">
              <motion.h2 custom={2} variants={delayShowOf} initial="hidden" animate="visible">
                😀 Hey friends
              </motion.h2>
              <motion.h2 className="mt-1" custom={3} variants={delayShowOf} initial="hidden" animate="visible">
                I am Yushaku. I am a fullstack developer
              </motion.h2>
            </div>

            <div className="">
              <div className="">
                <motion.p custom={4} variants={delayShowOf} initial="hidden" animate="visible">
                  On this site we explore the strategies and tools that help us live happier, healthier, more productive
                  lives.
                </motion.p>
                <motion.p custom={5} variants={delayShowOf} initial="hidden" animate="visible">
                  And over at Sunday Snippets - my weekly newsletter - I share actionable productivity tips and
                  practical life advice. Sign up below to join a growing community of more than 160,000 friendly
                  readers.
                </motion.p>
              </div>
              <motion.div custom={7} variants={delayShowOf} initial="hidden" animate="visible">
                <form action="" className="flex flex-col md:flex-row mt-6 items-center gap-4">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="textInput w-[300px] md:w-[400px] lg:w-[500px]"
                    placeholder="Your email"
                  />
                  <input type="submit" value="SUBSCRIBE" className="button w-[300px]" />
                </form>
              </motion.div>
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

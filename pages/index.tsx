import React from 'react'
import ArticleBlock from '@/components/Home/ArticleBlock'
import CategoryBlock from '@/components/Home/CategoryBlock'
import Layout from '@/components/layout'
import LoadingPage from '@/components/LoadingPage'
import useLoading from '@/hooks/useLoading'
import { delayShowOf } from '@/util/animate'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDoubleDown } from 'react-icons/bs'
import TypeIt from 'typeit-react'

const Home: NextPage = () => {
  const isLoading = useLoading()

  if (isLoading) return <LoadingPage />
  else
    return (
      <Layout title="Yushaku blog">
        <div className="container mx-auto h-[90vh] flex items-center justify-center">
          <div id="Subscribe" className="max-w-[900px] text-xl rounded-lg">
            <div className="text-5xl font-medium dark:text-dark_accentColor my-4 leading-[130%]">
              <motion.h2 custom={2} variants={delayShowOf} initial="hidden" animate="visible">
                🤓 Hey friends
              </motion.h2>
              <motion.h2 className="mt-1" custom={3} variants={delayShowOf} initial="hidden" animate="visible">
                <Intro />
              </motion.h2>
            </div>

            <div className="">
              <div className="grid gap-2">
                <motion.p custom={4} variants={delayShowOf} initial="hidden" animate="visible">
                  My goal with this blog is to create helpful content for front-end web devs, and my newsletter is no
                  different! I&apos;ll let you know when I publish new content, and I&apos;ll even share{' '}
                  <i>exclusive newsletter-only</i> content now and then.
                </motion.p>
                <motion.p custom={5} variants={delayShowOf} initial="hidden" animate="visible">
                  No spam, unsubscribe at any time.
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
          <div>
            <Image src="/learn-coding.png" alt="yushaku logo background" loading="lazy" width={500} height={500} />
          </div>
        </div>

        <div className="w-full h-[15vh] flex justify-center text-5xl text-dark_accentColor animate-bounce cursor-pointer">
          <Link href={'#content-home'}>
            <BsChevronDoubleDown />
          </Link>
        </div>

        <div id="content-home" className="max-w-[1300px] p-6 mx-auto mt-[80px] lg:p-0">
          <CategoryBlock />
          <ArticleBlock />
        </div>
      </Layout>
    )
}

export default Home

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Web Developer.")
          .pause(750)
          .delete(14)
          .pause(500)
          .type('full Developer.')
          .pause(750)
          .delete(18)
          .type('Yushaku.')

        return instance
      }}
    />
  )
}

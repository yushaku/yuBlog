import Head from 'next/head'
import React from 'react'
import CodeItem from '../../components/code/CodeItem'

const arrCodeList = [
  {
    index: '1',
    title: 'Learn Redis In 15 Minutes with Real life example',
    tags: ['html', 'css', 'js'],
    excerpt: 'In this video we have explained, what is redis! How redis caching works',
    imageLink: 'string',
    slug: 'slug1',
  },
  {
    index: '2',
    title: 'Top 9 ways to become a successful self-taught developer',
    tags: ['html', 'css', 'js'],
    excerpt:
      'The term "self-taught" developer is frequently used to refer to people who have studied coding/programming on their own by reading books, taking online classes and doing other kinds of independent study',
    imageLink: 'string',
    slug: 'slug2',
  },
  {
    index: '3',
    title: 'Automated Backups with cron and RClone',
    tags: ['html', 'css', 'js'],
    excerpt:
      'This article will show you how to use RClone and cron to automated file backups in a Linux Operating System.',
    imageLink: 'string',
    slug: 'slug3',
  },
]

const Coding = () => {
  return (
    <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
      <Head>
        <title>developer</title>
      </Head>
      <section className=" flex flex-col gap-[3rem] p-12 ">
        {arrCodeList.map((codeItem, index) => {
          return (
            <CodeItem
              key={codeItem.index}
              title={codeItem.title}
              excerpt={codeItem.excerpt}
              tags={codeItem.tags}
              slug={codeItem.slug}
              imageLink={codeItem.imageLink && index === 0}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Coding

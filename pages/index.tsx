import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>Yushaku Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home

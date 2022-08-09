import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yushaku Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-[100vh] w-[100vw] bg-[url('../public/bg.jpg')] bg-cover bg-center">
        <div className="absolute top-[60%] left-[5%] w-[90%] md:left-[10%] md:w-[80%] lg:top-[45%] lg:left-[20%] lg:w-[70%]">
          <h1 className="py-4 text-[50px] font-semibold text-dark_textColor md:text-[60px] lg:text-[70px]">
            Fuck Your Feelings
          </h1>
          <p className="text-[24px] text-dark_textColor md:text-[28px]">
            There are feelings and then there are meta-feelings. Life is not about feeling amazing all the time, it is
            about understanding both the good and bad feelings.
          </p>
        </div>
      </div>
      <div>
        <h1>ok</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet harum autem. Quis, dolorem. Similique,
          consequuntur laborum nobis corporis voluptatum corrupti facere quod porro quis saepe officia dolores deleniti
          mollitia.
        </p>
      </div>
    </div>
  )
}

export default Home

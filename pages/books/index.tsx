import React from 'react'
import Head from 'next/head'
import BookItem from '@/components/books/BookItem'

const BooksNote = () => {
  return (
    <div className="container px-4 mx-auto">
      <Head>
        <title>Books</title>
      </Head>
      <section className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </section>
      <section className=" flex py-8 overflow-x-scroll scrollBar mt-[130px]">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </section>
    </div>
  )
}

export default BooksNote

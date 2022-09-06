import React from 'react'
import BookItem from '@/components/books/BookItem'
import useGetPost from '@/hooks/useGetPost'
import Layout from '@/components/layout'

const BooksNote = () => {
  const bookList = useGetPost('books')
  console.log(bookList)

  return (
    <Layout title="Books">
      <div className="container px-4 mx-auto min-h-[65vh]">
        <section className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
          {bookList.map((bookItem) => (
            <BookItem
              title={bookItem.title}
              excerpt={bookItem.excerpt}
              tags={bookItem.tags}
              featuredImage={bookItem.featuredImage}
              postSlug={bookItem.postSlug}
              createdAt={bookItem.createdAt}
              key={bookItem.id}
              authorId={bookItem.authorId}
            />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default BooksNote

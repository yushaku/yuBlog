import React from 'react'
import BookItem from '@/components/books/BookItem'
import useGetPost from '@/hooks/useGetPost'
import Layout from '@/components/layout'
import LoadingSkeletonPage from '@/components/skeleton/LoadingSkeletonPage'
import useLoading from '@/hooks/useLoading'

const BooksNote = () => {
  const bookList = useGetPost('books', 8)
  const isLoading = useLoading()

  if (isLoading) return <LoadingSkeletonPage />
  else
    return (
      <Layout title="Books">
        <div className="container px-4 mx-auto min-h-[65vh]">
          <ul className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
            {bookList.map((bookItem) => (
              <li key={bookItem.id}>
                <BookItem
                  title={bookItem.title}
                  excerpt={bookItem.excerpt}
                  tags={bookItem.tags}
                  featuredImage={bookItem.featuredImage}
                  postSlug={bookItem.postSlug}
                  createdAt={bookItem.createdAt}
                  authorId={bookItem.authorId}
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
}

export default BooksNote

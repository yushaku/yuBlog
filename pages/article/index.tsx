import React from 'react'
import Layout from '@/components/layout'
import useGetPost from '@/hooks/useGetPost'
import useLoading from '@/hooks/useLoading'
import LoadingPage from '@/components/LoadingPage'
import BookItem from '@/components/books/BookItem'

const Article = () => {
  const bookList = useGetPost('article', 8)
  const isLoading = useLoading()

  if (isLoading) return <LoadingPage />
  else
    return (
      <Layout title="Article">
        <div className="container px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
          <section className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
            {bookList.map((bookItem) => (
              <BookItem
                key={bookItem.id}
                title={bookItem.title}
                excerpt={bookItem.excerpt}
                tags={bookItem.tags}
                featuredImage={bookItem.featuredImage}
                postSlug={bookItem.postSlug}
                createdAt={bookItem.createdAt}
                authorId={bookItem.authorId}
              />
            ))}
          </section>
        </div>
      </Layout>
    )
}

export default Article

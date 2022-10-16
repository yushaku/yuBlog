import React from 'react'
import useGetPost from '@/hooks/useGetPost'
import RelatedPostItem from '../relatedPost/RelatedPostItem'

const BooksBlock = () => {
  const bookList = useGetPost('books', 3)

  return (
    <div id="bookBlock" className=" items-center text-center">
      <h2 className="text-3xl dark:text-dark_accentColor font-semibold my-8">Read my Book Notes</h2>

      <ul className="flex flex-col gap-8 justify-center items-center lg:flex-row">
        {bookList.map((book) => (
          <li key={book.id}>
            <RelatedPostItem
              id={book.id}
              title={book.title}
              featuredImage={book?.featuredImage}
              postSlug={book.postSlug}
              createdAt={book.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksBlock

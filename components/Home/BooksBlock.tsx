import React from 'react'
import Link from 'next/link'
import BookItem from '@/components/Home/BookItem'
import useGetPost from '@/hooks/useGetPost'

const BooksBlock = () => {
  const bookList = useGetPost('books', 2)

  return (
    <div id="bookBlock" className=" items-center text-center">
      <h2 className="text-3xl dark:text-dark_accentColor font-semibold my-8">Read my Book Notes</h2>

      <ul className="flex flex-col gap-8 justify-center items-center lg:flex-row">
        {bookList.map((book) => (
          <li key={book.id}>
            <Link href={`posts/${book.postSlug}`}>
              <BookItem
                title={book.title}
                description={book.excerpt as string}
                imageLink={book?.featuredImage?.url}
                slug={book.postSlug}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksBlock

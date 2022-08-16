import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BookItem = () => {
  return (
    <article id="card" className="">
      <Link href="">
        <div className=" cursor-pointer">
          <header id="card-header " className="mb-auto">
            <p className="text-[14px] mb-[1rem] text-[#7a7a8c]">Sep 11th 2020</p>
            <h2 id="card-header_title" className="text-[20px] m-[0.25rem] mr-0 mb-auto cursor-pointer">
              Never forget
            </h2>
          </header>
          <div id="card-author">
            <a id="author-avatar" href="#">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </a>
            <svg id="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Author</div>
              Jeff Delaney
            </div>
          </div>
        </div>
      </Link>

      <div id="tags" className="">
        <a href="#">html</a>
        <a href="#">css</a>
        <a href="#">web-dev</a>
      </div>
    </article>
  )
}

export default BookItem

import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="h-[75vh] flex items-center justify-center flex-col">
      <h1 className="text-[200px]">404</h1>
      <p className="text-2xl">oh, sorry this page note found</p>
      <Link href="/">
        <span className="text-2xl dark:text-dark_accentColor text-light_accentColor">go to home page</span>
      </Link>
    </div>
  )
}

export default NotFoundPage

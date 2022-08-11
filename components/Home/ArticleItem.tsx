import React from 'react'

const ArticleItem = () => {
  return (
    <li className="flex items-center justify-center p-4 m-4 dark:bg-dark_subBackground bg-light_subBackground rounded-md">
      <i className="text-5xl">📖</i>
      <div className="px-4">
        <h2 className="text-3xl dark:text-dark_accentColor">Book summaries & notes</h2>
        <p className="text-xl">notes, highlights and review of my favourite fiction and non-fiction books</p>
      </div>
    </li>
  )
}

export default ArticleItem

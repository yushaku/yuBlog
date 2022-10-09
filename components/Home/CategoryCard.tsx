import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryCard = ({ title, desc, link, icon }: any) => {
  return (
    <li className=" border-2 p-8 text-center rounded-lg max-w-[400px] cursor-pointer">
      <Link href={`/${link}`}>
        <div>
          <p>{icon}</p>
          <h2 className="text-4xl font-semibold dark:text-dark_accentColor my-2 ">{title}</h2>
          <p className="text-xl">{desc}</p>
        </div>
      </Link>
    </li>
  )
}

export default CategoryCard

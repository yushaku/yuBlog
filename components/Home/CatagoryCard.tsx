import React from 'react'
// import Image from 'next/image'

const CategoryCard = () => {
  return (
    <li className=" border-2 p-8 text-center rounded-lg max-w-[400px]">
      {/* <Image alt="icon" src="" /> */}
      <i>🚀</i>
      <h2 className="text-4xl font-semibold dark:text-dark_accentColor my-2 ">Productivity</h2>
      <p className="text-xl">How to execute efficiently, make time for what matters and have fun along the way.</p>
    </li>
  )
}

export default CategoryCard

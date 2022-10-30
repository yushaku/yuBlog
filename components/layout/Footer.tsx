import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { getCategories } from '../../apis'
import { Category } from '../../util/types/props'

const Footer = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((data) => setCategoryList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <footer className="flex flex-col justify-evenly items-center w-[100vw] h-[15vh] p-8 mt-[10vh] text-xl md:flex-row bg-light_subBackground dark:bg-dark_subBackground shadow-md">
      <div id="copy-wrighting" className="flex items-center">
        <Image src="/logo.png" alt="yushaku logo" width={50} height={50} loading="lazy" />
        <p className="dark:bg-dark_accentColor bg-light_accentColor w-[2px] h-[50px] mx-4"></p>
        <div>
          <h2 className="">
            Copy-writer by <span className="dark:text-dark_accentColor font-bold">Yushaku</span>
          </h2>
          <p className=" dark:text-dark_subTextColor">@2022 yushaku-blog</p>
        </div>
      </div>

      <div id="nav" className=" hidden lg:flex lg:items-center">
        <ul className="flex gap-8">
          {categoryList.map((item) => (
            <li key={item.id} className="dark:text-dark_subTextColor">
              <a href={item.slug}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div id="social" className="flex items-center m-4">
        <ul className="flex gap-8">
          <li className="icon text-2xl md:text-4xl">
            <a href="https://github.com/yushaku">
              <AiFillGithub />
            </a>
          </li>
          <li className="icon text-2xl md:text-4xl">
            <a href="https://www.linkedin.com/in/levanson180200/">
              <AiFillLinkedin />
            </a>
          </li>
          <li className="icon text-2xl md:text-4xl">
            <a href="https://www.instagram.com/yushaku.1802/">
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { navbarListItem } from '@/util/animate'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  onShowSideBar: () => void
  isShowNavbar: boolean
}

const Sidebar = ({ onShowSideBar, isShowNavbar }: Props) => {
  return (
    <nav
      className={`w-[100vw] h-[100vh] fixed top-0 right-0  dark:bg-dark_subBackground/40 backdrop-blur-sm ${
        !isShowNavbar && 'hidden'
      }`}
    >
      <AiOutlineClose
        className="absolute right-[46px] text-[35px] top-5 dark:text-dark_accentColor"
        onClick={onShowSideBar}
      />

      <ul className="w-[70vw] h-[100vh] dark:bg-dark_subBackground float-right flex flex-col justify-center gap-[60px] px-12 ">
        {navbarListItem.map((navItem) => {
          return (
            <li key={navItem.id} className="flex gap-2 flex-col items-center text-2xl text-dark_textColor">
              <p className=" text-dark_accentColor ">0{navItem.id}.</p>
              <a className=" hover:text-dark_accentColor" href={navItem.link}>
                {navItem.title}
              </a>
            </li>
          )
        })}
        <li className="flex gap-2 flex-col items-center text-2xl text-dark_textColor">
          <p className=" text-dark_accentColor ">03.</p>
          <a className=" hover:text-dark_accentColor" href="https://yu-portfolio.vercel.app">
            about
          </a>
        </li>

        <li className="flex gap-2 flex-col items-center">
          <button className="button text-2xl">dark theme</button>
        </li>
      </ul>
      <div />
    </nav>
  )
}

export default Sidebar

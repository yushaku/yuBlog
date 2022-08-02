import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import React from 'react'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const renderIconTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'light') {
      return <MdDarkMode role="button" onClick={() => setTheme('dark')} />
    } else {
      return <MdLightMode role="button" onClick={() => setTheme('light')} />
    }
  }

  return (
    <header>
      <div id="logo">
        <a href="" className="flex items-center gap-2">
          <Image alt="yushaku" src="/logo.png" width={35} height={35} />
          <span className="text-[24px] font-semibold dark:text-dark_accentColor">Yushaku</span>
        </a>
      </div>

      <div id="navbar">
        <ul className="flex gap-8 text-xl font-semibold dark:text-dark_textColor">
          <li className="onTextHover">
            <a href="">Article</a>
          </li>
          <li className="onTextHover">
            <a href="">Books notes</a>
          </li>
          <li className="onTextHover">
            <a href="">About</a>
          </li>
          <li className="onTextHover">
            <a href="">Tech</a>
          </li>
        </ul>
      </div>

      <div id="social">
        <ul className="flex gap-8">
          <li className="icon">{renderIconTheme()}</li>
          <li className="icon">
            <a href="https://github.com/yushaku">
              <AiFillGithub />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/levanson180200/">
              <AiFillLinkedin />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.instagram.com/yushaku.1802/">
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

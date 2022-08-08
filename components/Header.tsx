/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineUnorderedList } from 'react-icons/ai'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navbarEffect, navbarListItem } from '../mocks/Navbar'
import Sidebar from './Sidebar'
import { useRecoilState } from 'recoil'
import { showSidebar } from '../atoms/storeAtom'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [isShowNavbar, setIsShowNavbar] = useRecoilState(showSidebar)
  const { scrollYProgress } = useScroll()
  const [scrollDirection, setScrollDirection] = useState('up')
  // const [transparentHeader, setTransparentHeader] = useState(true)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5) && scrollY > 50) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  // useEffect(() => {
  //   console.log(transparentHeader)
  //   const currentY = window.pageYOffset
  //   const updateHeaderBG = () => {
  //     if (currentY > 50) {
  //       setTransparentHeader(false)
  //     }
  //   }
  //   window.addEventListener('scroll', updateHeaderBG)
  //   return () => {
  //     window.removeEventListener('scroll', updateHeaderBG)
  //   }
  // }, [transparentHeader])

  const handleShowSideBar = () => {
    setIsShowNavbar(!isShowNavbar)
  }

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  /** */

  const renderIconTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'light') {
      return <MdDarkMode role="button" onClick={() => setTheme('dark')} />
    } else {
      return <MdLightMode role="button" onClick={() => setTheme('light')} />
    }
  }

  // ${transparentHeader ? 'bg-transparent' : 'bg-light_subBackground dark:bg-dark_background'}

  return (
    <>
      <header
        className={`fixed top-0 ${
          scrollDirection === 'up' ? 'top-0' : '-top-[8vh]'
        } left-0 z-50 w-full  bg-light_subBackground transition-all duration-1000
        ease-in-out dark:bg-dark_background  
        `}
      >
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={navbarEffect}
          className="flex h-[8vh] items-center justify-between px-12"
        >
          <div id="logo">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image alt="yushaku" src="/logo.png" width={35} height={35} />
                <span className="text-[24px] font-semibold dark:text-dark_accentColor">Yushaku</span>
              </div>
            </Link>
          </div>

          <div id="navbar" className="hidden md:block">
            <ul className="flex text-xl font-semibold gap-9 dark:text-dark_textColor">
              {navbarListItem.map((navItem) => {
                return (
                  <motion.li
                    key={navItem.id}
                    className="onTextHover"
                    custom={navItem.id}
                    initial="hidden"
                    animate="visible"
                    variants={navbarEffect}
                  >
                    <Link href={navItem.link}>{navItem.title}</Link>
                  </motion.li>
                )
              })}
            </ul>
          </div>

          <div id="social" className="hidden lg:block">
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

          <div id="menubar" className="text-4xl cursor-pointer icon md:hidden" onClick={handleShowSideBar}>
            <AiOutlineUnorderedList />
          </div>
        </motion.div>

        {isShowNavbar && <Sidebar onShowSideBar={handleShowSideBar} renderIconTheme={renderIconTheme} />}

        <motion.div style={{ scaleX }} className="h-[5px] origin-left bg-dark_accentColor "></motion.div>
      </header>
    </>
  )
}

export default Header

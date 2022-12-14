/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { motion, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { navbarEffect, navbarListItem } from '@/util/animate'
import AuthSession from '@/components/auth/AuthSession'
import Sidebar from '@/components/navbar/Sidebar'

const Header = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(false)
  const { scrollYProgress } = useScroll()
  const [scrollDirection, setScrollDirection] = useState('up')
  const [transparentHeader, setTransparentHeader] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setTransparentHeader(true)
      } else {
        setTransparentHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleShowSideBar = () => {
    setIsShowNavbar(!isShowNavbar)
  }

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <header
        className={`${scrollDirection === 'up' ? 'top-0' : '-top-[8vh]'}
        ${!transparentHeader ? 'bg-transparent' : 'shadow-md bg-light_subBackground dark:bg-dark_background'}
        fixed top-0  left-0 z-50 w-full  transition-all duration-1000 ease-in-out 
        `}
      >
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={navbarEffect}
          className="flex h-[8vh] items-center justify-between px-12"
        >
          <div id="logo" className=" cursor-pointer">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image alt="yushaku" src="/logo.png" width={35} height={35} loading="lazy" />
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
                    className="onTextHover text-[20px]"
                    custom={navItem.id}
                    initial="hidden"
                    animate="visible"
                    variants={navbarEffect}
                  >
                    <Link href={`/${navItem.link}`}>{navItem.title}</Link>
                  </motion.li>
                )
              })}
              <motion.li
                className="onTextHover text-[20px]"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={navbarEffect}
              >
                <Link href={`https://yu-portfolio.vercel.app/`}>about</Link>
              </motion.li>
            </ul>
          </div>

          <div id="social" className="hidden lg:block">
            <AuthSession />
          </div>

          <div id="menubar" className="text-4xl cursor-pointer icon md:hidden" onClick={handleShowSideBar}>
            <AiOutlineUnorderedList />
          </div>
        </motion.div>

        <Sidebar onShowSideBar={handleShowSideBar} isShowNavbar={isShowNavbar} />

        <motion.div style={{ scaleX }} className="h-[5px] origin-left statusGradin "></motion.div>
      </header>
    </>
  )
}

export default Header

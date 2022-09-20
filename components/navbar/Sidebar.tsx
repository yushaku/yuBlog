/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion'
import React from 'react'
import { navbarListItem, sidebarEffect, sidebarItem, sidebarListItem } from '@/mocks/Navbar'
import { AiFillCloseCircle } from 'react-icons/ai'

interface props {
  onShowSideBar: () => void
}

const Sidebar = ({ onShowSideBar }: props) => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={sidebarEffect}
      className="w-[70vw] h-[100vh] fixed top-0 right-0 z-50 dark:bg-dark_subBackground backdrop-blur-md GrassBg"
    >
      <AiFillCloseCircle
        className="absolute right-[46px] text-[44px] top-5 dark:text-dark_accentColor"
        onClick={onShowSideBar}
      />

      <motion.ul variants={sidebarListItem} className="flex flex-col justify-center gap-[60px] px-12 w-[100%] h-[100%]">
        {navbarListItem.map((navItem) => {
          return (
            <motion.li
              variants={sidebarItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={navItem.id}
              className="flex gap-2 text-4xl text-dark_textColor"
            >
              <p className=" text-dark_accentColor">0{navItem.id}.</p>
              <a href={navItem.link}>{navItem.title}</a>
            </motion.li>
          )
        })}
        <motion.li initial="hidden" animate="visible" className="text-4xl icon text-dark_accentColor">
          {/* {renderIconTheme()} */}
        </motion.li>
      </motion.ul>
      <motion.div />
    </motion.nav>
  )
}

export default Sidebar

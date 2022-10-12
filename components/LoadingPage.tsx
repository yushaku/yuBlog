import { motion } from 'framer-motion'
import React from 'react'

const name = 'Loading...'

function LoadingPage() {
  const arrayOfName = name.split('')

  return (
    <div
      className="w-[100vw] h-[100vh]
      flex justify-center items-center flex-col
      dark:bg-bgDark dark:text-[#f5f5f7]"
    >
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 500,
        }}
        src="/logo.png"
        alt="yushaku"
        className="w-[100px] h-[100px]"
      />
      <div className="mt-4" id="wave">
        {arrayOfName.map((keyword, index) => {
          return (
            <span
              style={{ '--id': index } as React.CSSProperties}
              key={index}
              className={`relative px-[2px] inline-block uppercase text-dark_accentColor`}
            >
              {keyword}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default LoadingPage

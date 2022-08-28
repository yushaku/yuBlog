import { motion } from 'framer-motion'
import React from 'react'

function LoadingPage() {
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

      <h3 className="mt-4 text-3xl text-colorGreen">Yushaku</h3>
    </div>
  )
}

export default LoadingPage

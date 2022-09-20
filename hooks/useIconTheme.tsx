import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import React from 'react'

const useIconTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (currentTheme === 'light') {
    return <MdDarkMode role="button" onClick={() => setTheme('dark')} />
  } else {
    return <MdLightMode role="button" onClick={() => setTheme('light')} />
  }
}

export default useIconTheme

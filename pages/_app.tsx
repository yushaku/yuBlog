import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp

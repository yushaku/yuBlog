import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
        <>
          <Header />
          <Metadata />
          <Component {...pageProps} />
          <Footer />
        </>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp

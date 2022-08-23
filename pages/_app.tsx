import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'
import 'highlight.js/styles/night-owl.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
      <>
        <Header />
        <Metadata />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default MyApp

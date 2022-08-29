import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
      <SessionProvider session={session}>
        <>
          <Header />
          <Metadata />
          <Component {...pageProps} />
          <Footer />
        </>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

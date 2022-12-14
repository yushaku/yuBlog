import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="dark">
      <SessionProvider session={session}>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

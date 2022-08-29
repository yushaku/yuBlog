import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Layout from '@/components/layout'
import '@/styles/globals.css'
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

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
      <SessionProvider session={session}>
        <>
          <Component {...pageProps} />
        </>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

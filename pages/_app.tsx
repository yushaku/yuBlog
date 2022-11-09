import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="dark">
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

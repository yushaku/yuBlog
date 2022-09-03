import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Layout from '@/components/layout'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

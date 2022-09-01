import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const MeasurementId = process.env.MEASUREMENT_ID

  return (
    <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="dark">
      <SessionProvider session={session}>
        <>
          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${MeasurementId}`} />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${MeasurementId}');
            `}
          </Script>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

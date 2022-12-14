import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  keywords: string
  description: string
  children: any
}

const Layout = ({ title, children, keywords, description }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" key="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="yushaku" key="yushaku" content="dev js" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Clothing Store" />
        <meta property="og:description" content="Come to my store for great apparel!" />
        <meta property="og:url" content="https://myclothingstore.com/" />
        <meta property="og:type" content="website" />
      </Head>

      {children}
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'yushaku blog',
  description: 'developer',
  keywords: 'reactJs, nextJs, javascript',
}

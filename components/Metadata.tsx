import React from 'react'
import Head from 'next/head'

const Metadata = () => {
  return (
    <Head>
      <meta name="yushaku" key="yushaku" content="dev js" />
      <meta name="description" key="description" content="welcom to yushaku blog!" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta name="keywords" content="BLog, developer conent" />
      {/* <meta httpEquiv="refresh" content="0; url=http://example.com" /> */}
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default Metadata

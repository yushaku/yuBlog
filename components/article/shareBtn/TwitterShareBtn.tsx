import React from 'react'
import { TwitterShareButton, TwitterIcon } from 'next-share'

const TwitterShareBtn = ({ url }: { url: string }) => {
  return (
    <TwitterShareButton url={url} title={'next-share is a social share buttons for your next React apps.'}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  )
}

export default TwitterShareBtn

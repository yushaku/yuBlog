import { FacebookShareButton, FacebookIcon } from 'next-share'
import React from 'react'

const FaceBookShareBtn = ({ url }: { url: string }) => {
  // console.log(url)
  return (
    <FacebookShareButton
      url={url}
      quote={'next-share is a social share buttons for your next React apps.'}
      hashtag={'#next-share'}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  )
}

export default FaceBookShareBtn

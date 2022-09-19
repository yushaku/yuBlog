import React from 'react'
import { LinkedinShareButton, LinkedinIcon } from 'next-share'

const LinkedinShareBtn = ({ url }: { url: string }) => {
  return (
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  )
}

export default LinkedinShareBtn

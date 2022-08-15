import React from 'react'
import CatagoryCard from './CatagoryCard'

const CatagoryBlock = () => {
  return (
    <div id="List_catagory px-2">
      <div className=" flex flex-col items-center">
        <h1 className=" text-3xl">Check out my Ultimate Guides</h1>
        <svg className=" m-6" width="57" height="61" viewBox="0 0 57 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
              fill="#333"
              fillOpacity=".85"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path transform="rotate(148.25 56.2 41.845)" fill="#fff" d="M56.2 41.845h35.638v49.209H56.2z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
      </ul>
    </div>
  )
}

export default CatagoryBlock

import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Link from 'next/link'
import { articleItemProps } from '../../util/types/props'

const CodeItem = ({ title, tags, excerpt, featuredImage, postSlug, createdAt }: articleItemProps) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale bg-light_secondBackground dark:bg-dark_subBackground dark:text-dark_textColor"
      glareEnable={true}
      glareMaxOpacity={0.2}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      perspective={3500}
      scale={1.02}
    >
      <div className="inner-element w-[80%] cursor-pointer flex flex-col justify-center items-start">
        <Link href={`/posts/${postSlug}`}>
          <div>
            {featuredImage && (
              <div className="flex items-center justify-center">
                <Image src={featuredImage.url} alt={title} width={1000} height={400} className="rounded-[20px]" />
              </div>
            )}
            <h1 className="text-3xl py-2 dark:text-dark_accentColor">{title}</h1>
            <p className="text-xl line-clamp-2">{excerpt}</p>
          </div>
        </Link>

        <div className="text-xl py-2">
          <ul className="flex gap-2">
            {tags.map((tagItem, index) => {
              return (
                <li
                  key={index}
                  className=" rounded-xl px-4 bg-light_accentColor text-dark_textColor dark:bg-dark_subTextColor dark:text-dark_accentColor font-medium"
                >
                  {tagItem.title}
                </li>
              )
            })}
          </ul>
        </div>

        <div id="function btn" className="flex justify-between items-center w-[100%]">
          <div className="flex gap-4">
            <span className="flex gap-1">
              <AiOutlineHeart className="icon " />
              reactions
            </span>
            <span className="flex gap-1">
              <AiOutlineComment className="icon " />
              comments
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p>3 min read</p>
            <button className="button">save</button>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default CodeItem

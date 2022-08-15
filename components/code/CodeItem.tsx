import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Link from 'next/link'

type codeItemProps = {
  title: string
  tags: string[]
  excerpt: string
  imageLink?: string | boolean
  slug: string
}
const CodeItem = ({ title, tags, excerpt, imageLink, slug }: codeItemProps) => {
  console.log(slug)
  return (
    <Tilt
      className="parallax-effect-glare-scale cursor-pointer dark:bg-dark_subBackground dark:text-dark_textColor"
      glareEnable={true}
      glareMaxOpacity={0.2}
      tiltMaxAngleX={1}
      tiltMaxAngleY={1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      perspective={500}
      scale={1.02}
    >
      <div className="inner-element w-[80%] ">
        <Link href={`/${slug}`}>
          <>
            {imageLink && (
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1660567368387-33950e914e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt={title}
                  width={1000}
                  height={400}
                  className="rounded-[20px]"
                />
              </div>
            )}
            <h1 className="text-3xl py-2 dark:text-dark_accentColor">{title}</h1>
            <p className="text-xl line-clamp-2">{excerpt}</p>
          </>
        </Link>

        <div className="text-xl py-2">
          <ul className="flex gap-2">
            {tags.map((tagItem, index) => {
              return (
                <li key={index} className=" rounded-xl dark:bg-dark_subTextColor px-2 text-dark_accentColor">
                  {tagItem}
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

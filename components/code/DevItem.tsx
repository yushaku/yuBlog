import React from 'react'
import Tilt from 'react-parallax-tilt'
import { articleItemProps } from '@/util/types/props'
import moment from 'moment'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends articleItemProps {
  index: number
}

const DevItem = ({ index, title, tags, excerpt, featuredImage, postSlug, createdAt }: Props) => {
  const formatCreatedAt = moment(createdAt).format('LL')

  return (
    <Tilt
      className="parallax-effect-glare-scale"
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      glareEnable
      glareMaxOpacity={0.2}
      scale={1.02}
      perspective={2000}
      glareBorderRadius="10px"
      key={index}
    >
      <div
        id="inner-element"
        className={`relative flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} lg:w-[80%] mx-auto py-4`}
      >
        <div className="image md:w-[60%] lg:w-[70%] xl:w-[60%]">
          <Image src={featuredImage.url} alt={title} width={1500} height={800} loading="lazy" />
        </div>

        <div
          className={`absolute top-0 bottom-0 left-0
                ${
                  index % 2 === 0
                    ? 'md:left-0 md:right-[200px] md:items-start justify-start'
                    : 'md:right-0 md:left-[200px] md:items-end justify-end '
                }
                bg-[#0a192f]/70 md:bg-[#0a192f]/0 md:px-10 flex justify-center flex-col `}
        >
          <Link href={`posts/${postSlug}`}>
            <div className=" cursor-pointer">
              <h6 className="dark:text-dark_textColor">Time: {formatCreatedAt} </h6>
              <div className="md:bg-dark_subBackground/70 md:py-6 md:px-2 rounded-lg">
                <h3 className="text-2xl font-semibold dark:text-dark_accentColor text-light_accentColor">{title}</h3>
                <p
                  className={`py-4 ${
                    index % 2 == 0 ? 'pr-4' : 'pl-4'
                  }text-xl text-dark_textColor md:py-2 md:rounded-lg`}
                >
                  {excerpt}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex gap-3 text-dark_textColor">
            {tags.map((tag, index) => {
              return (
                <span className=" text-dark_accentColor py-2 text-xl" key={index}>
                  <Link href={`tags/${tag.tagSlug}`}>{tag.title}</Link>
                </span>
              )
            })}
          </div>

          <div className="pt-4 flex gap-4 text-dark_textColor">
            <span className="text-2xl hover:dark:text-dark_accentColor hover:text-light_accentColor">
              <AiOutlineHeart />
            </span>
            <span className="text-2xl hover:dark:text-dark_accentColor hover:text-light_accentColor">
              <AiOutlineComment />
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default DevItem

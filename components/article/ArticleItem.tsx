import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'
import { BlogPost } from '@/util/types/notion'

const ArticleItem = ({ title, tags, image, date, id }: BlogPost) => {
  const formatCreatedAt = moment(date).format('LL')
  return (
    <div className=" rounded-2xl w-[250px]">
      <section className="flex flex-col rounded-xl dark:bg-dark_subBackground">
        <Link href={`/posts/${id}`}>
          <div className="cursor-pointer">
            <Image src={image} alt={title} width={312} height={170} className="rounded-lg" loading="lazy" />
            <div className="px-4 pt-2 pb-4">
              <h1 className="text-md line-clamp-2 font-semibold dark:text-dark_accentColor">{title}</h1>
              <h3 className="text-sm dark:text-dark_subTextColor">{formatCreatedAt}</h3>
            </div>
          </div>
        </Link>

        <div id="TAGS">
          <ul className="flex gap-2 items-start mt-6 mb-4 mx-4">
            {tags &&
              tags.map((tag) => {
                return (
                  <Link href={`tags/${tag.name}`} key={tag.id}>
                    <li
                      style={{ backgroundColor: tag.color, color: '#333' }}
                      className={`px-4 rounded-lg text-sm font-medium cursor-pointer`}
                    >
                      {`# ${tag.name}`}
                    </li>
                  </Link>
                )
              })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ArticleItem

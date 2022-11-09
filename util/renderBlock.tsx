/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import React, { Fragment } from 'react'
import { Richtext } from './types'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const Text = ({ text }: { text: Richtext[] }) => {
  if (!text) {
    return <span></span>
  }

  const element = text.map((value, index: number) => {
    const { bold, code, color, italic, strikethrough, underline } = value.annotations
    const text = value.text

    if (code) {
      return (
        <code key={index} className="language-js py-2">
          {text.content}
        </code>
      )
    }

    return (
      <span
        key={index}
        className={[
          bold ? 'font-semibold' : '',
          italic ? 'italic' : '',
          strikethrough ? 'strikethrough' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <Link href={text.link.url || ''}>
            <>{text.content}</>
          </Link>
        ) : (
          text.content
        )}
      </span>
    )
  })

  return <>{element}</>
}

export const renderNestedList = (block: any) => {
  const { type } = block
  const value = block[type]
  if (!value) return null

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return <li className="list-none">{value.children.map((block: any) => renderBlock(block))}</li>
  }
  return <li className="list-none">{value.children.map((block: any) => renderBlock(block))}</li>
}

export const renderBlock = (block: any) => {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p key={id} className="text-[20px] p-2">
          <Text text={value.rich_text} />
        </p>
      )

    case 'heading_1':
      return (
        <h1 key={id} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
          <Text text={value.rich_text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 key={id} className="text-2xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
          <Text text={value.rich_text} />
        </h2>
      )

    case 'heading_3':
      return (
        <h3 key={id} className="text-xl font-semibold mb-8 mt-4 dark:text-yellow_accent">
          <Text text={value.rich_text} />
        </h3>
      )

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li key={id} className="py-1 ">
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      )

    case 'to_do':
      return (
        <div key={id}>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} /> <Text text={value.rich_text} />
          </label>
        </div>
      )

    case 'toggle':
      return (
        <details key={id} className="my-4">
          <summary className="text-[24px] py-4 300 cursor-pointer">
            <Text text={value.rich_text} />
          </summary>
          <div className="pl-4">
            {value.children?.map((block: any) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </div>
        </details>
      )

    case 'child_page':
      return <p key={id}>{value.title}</p>

    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url
      const caption = value.caption ? value.caption[0]?.plain_text : ''

      return (
        <figure key={id}>
          <Image src={src} alt={caption} layout="responsive" loading="lazy" height={500} width={300} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )

    case 'divider':
      return <hr className="my-8" key={id} />

    case 'quote':
      return (
        <div
          key={id}
          id="fontQuote"
          className="borderQuote dark:bg-dark_subBackground bg-light_subBackground text-[16px]"
        >
          <i id="iconQuote">
            <AiOutlineInfoCircle className="text-2xl icon" />
          </i>
          {value.rich_text[0].plain_text}
        </div>
      )

    case 'code':
      return (
        <pre key={id} className="px-1 py-2 my-5 rounded-md overflow-auto">
          <code className="language-js">{value.rich_text[0].plain_text}</code>
        </pre>
      )

    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url
      const splitSourceArray = src_file.split('/')
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
      const caption_file = value.caption ? value.caption[0]?.plain_text : ''
      return (
        <figure key={id}>
          <div className="px-1 py-2">
            📎{' '}
            <Link href={src_file} passHref>
              <>{lastElementInArray.split('?')[0]}</>
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      )

    case 'bookmark':
      const href = value.url
      return (
        <Link key={id} href={href} target="_brank" className="block mb-3">
          <>{href}</>
        </Link>
      )

    case 'callout':
      return (
        <div className="flex items-center bg-dark_subBackground p-4 rounded-lg">
          <span className="icon m-2 ">{value.icon.emoji}</span>
          <Text text={value.rich_text} />
        </div>
      )

    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`
  }
}

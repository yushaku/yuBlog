/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function renderContentFragment(index: number, text: any, obj: any, type?: string) {
  let modifiedText = text

  if (obj) {
    if (obj.bold) {
      modifiedText = (
        <b className="font-semibold" key={index}>
          {text}
        </b>
      )
    }

    if (obj.italic) {
      modifiedText = (
        <em className="italic" key={index}>
          {text}
        </em>
      )
    }

    if (obj.underline) {
      modifiedText = (
        <u className="underline" key={index}>
          {text}
        </u>
      )
    }

    if (obj.code) {
      modifiedText = (
        <code className="language-js py-2" key={index}>
          {text}
        </code>
      )
    }

    if (obj.bold && obj.italic) {
      modifiedText = (
        <em className="font-semibold italic" key={index}>
          {text}
        </em>
      )
    }

    if (obj.bold && obj.italic && obj.underline) {
      modifiedText = (
        <u className="font-semibold italic underline" key={index}>
          {text}
        </u>
      )
    }
  }

  switch (type) {
    case 'heading-one':
      return renderHeadOne(modifiedText, index)

    case 'heading-two':
      return renderHeadOTwo(modifiedText, index)

    case 'heading-three':
      return renderHeadOThree(modifiedText, index)

    case 'heading-four':
      return renderHeadOFour(modifiedText, index)

    case 'heading-five':
      return renderHeadOFour(modifiedText, index)

    case 'paragraph':
      return renderParagraph(modifiedText, index)

    case 'block-quote':
      return renderBLockQuote(modifiedText, index)

    case 'code-block':
      return renderCodeBlock(modifiedText, index)

    case 'image':
      return (
        <Image
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
          layout="responsive"
          loading="lazy"
        />
      )

    default:
      return modifiedText
  }
}

const renderHeadOne = (modifiedText: any, index: number) => {
  return (
    <h2 key={index} className="text-5xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h2>
  )
}

const renderHeadOTwo = (modifiedText: any, index: number) => {
  return (
    <h2 key={index} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h2>
  )
}

const renderHeadOThree = (modifiedText: any, index: number) => {
  return (
    <h2 key={index} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h2>
  )
}

const renderHeadOFour = (modifiedText: any, index: number) => {
  return (
    <h2 key={index} className="text-2xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h2>
  )
}

const renderParagraph = (modifiedText: any, index: number) => {
  return (
    <p key={index} className="text-[24px] p-2">
      {modifiedText.map((item: any, i: number) => {
        if (item?.type === 'link')
          return (
            <Link href={item.href} key={i} target="_blank">
              {item.children[0].text}
            </Link>
          )
        return <React.Fragment key={i}>{item}</React.Fragment>
      })}
    </p>
  )
}

const renderCodeBlock = (modifiedText: any, index: number) => {
  return (
    <section key={index} className="mb-8">
      {modifiedText.map((item: any, i: number) => {
        return (
          <React.Fragment key={i}>
            <pre>
              <code className="language-js"> {item}</code>
            </pre>
          </React.Fragment>
        )
      })}
    </section>
  )
}

const renderBLockQuote = (modifiedText: any, index: number) => {
  return (
    <div
      key={index}
      className="relative p-6 my-2 rounded-lg dark:bg-dark_subBackground bg-light_subBackground
      border-2 dark:border-dark_accentColor border-light_accentColor"
    >
      <i id="block-quote">
        <AiOutlineInfoCircle className="text-3xl icon" />
      </i>
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </div>
  )
}

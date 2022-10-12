/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function renderContentFragment(index: number, elementChildren: any, obj: any, type?: string) {
  let modifiedElement = elementChildren

  if (obj) {
    if (obj.bold) {
      modifiedElement = (
        <b className="font-semibold" key={index}>
          {elementChildren}
        </b>
      )
    }

    if (obj.italic) {
      modifiedElement = (
        <em className="italic" key={index}>
          {elementChildren}
        </em>
      )
    }

    if (obj.underline) {
      modifiedElement = (
        <u className="underline" key={index}>
          {elementChildren}
        </u>
      )
    }

    if (obj.code) {
      modifiedElement = (
        <code className="language-js py-2" key={index}>
          {elementChildren}
        </code>
      )
    }

    if (obj.bold && obj.italic) {
      modifiedElement = (
        <em className="font-semibold italic" key={index}>
          {elementChildren}
        </em>
      )
    }

    if (obj.bold && obj.italic && obj.underline) {
      modifiedElement = (
        <u className="font-semibold italic underline" key={index}>
          {elementChildren}
        </u>
      )
    }
  }

  switch (type) {
    case 'heading-one':
      return renderHeadOne(modifiedElement, index)

    case 'heading-two':
      return renderHeadOTwo(modifiedElement, index)

    case 'heading-three':
      return renderHeadOThree(modifiedElement, index)

    case 'heading-four':
      return renderHeadOFour(modifiedElement, index)

    case 'heading-five':
      return renderHeadOFour(modifiedElement, index)

    case 'paragraph':
      return renderParagraph(modifiedElement, index)

    case 'block-quote':
      return renderBLockQuote(modifiedElement, index)

    case 'code-block':
      return renderCodeBlock(modifiedElement, index)

    case 'link':
      return renderInnerLink(modifiedElement, index)

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
      return modifiedElement
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
    <div key={index} id="fontQuote" className="borderQuote dark:bg-dark_subBackground bg-light_subBackground">
      <i id="iconQuote">
        <AiOutlineInfoCircle className="text-3xl icon" />
      </i>
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </div>
  )
}

const renderInnerLink = (modifiedText: any, index: number) => {
  console.log(modifiedText)

  return (
    <div key={index} id="fontQuote" className="borderQuote dark:bg-dark_subBackground bg-light_subBackground">
      <i id="iconQuote">
        <AiOutlineInfoCircle className="text-3xl icon" />
      </i>
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </div>
  )
}

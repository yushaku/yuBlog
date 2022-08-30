/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'

export default function useContentFragment(index: any, text: any, obj: any, type?: any) {
  let modifiedText = text

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>
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
      return <Image key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />

    default:
      return modifiedText
  }
}

const renderHeadOne = (modifiedText: any, index: number) => {
  return (
    <h1 key={index} className="text-5xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h1>
  )
}
const renderHeadOTwo = (modifiedText: any, index: number) => {
  return (
    <h1 key={index} className="text-4xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h1>
  )
}
const renderHeadOThree = (modifiedText: any, index: number) => {
  return (
    <h1 key={index} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h1>
  )
}
const renderHeadOFour = (modifiedText: any, index: number) => {
  return (
    <h1 key={index} className="text-2xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </h1>
  )
}

const renderParagraph = (modifiedText: any, index: number) => {
  return (
    <p key={index} className="text-[24px] p-2">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
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
    <p key={index} className="mb-8">
      {modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </p>
  )
}

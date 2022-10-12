/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import handleStyle from './renderStyle'

export default function renderContent(index: number, element: any) {
  const elementChild = element.children

  switch (element.type) {
    case 'heading-one':
      return renderHeadOne(elementChild, index)

    case 'heading-two':
      return renderHeadOTwo(elementChild, index)

    case 'heading-three':
      return renderHeadOThree(elementChild, index)

    case 'heading-four':
      return renderHeadOFour(elementChild, index)

    case 'heading-five':
      return renderHeadOFour(elementChild, index)

    case 'paragraph':
      return renderParagraph(elementChild, index)

    case 'block-quote':
      return renderBLockQuote(elementChild, index)

    case 'code-block':
      return renderCodeBlock(elementChild, index)

    case 'iframe':
      return renderIframe(element, index)

    case 'bulleted-list':
      return renderBulletedList(elementChild, index)

    case 'image':
      return (
        <Image
          key={index}
          alt={element.title}
          height={element.height}
          width={element.width}
          src={element.src}
          layout="responsive"
          loading="lazy"
        />
      )

    default:
      return <div></div>
  }
}

const renderHeadOne = (elementChild: any, index: number) => {
  return (
    <h2 key={index} className="text-5xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </h2>
  )
}

const renderHeadOTwo = (elementChild: any, index: number) => {
  return (
    <h2 key={index} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </h2>
  )
}

const renderHeadOThree = (elementChild: any, index: number) => {
  return (
    <h2 key={index} className="text-3xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </h2>
  )
}

const renderHeadOFour = (elementChild: any, index: number) => {
  return (
    <h2 key={index} className="text-2xl font-semibold mb-8 mt-4 dark:text-dark_accentColor">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </h2>
  )
}

const renderParagraph = (elementChild: any, index: number) => {
  return (
    <p key={index} className="text-[24px] p-2">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </p>
  )
}

const renderCodeBlock = (elementChild: any, index: number) => {
  return (
    <section key={index} className="mb-8">
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return (
          <React.Fragment key={i}>
            <pre>
              <code className="language-js"> {newItem}</code>
            </pre>
          </React.Fragment>
        )
      })}
    </section>
  )
}

const renderBLockQuote = (elementChild: any, index: number) => {
  return (
    <div key={index} id="fontQuote" className="borderQuote dark:bg-dark_subBackground bg-light_subBackground">
      <i id="iconQuote">
        <AiOutlineInfoCircle className="text-3xl icon" />
      </i>
      {elementChild.map((item: any, i: number) => {
        const newItem = handleStyle(item)
        return <React.Fragment key={i}>{newItem}</React.Fragment>
      })}
    </div>
  )
}

const renderIframe = (element: any, index: number) => {
  return (
    <div key={index}>
      <iframe
        src={element.url}
        width={element.width}
        height={element.height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

const renderBulletedList = (elementChild: any, index: number) => {
  return (
    <section key={index} className="">
      <ul className="list-decimal">
        {elementChild.map((list: any, i: number) => {
          return renderSubList(list, i)
        })}
      </ul>
    </section>
  )
}

const renderSubList = (item: any, index: number): JSX.Element => {
  if (item.children) {
    return (
      <li key={index} className="ml-4 my-1">
        {item.children.map((listItem: any, index: number) => {
          if (listItem.children) {
            return renderSubList(listItem.children, index)
          }
          const newItem = handleStyle(listItem)
          return <span key={index}>{newItem}</span>
        })}
      </li>
    )
  }

  return (
    <p key={index} className="ml-2 my-1">
      {item.map((subItem: any, index: number) => {
        if (subItem.children) {
          return renderSubList(subItem.children, index)
        }
        const newItem = handleStyle(subItem)
        return (
          <>
            <span></span>
            <span key={index}>{newItem}</span>
          </>
        )
      })}
    </p>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function handleStyle(item: any) {
  if (item.type === 'link') {
    const result = item.children.map((item: any, index: number) => {
      const newItem = handleStyle(item)
      return (
        <span className="text-xl group-hover:text-dark_accentColor " key={index}>
          {newItem}
        </span>
      )
    })
    item = (
      <a href={item.href} className="group underline text-dark_accentColor " target="_blank" rel="noreferrer">
        <>{result}</>
      </a>
    )
  }

  if (item.bold) {
    item = <b className="font-semibold">{item.text}</b>
  }

  if (item.italic) {
    item = <em className="italic">{item.text}</em>
  }

  if (item.underline) {
    item = <u className="underline">{item.text}</u>
  }

  if (item.code) {
    item = <code className="language-js py-2">{item.text}</code>
  }

  if (item.bold && item.italic) {
    item = <em className="font-semibold italic">{item.text}</em>
  }

  if (item.bold && item.italic && item.underline) {
    item = <u className="font-semibold italic underline">{item.text}</u>
  }

  if (!item.bold && !item.italic && !item.underline && !item.code && !item.type) {
    item = <span>{item.text}</span>
  }
  return item
}

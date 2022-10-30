/* eslint-disable @typescript-eslint/no-explicit-any */
export type Tag = {
  color: string
  id: string
  name: string
}

export type BlogPost = {
  id: string
  tags: Tag[]
  title: string
  date: string
  image: string
  author: string
}

//? --------------------------------------
export interface ResPost {
  id: string
  object: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: CreatedBy
  cover: Cover
  icon: Icon
  parent: Parent
  archived: boolean
  properties: properties
  url: string
}

interface Parent {
  type: string
  database_id: string
}

interface Icon {
  type: string
  emoji: string
}

interface Cover {
  type: string
  external: {
    url: string
  }
  file: string
}

interface properties {
  slug: Slug
  Tags: Tags
  category: Category
  finish: Finish
  status: Category
  goal: Finish
  link: Link
  Date: Date
  process: Process
  Name: Name
}

interface Name {
  id: string
  type: string
  title: Richtext[]
}

interface Process {
  id: string
  type: string
  formula: Formula
}

interface Formula {
  type: string
  string: string
}

interface Date {
  id: string
  type: string
  date?: any
}

interface Link {
  id: string
  type: string
  url?: any
}

interface Finish {
  id: string
  type: string
  number: number
}

interface Category {
  id: string
  type: string
  select: Multiselect
}

interface Tags {
  id: string
  type: string
  multi_select: Multiselect[]
}

interface Multiselect {
  id: string
  name: string
  color: string
}

interface Slug {
  id: string
  type: string
  rich_text: Richtext[]
}

interface Richtext {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href?: any
}

interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Text {
  content: string
  link?: any
}

interface CreatedBy {
  object: string
  id: string
}

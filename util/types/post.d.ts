export type PostDetail = {
  title: string
  postSlug: string
  excerpt: string
  createdAt: string
  content: {
    raw
  }
  featuredImage: {
    url: string
  }
  tags: tag[]
  authorId: {
    name: string
  }
}

export type propsRenderElement = {
  type?: string
  text: string
  children: propsRenderElement[]
}

type tag = {
  tagSlug: string
  title: string
  tagColor: {
    hex: string
  }
  textColor: {
    hex: string
  }
}

export type CommentType = {
  id: string
  updatedAt: string
  createdAt: string
  comment: string
  reader?: {
    name: string
    email: string
    avatar: {
      url: string
    }
  }
  author?: {
    name: string
    email: string
    avatar: {
      url: string
    }
  }
}

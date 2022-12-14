export type articleItemProps = {
  id?: string
  title: string
  excerpt?: string
  tags: tagsDetail[]
  featuredImage: {
    url: string
  }
  authorId?: {
    name: string
    avatar: {
      url: string
    }
  }
  postSlug: string
  createdAt: string
}

export type tagItemProps = {
  id?: string
  title: string
  postSlug: string
  createdAt: string
  featuredImage: {
    url: string
  }
}

export type tagsDetail = {
  title: string
  tagSlug: string
  tagColor: {
    hex: string
  }
  textColor: {
    hex: string
  }
}

export type Category = {
  id: string
  name: string
  slug: string
}

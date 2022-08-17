export type articleItemProps = {
  id?: string
  title: string
  tags: tagsDetail[]
  featuredImage: {
    url: string
  }
  postSlug: string
  createdAt: string
}

export type tagsDetail = {
  tagSlug: string
  title: string
  tagColor: {
    hex: string
  }
  textColor: {
    hex: string
  }
}

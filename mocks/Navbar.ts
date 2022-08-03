export const navbarListItem = [
  { id: 1, title: 'Article', link: 'article' },
  { id: 2, title: 'Books note', link: 'books_note' },
  { id: 3, title: 'About', link: 'about' },
  { id: 4, title: 'Tech', link: 'tech' },
]

export const navbarEffect = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
    },
  }),
}

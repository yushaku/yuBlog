export const navbarListItem = [
  { id: 1, title: 'Article', link: 'article' },
  { id: 2, title: 'Coding', link: 'code' },
  { id: 3, title: 'Books note', link: 'books' },
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

export const sidebarEffect = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
}

export const sidebarListItem = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const sidebarItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

import { atom } from 'recoil'

export const showSidebar = atom({
  key: 'navbar',
  default: false,
})

export const showFormContact = atom({
  key: 'formContact',
  default: false,
})

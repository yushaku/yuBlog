import { signIn } from 'next-auth/react'
import React from 'react'

interface Props {
  provider: string
  providerId: string
  iconProvider: (props: React.ComponentProps<'svg'>) => JSX.Element
}

const AuthButton = ({ provider, providerId, iconProvider: Icon }: Props) => {
  return (
    <button
      className=" dark:bg-dark_subBackground text-dark_textColor text-2xl py-5 w-[400px] rounded-lg flex gap-3 items-center justify-center"
      onClick={() => {
        signIn(providerId, { callbackUrl: '/' })
      }}
    >
      <Icon className="icon text-3xl" />
      Login with {provider}
    </button>
  )
}

export default AuthButton

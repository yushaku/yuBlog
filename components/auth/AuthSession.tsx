import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AuthFeature from './AuthFeature'

const AuthSession = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className=" relative">
        <div className="flex items-center justify-center gap-3">
          <div>
            <Image
              src={session?.user?.image || ''}
              alt="user image"
              width={40}
              height={40}
              className=" rounded-full p-2"
            />
          </div>
          <h2 className=" font-semibold text-[20px] dark:text-dark_accentColor">{session.user?.name}</h2>
        </div>

        <AuthFeature />
      </div>
    )
  }
  return (
    <div className=" text-2xl font-semibold cursor-pointer dark:hover:text-dark_accentColor hover:text-light_accentColor">
      <Link href="/login">login now</Link>
    </div>
  )
}

export default AuthSession

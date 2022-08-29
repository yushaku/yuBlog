import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const AuthSession = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <Image src={session.user?.image || ''} alt="user image" width={50} height={50} />
        </div>
        <h2 className=" font-semibold text-2xl dark:text-dark_accentColor">{session.user?.name}</h2>
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

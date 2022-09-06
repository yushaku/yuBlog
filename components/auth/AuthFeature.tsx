import React from 'react'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'

export const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />

const AuthFeature = () => {
  const { data: session } = useSession()
  return (
    <div
      id="auth_dropdown_fea"
      className=" absolute top-14 right-0 p-8 
      dark:bg-dark_subBackground
      after:content-[' ']
      after:absolute after:top-0 after:left-0 
      after:dark:bg-dark_subBackground
      after:w-[20px] after:h-[20px]
      text-xl"
    >
      <div className="flex w-[100%] gap-3">
        <div>
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
            className=" rounded-full p-2"
          />
        </div>
        <div>
          <h3 className="dark:text-dark_accentColor text-light_accentColor">{session?.user?.name}</h3>
          <p className="text-lg text-textGrayLight dark:text-dark_subTextColor">{session?.user?.email}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>post save</li>
        </ul>
        <Divider />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  )
}

export default AuthFeature

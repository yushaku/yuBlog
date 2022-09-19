import React from 'react'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'

export const Divider = () => <hr className="border-t-[0.1px] border-gray-900 my-2" />

const AuthPopBar = () => {
  const { data: session } = useSession()

  return (
    <div
      id="auth_dropdown_fea"
      className=" absolute top-14 right-0 p-8 text-xl
      dark:bg-dark_subBackground rounded-2xl

      before:content-[' ']
      before:w-[100%] before:h-[10%]
      before:absolute before:-top-5 before:right-0

      after:content-[' ']
      after:absolute after:-top-3 after:right-10 
      after:border-l-[12px] after:border-l-transparent
      after:border-r-[12px] after:border-r-transparent
      after:border-b-[12px] after:border-dark_subBackground"
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
      <div className="pl-[12px] mt-4">
        <ul className="flex flex-col gap-2 cursor-pointer">
          <li className="dark:hover:text-dark_accentColor">post save</li>
          <li className="dark:hover:text-dark_accentColor">highlight</li>
        </ul>

        <Divider />

        <button onClick={() => signOut()} className="dark:hover:text-dark_accentColor">
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default AuthPopBar

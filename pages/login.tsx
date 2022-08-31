import React from 'react'
import { signIn, ClientSafeProvider } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import { AiOutlineGoogle, AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'

interface Props {
  providerList: Awaited<ReturnType<typeof getProviders>>
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const providerList = await getProviders()
  return {
    props: {
      providerList,
    },
  }
}

const Login = ({ providerList }: Props) => {
  // const { data: session } = useSession()
  const { name: googleProvider, id: googleProviderId } = providerList?.google as ClientSafeProvider
  const { name: facebookProvider, id: facebookProviderId } = providerList?.facebook as ClientSafeProvider
  const { name: githubProvider, id: githubProviderId } = providerList?.github as ClientSafeProvider

  return (
    <div className="flex flex-col justify-center items-center h-[75vh]">
      <div className="mb-4">
        <Image src="/logo.png" alt="logo_yushaku" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-4 ">
        <button
          className=" dark:bg-dark_subBackground text-dark_textColor text-2xl py-5 w-[400px] rounded-lg flex gap-3 items-center justify-center"
          onClick={() => {
            signIn(googleProviderId, { callbackUrl: '/' })
          }}
        >
          <AiOutlineGoogle className="icon text-3xl" />
          Login with {googleProvider}
        </button>

        <button
          className=" dark:bg-dark_subBackground text-dark_textColor text-2xl py-5 w-[400px] rounded-lg flex gap-3 items-center justify-center"
          onClick={() => {
            signIn(githubProviderId, { callbackUrl: '/' })
          }}
        >
          <AiOutlineGithub className="icon text-3xl" />
          Login with {githubProvider}
        </button>

        <button
          className=" dark:bg-dark_subBackground text-dark_textColor text-2xl py-5 w-[400px] rounded-lg flex gap-3 items-center justify-center"
          onClick={() => {
            signIn(facebookProviderId, { callbackUrl: '/' })
          }}
        >
          <AiOutlineFacebook className="icon text-3xl" />
          Login with {facebookProvider}
        </button>
      </div>
    </div>
  )
}

export default Login

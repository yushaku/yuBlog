import React from 'react'
import { ClientSafeProvider } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import { AiOutlineGoogle, AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'
import AuthButton from '../components/auth/AuthButton'

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
  const { name: googleProvider, id: googleProviderId } = providerList?.google as ClientSafeProvider
  const { name: githubProvider, id: githubProviderId } = providerList?.github as ClientSafeProvider
  const { name: facebookProvider, id: facebookProviderId } = providerList?.facebook as ClientSafeProvider

  return (
    <div className="flex flex-col justify-center items-center h-[75vh]">
      <div className="mb-4">
        <Image src="/logo.png" alt="logo_yushaku" width={100} height={100} />
      </div>

      <div className="flex flex-col gap-4 ">
        <AuthButton provider={googleProvider} providerId={googleProviderId} iconProvider={AiOutlineGoogle} />
        <AuthButton provider={githubProvider} providerId={githubProviderId} iconProvider={AiOutlineGithub} />
        <AuthButton provider={facebookProvider} providerId={facebookProviderId} iconProvider={AiOutlineFacebook} />
      </div>
    </div>
  )
}

export default Login

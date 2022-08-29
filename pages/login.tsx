import React from 'react'
import { signIn, ClientSafeProvider } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import { AiOutlineGoogle } from 'react-icons/ai'
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
  const { name: ProviderName, id: ProviderId } = providerList?.google as ClientSafeProvider
  return (
    <div className="flex flex-col justify-center items-center h-[75vh]">
      <div className="mb-4">
        <Image src="/logo.png" alt="logo_yushaku" width={100} height={100} />
      </div>
      <div>
        <button
          className=" dark:bg-dark_subBackground text-dark_textColor text-2xl py-5 px-12 rounded-lg flex gap-3 items-center justify-center"
          onClick={() => {
            signIn(ProviderId, { callbackUrl: '/' })
          }}
        >
          <AiOutlineGoogle className="icon text-3xl" />
          Login with {ProviderName}
        </button>
      </div>
    </div>
  )
}

export default Login

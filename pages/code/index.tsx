import React from 'react'
import Layout from '@/components/layout'
import useGetPost from '@/hooks/useGetPost'
import useLoading from '@/hooks/useLoading'
import DevItem from '@/components/code/DevItem'
import LoadingPage from '@/components/LoadingPage'

const Coding = () => {
  const codePostList = useGetPost('code')
  const isLoading = useLoading()

  if (isLoading) return <LoadingPage />
  else
    return (
      <Layout title="developer">
        <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
          <section className=" flex flex-col gap-[3rem] p-12 ">
            {codePostList.map((codeItem, index) => {
              return (
                <DevItem
                  key={codeItem.id}
                  index={index}
                  title={codeItem.title}
                  excerpt={codeItem.excerpt || ''}
                  tags={codeItem.tags}
                  postSlug={codeItem.postSlug}
                  featuredImage={codeItem.featuredImage}
                  createdAt={codeItem.createdAt}
                />
              )
            })}
          </section>
        </div>
      </Layout>
    )
}

export default Coding

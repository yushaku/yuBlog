import React from 'react'
import CodeItem from '@/components/code/CodeItem'
import Layout from '@/components/layout'
import useGetPost from '@/hooks/useGetPost'
import useLoading from '@/hooks/useLoading'
import LoadingSkeletonPage from '@/components/skeleton/LoadingSkeletonPage'

const Coding = () => {
  const codePostList = useGetPost('code')
  const isLoading = useLoading()

  if (isLoading) return <LoadingSkeletonPage />
  else
    return (
      <Layout title="developer">
        <div className="container px-4 lg:px-[100px] mx-auto min-h-[100vh] mt-[12vh]">
          <section className=" flex flex-col gap-[3rem] p-12 ">
            {codePostList.map((codeItem) => {
              return (
                <CodeItem
                  key={codeItem.id}
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

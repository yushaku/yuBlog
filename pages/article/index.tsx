import React from 'react'
import ArticleItem from '@/components/article/ArticleItem'
import Layout from '@/components/layout'
import useGetPost from '@/hooks/useGetPost'
import useLoading from '@/hooks/useLoading'
import LoadingSkeletonPage from '@/components/skeleton/LoadingSkeletonPage'

const Article = () => {
  const articleList = useGetPost('article')
  const isLoading = useLoading()

  if (isLoading) return <LoadingSkeletonPage />
  else
    return (
      <Layout title="Article">
        <div className="container px-4 lg:px-[100px] mx-auto min-h-[65vh] mt-[12vh]">
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[6rem] items-center">
            {articleList.map((article) => {
              return (
                <div key={article.id}>
                  <ArticleItem
                    title={article.title}
                    featuredImage={article.featuredImage}
                    postSlug={article.postSlug}
                    tags={article.tags}
                    createdAt={article.createdAt}
                  />
                </div>
              )
            })}
          </section>
        </div>
      </Layout>
    )
}

export default Article

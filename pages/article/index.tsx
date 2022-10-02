import React from 'react'
import ArticleItem from '@/components/article/ArticleItem'
import Layout from '@/components/layout'
import useGetPost from '@/hooks/useGetPost'
import useLoading from '@/hooks/useLoading'
import LoadingPage from '@/components/LoadingPage'

const Article = () => {
  const articleList = useGetPost('article')
  const isLoading = useLoading()

  if (isLoading) return <LoadingPage />
  else
    return (
      <Layout title="Article">
        <div className="container px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
          <section className="flex flex-col md:flex-row flex-wrap gap-[18px] justify-center items-center">
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

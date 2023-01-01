import ArticleItem from '@/components/article/ArticleItem'
import Layout from '@/components/layout'
import LoadingSkeletonPage from '@/components/skeleton/LoadingSkeletonPage'
import { useGetArticle } from '@/services'
import { BlogPost } from '@/util/types/notion'
import React from 'react'

const Notion = () => {
  const { isLoading, data } = useGetArticle('article')

  const listPost = data?.posts || []

  return (
    <Layout title="Notion">
      <div className="container mx-auto px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
        <section className="flex items-center flex-col">
          <h2 className="text-5xl font-bold">Notion</h2>
          <p className="mt-2 text-xl">single dose video lessons and tutorials</p>
        </section>

        {isLoading ? (
          <LoadingSkeletonPage />
        ) : (
          <section className="flex flex-wrap gap-8 mt-[80px]">
            {listPost.map((post: BlogPost, index: number) => (
              <ArticleItem
                key={index}
                title={post.title}
                tags={post.tags}
                image={post.image}
                date={post.date}
                id={post.id}
                author={post.author}
              />
            ))}
          </section>
        )}
      </div>
    </Layout>
  )
}

export default Notion

import { getPostList } from '@/apis/notion'
import ArticleItem from '@/components/article/ArticleItem'
import Layout from '@/components/layout'
import LoadingPage from '@/components/LoadingPage'
import { BlogPost, ResCallDb } from '@/util/types/notion'
import React from 'react'
import { useQuery } from 'react-query'

const Notion = () => {
  const key = '/notion'

  const { isLoading, data } = useQuery(key, (): Promise<ResCallDb> => getPostList(key), {
    cacheTime: Infinity,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  })

  const listPost = data?.posts || []

  if (isLoading) return <LoadingPage />
  return (
    <Layout title="Notion">
      <div className="container px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
        <section className="flex gap-4 p-8 mt-[130px]">
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
      </div>
    </Layout>
  )
}

export default Notion

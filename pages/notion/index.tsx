import NotionService from '@/apis/notion'
import ArticleItem from '@/components/article/ArticleItem'
import Layout from '@/components/layout'
import { BlogPost } from '@/util/types/notion'
import React from 'react'

export async function getStaticProps() {
  const notionService = new NotionService()
  const data = await notionService
    .getAll('article')
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })

  return {
    props: {
      listPost: data?.posts || [],
      next_cursor: data?.next_cursor,
      has_more: data?.has_more,
    },
  }
}

const Notion = ({ listPost }: { listPost: BlogPost[] }) => {
  return (
    <Layout title="Notion">
      <div className="container px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
        <section className="flex gap-4 p-8 mt-[130px]">
          {listPost.map((post: BlogPost) => (
            <ArticleItem
              key={post.id}
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

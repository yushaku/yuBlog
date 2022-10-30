import NotionService from '@/apis/notion'
import BookItem from '@/components/books/BookItem'
import Layout from '@/components/layout'
import React from 'react'

export async function getStaticProps() {
  const notionService = new NotionService()
  const data = await notionService
    .getAll()
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((err) => {
      console.log(err)
    })

  notionService
    .getSingleBlogPost('8595da15-76cc-48fe-8844-c5e7721a5fc3')
    .then((data) => {
      console.log(JSON.stringify(data.cover))

      return data
    })
    .catch((err) => {
      console.log(err)
    })

  return {
    props: {
      listPost: data,
    },
  }
}

const Notion = ({ listPost }: any) => {
  return (
    <Layout title="Notion">
      <div className="container px-4 lg:px-[100px] min-h-[65vh] mt-[12vh]">
        <section className=" flex p-8 overflow-x-scroll scrollBar mt-[130px]">
          {listPost.map((post: any) => (
            <BookItem
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              tags={post.tags}
              featuredImage={post.featuredImage}
              postSlug={post.postSlug}
              createdAt={post.createdAt}
              authorId={post.authorId}
            />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Notion

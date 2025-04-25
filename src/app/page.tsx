import { BlogCard } from "@/components/BlogCard";
import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import { HeroSection } from "@/components/HeroSection";

import { allPosts } from "contentlayer/generated";

export default async function Home() {
  return (
    <section className='min-h-screen container mx-auto'>
      <HeroSection />

      <article className='flex lg:gap-10 mt-10'>
        <ul className='w-full flex flex-wrap justify-center gap-6'>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <BlogCard
                title={post.title}
                date={post.date}
                description={post?.description}
                thumbnail={post?.thumbnail}
                slug={post.slug}
              />
            </li>
          ))}
        </ul>
        <div className='flex-col justify-between hidden lg:flex'>
          <IntroBlock />
          <CategoryList />
        </div>
      </article>

      <TopicTitle title='Latest Posts' className='my-12' />
    </section>
  );
}

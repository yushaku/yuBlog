import { ListItem } from "@/components/BlogCard";
import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import { HeroSection } from "@/components/HeroSection";

import { allPosts } from "contentlayer/generated";
import { GradientCard } from "@/components/cuicui/cards";

export default async function Home() {
  return (
    <section className='min-h-screen max-w-7xl mx-auto'>
      {/* <HeroSection /> */}

      <TopicTitle title='Map of Contents' className='my-12' />

      <div className='grid grid-cols-5 gap-5'>
        {["solidity", "react", "nextjs", "tailwindcss", "typescript"].map(
          (item) => (
            <GradientCard
              key={item}
              title={item}
              description='sadfjhksadf'
              withArrow={true}
              circleSize={400}
              className='flex items-center justify-center'
            >
              logo
            </GradientCard>
          )
        )}
      </div>

      <TopicTitle title='Latest Posts' className='my-12' />

      <article className='flex lg:gap-10 mt-10'>
        <div className='w-full max-w-4xl mx-auto'>
          <ul className='flex flex-col space-y-8'>
            {allPosts.map((post) => (
              <li key={post.slug}>
                <ListItem
                  title={post.title}
                  date={post.date}
                  description={post?.description}
                  slug={post.slug}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-col justify-between hidden lg:flex'>
          <IntroBlock />
          <CategoryList />
        </div>
      </article>
    </section>
  );
}

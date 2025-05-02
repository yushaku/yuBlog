import { IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
// import { IntroSection } from "@/components/HeroSection";
import Image from "next/image";

import { allPosts } from "contentlayer/generated";
import { GradientCard } from "@/components/cuicui/cards";
import Link from "next/link";
import moment from "moment";
import { topics } from "@/utils/constants";

export default async function Home() {
  return (
    <section className='min-h-screen max-w-7xl mx-auto'>
      {/* <IntroSection /> */}

      <TopicTitle title='Map of Contents' className='my-12' />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {topics.map(({ title, slug, description, logo: Logo }) => (
          <Link key={title} href={`/mocs/${slug.toLocaleLowerCase()}`}>
            <GradientCard
              key={title}
              title={title}
              description={description}
              withArrow={true}
              circleSize={400}
              className='flex items-center justify-center'
            >
              <Logo className='size-20' />
            </GradientCard>
          </Link>
        ))}
      </div>

      <TopicTitle title='Latest Posts' className='my-12' />

      <article className='flex flex-col md:flex-row gap-10 mt-10'>
        <ul
          id='post list'
          className='grid flex-2/3 sm:grid-cols-2 md:grid-cols-1 gap-6'
        >
          {allPosts
            .filter((post) =>
              process.env.NEXT_PUBLIC_EVM === "dev"
                ? true
                : post.status === "public"
            )
            .map((post) => (
              <li key={post.slug} className='group'>
                <Link
                  href={`/article/${post.slug}`}
                  className='block w-full bg-sidebar/30 group-hover:bg-card/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  <p className='text-muted-foreground text-sm mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-primary'></span>
                    {moment(post.date).format("MMMM D, YYYY")}
                  </p>
                  <h3 className='text-foreground group-hover:text-primary text-xl font-bold mb-3 line-clamp-2'>
                    {post.title}
                  </h3>
                  <p className='text-grayColor text-sm leading-relaxed line-clamp-3'>
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
        </ul>

        <div id='intro' className='flex-col flex-1/3 justify-between'>
          <IntroBlock />

          <div className='relative max-w-[300px] lg:w-full h-[300px] flex items-center justify-center mx-auto'>
            <Image
              src={"/dev.png"}
              alt='logo'
              object-fit='cover'
              loading='lazy'
              placeholder='empty'
              sizes='280px'
              fill
              className='mx-auto'
            />
          </div>
          {/* <CategoryList />   */}
        </div>
      </article>
    </section>
  );
}

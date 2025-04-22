import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts } from "@/utils/mdx";

export default async function Home() {
  const posts = getAllPosts();
  return (
    <section className="max-w-7xl mx-auto">
      <article className="flex lg:gap-10">
        <ul className="w-full flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard
                title={post.title}
                date={post.date}
                description={post.description}
                thumbnail={post.thumbnail}
                slug={post.slug}
              />
            </li>
          ))}
        </ul>
        <div className="flex-col justify-between hidden lg:flex">
          <IntroBlock />
          <CategoryList />
        </div>
      </article>

      <TopicTitle title="Latest Posts" className="my-12" />
    </section>
  );
}

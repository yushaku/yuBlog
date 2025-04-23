import moment from "moment";
import { getPostBySlug } from "@/utils/mdx";
import { BlogContent } from "./components";

export type TableOfContent = {
  id: string;
  href: string;
  title: string;
};

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className='flex h-[80vh] items-center justify-center'>
        <h1 className='text-4xl font-bold'>Post not found</h1>
      </div>
    );
  }

  return (
    <article className='mx-auto max-w-4xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='mb-4 text-4xl font-bold text-foreground'>
          {post.title}
        </h1>
        <div className='flex items-center gap-4 text-sm text-primary'>
          <time>{moment(post.date).format("LL")}</time>
          <div className='flex gap-2'>
            {post.tags.map((tag) => (
              <span key={tag} className='rounded-full bg-gray-700 px-3 py-1'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <BlogContent content={post.content} />

      {/* <ReadMoreSection /> */}
    </article>
  );
}

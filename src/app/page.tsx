import { IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { GradientCard } from "@/components/cuicui/cards";
import Link from "next/link";
import moment from "moment";
import { topics } from "@/utils/constants";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { sharePost } from "@/data/share";
import { cn } from "@/utils";
import { ArrowUpRightIcon } from "lucide-react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params?.page ?? 1);
  const postsPerPage = 10;
  const filteredPosts = allPosts
    .filter((post) =>
      process.env.NEXT_PUBLIC_EVM === "dev" ? true : post.status === "public"
    )
    .concat(sharePost as any)
    .sort(
      (a, b) =>
        new Date(b?.date ?? "").getTime() - new Date(a?.date ?? "").getTime()
    );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <section className='min-h-screen max-w-7xl mx-auto'>
      <TopicTitle title='Map of Contents' className='my-12' />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
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
          {paginatedPosts.map((post) => (
            <li key={post.slug} className='group'>
              <Link
                href={
                  post.slug.startsWith("http")
                    ? post.slug
                    : `/article/${post.slug}`
                }
                target={post.slug.startsWith("http") ? "_blank" : "_self"}
                className='block w-full bg-sidebar/30 group-hover:bg-card/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
              >
                <p className='text-muted-foreground text-sm mb-3 flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-primary'></span>
                  {moment(post.date).format("MMMM D, YYYY")}
                </p>
                <h3 className='text-foreground group-hover:text-primary mb-2 text-xl font-bold line-clamp-2 flex items-center gap-2'>
                  {post.title}

                  <ArrowUpRightIcon
                    className={cn(
                      "w-5 h-5",
                      post.slug.startsWith("http") ? "block" : "hidden"
                    )}
                  />
                </h3>
                {/* <ul className='flex flex-wrap gap-2 my-2'>
                  {post.tags?.map((tag) => (
                    <li
                      key={tag}
                      className='text-grayColor bg-card px-2 py-1 rounded-md text-sm leading-relaxed line-clamp-3'
                    >
                      {tag}
                    </li>
                  ))}
                </ul> */}
                <p className='text-grayColor text-sm leading-relaxed line-clamp-3'>
                  {post.description}
                </p>
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className={cn(
                    "mt-4 max-h-96 object-cover",
                    post.thumbnail ? "" : "hidden"
                  )}
                />
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
              objectFit='cover'
              loading='lazy'
              placeholder='empty'
              sizes='280px'
              fill
              className='mx-auto'
            />
          </div>
        </div>
      </article>
      <div className='flex justify-center mt-8'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${page - 1}`}
                aria-disabled={page === 1}
                tabIndex={page === 1 ? -1 : 0}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, idx) => (
              <PaginationItem key={idx + 1}>
                <PaginationLink
                  href={`?page=${idx + 1}`}
                  isActive={page === idx + 1}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={`?page=${page + 1}`}
                aria-disabled={page === totalPages}
                tabIndex={page === totalPages ? -1 : 0}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

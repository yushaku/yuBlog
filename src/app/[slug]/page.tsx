import React from "react";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { absoluteUrl } from "@/utils";
import { siteConfig } from "@/utils/siteConfig";
import { Mdx } from "@/components/mdx/mdx-components";
import moment from "moment";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/utils/toc";
import { ReadMoreSection } from "./components";
import { Comments } from "@/components/Comments";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata(props: {
  params: Promise<PostPageProps["params"]>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.ogImage],
      creator: "@strlrd29",
    },
  };
}

export default async function PostPage(props: {
  params: Promise<PostPageProps["params"]>;
}) {
  const params = await props.params;
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }
  const toc = await getTableOfContents(post.body.raw);

  return (
    <article className='mx-auto relative px-6 py-5'>
      <header className='mb-8'>
        <h1 className='mb-4 text-4xl font-bold text-foreground'>
          {post.title}
        </h1>
        <div className='flex items-center gap-4 text-sm text-primary'>
          <time>{moment(post.date).format("LL")}</time>
          <div className='flex gap-2'>
            {post?.tags?.map((tag) => (
              <span key={tag} className='rounded-full bg-card px-3 py-1'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className='pb-12 pt-8 flex gap-10'>
        <div className=''>
          <Mdx code={post.body.code} />
        </div>

        <div className='hidden lg:block sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4'>
          <div className='no-scrollbar h-full space-y-4 overflow-auto pb-10'>
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>

      <div className='comment mt-10 border-t border-gray-700 pt-10'>
        <Comments />
      </div>

      <ReadMoreSection
        blogPost={allPosts.filter((p) => p.slug !== post.slug)}
      />
    </article>
  );
}

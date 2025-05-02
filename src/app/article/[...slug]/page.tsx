import React from "react";

import { Mdx } from "@/components/mdx/mdx-components";
import { absoluteUrl, cn } from "@/utils";
import { siteConfig } from "@/utils/siteConfig";
import { getTableOfContents } from "@/utils/toc";
import { allPosts } from "contentlayer/generated";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import "react-photo-view/dist/react-photo-view.css";
import "../../../styles/mdx.css";
import { Comments, ReadMore } from "./components";
import { ResponsiveToc } from "./components/TableOfContent";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug.join("/");
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
      creator: "@yushaku",
    },
  };
}

export default async function PostPage(props: {
  params: Promise<PostPageProps["params"]>;
}) {
  const params = await props.params;
  const post = await getPostFromParams({ params });

  if (!post) {
    return notFound();
  }
  const toc = await getTableOfContents(post.body.raw);
  const hasToc = Object.keys(toc).length > 0;

  const otherPosts = allPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.status === "public" || process.env.NEXT_PUBLIC_EVM === "dev")
  );

  return (
    <article className='mx-auto max-w-7xl relative px-6 py-5'>
      <header className='mb-8 animate-fadeIn'>
        <h1 className='mb-4 text-4xl font-bold text-foreground animate-fade-down'>
          {post.title}
        </h1>
        <div className='flex items-center gap-4 text-sm text-primary animate-fade-up'>
          <time>{moment(post.date).format("LL")}</time>
          <div className='flex gap-2'>
            {post?.tags?.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-card px-3 py-1 animate-fade-left'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className='mt-4 max-h-96'
          />
        )} */}
      </header>

      <div
        className={cn(
          "flex flex-col lg:flex-row gap-6 lg:gap-10 pb-12 pt-8",
          !hasToc && "lg:justify-center"
        )}
      >
        <div
          className={cn(
            "w-full animate-fade-up",
            hasToc && "lg:w-[calc(100%-20rem)]"
          )}
        >
          <Mdx code={post.body.code} />
        </div>

        {hasToc && <ResponsiveToc toc={toc} />}
      </div>

      <div className='comment mt-10 border-t border-gray-700 pt-10'>
        <Comments />
      </div>

      <div className='mt-10 border-t border-gray-700 pt-10'>
        <ReadMore blogPost={otherPosts} />
      </div>
    </article>
  );
}

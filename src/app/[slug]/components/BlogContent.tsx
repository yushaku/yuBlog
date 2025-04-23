"use client";

import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "dracula-prism/dist/css/dracula-prism.css";

type BlogContentProps = {
  content: string;
};

const components = {
  h1: (props: any) => (
    <h1
      {...props}
      className="text-4xl font-bold mb-6 text-strokeColor mt-8 first:mt-0"
    />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-3xl font-bold mb-4 text-strokeColor mt-6" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-2xl font-bold mb-3 text-strokeColor mt-4" />
  ),
  p: (props: any) => (
    <p {...props} className="text-textColor/80 dark:text-strokeColor/90 my-6" />
  ),
  code: (props: any) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <pre className="rounded-lg overflow-auto">
        <code {...props} className="language-javascript" />
      </pre>
    );
  },
  ul: (props: any) => (
    <ul
      {...props}
      className="list-disc list-inside mb-4 space-y-2 text-textColor/80 dark:text-strokeColor/90 ml-4"
    />
  ),
  ol: (props: any) => (
    <ol
      {...props}
      className="list-decimal list-inside mb-4 space-y-2 text-textColor/80 dark:text-strokeColor/90 ml-4"
    />
  ),
  li: (props: any) => (
    <li
      {...props}
      className="mb-2 text-textColor/80 dark:text-strokeColor/90"
    />
  ),
  a: (props: any) => (
    <a
      {...props}
      className="text-secondColor hover:text-blue-400 underline transition-colors"
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-secondColor pl-4 italic my-6 text-textColor/80 dark:text-strokeColor/90"
    />
  ),
  img: (props: any) => (
    <img {...props} className="rounded-lg w-full h-auto my-6" loading="lazy" />
  ),
};

export const BlogContent = ({ content }: BlogContentProps) => {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const renderContent = async () => {
      const source = await serialize(content);
      setMdxSource(source);
    };
    renderContent();
  }, [content]);

  if (!mdxSource) return null;

  return (
    <MDXProvider components={components}>
      <article className="prose prose-invert max-w-none">
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </MDXProvider>
  );
};

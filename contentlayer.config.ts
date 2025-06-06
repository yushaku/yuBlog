import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { createHighlighter } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers";

export const Doc = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `./**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    status: { type: "string", required: true },

    date: { type: "date", required: false },
    description: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    thumbnail: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc: any) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          createHighlighter,
          theme: "catppuccin-macchiato",
          defaultLang: "ts",
          transformers: [
            transformerNotationDiff({
              classLineAdd: "diff-add",
              classLineRemove: "diff-remove",
            }),
            transformerNotationFocus({
              classActiveLine: "line-focus",
              classActivePre: "has-focused",
            }),
            transformerNotationHighlight(),
          ],
        },
      ],
    ],
  },
});

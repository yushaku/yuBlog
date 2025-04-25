import { createHighlighter } from "shiki";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";

// import { rehypeComponent } from "./rehype-component";
// import { rehypeNpmCommand } from "./rehype-npm-command";

const addRawStringToPreElements = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.properties["__rawstring__"] = codeEl.children?.[0].value;
    }
  });
};

const transferRawStringToPreElement = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!("data-rehype-pretty-code-figure" in node.properties)) return;

      const preElement = node.children.at(-1);
      if (preElement.tagName !== "pre") return;

      preElement.properties["__rawstring__"] = node.properties["__rawstring__"];
      delete node.properties["__rawstring__"];
    }
  });
};

export const rehypePlugins: any = [
  rehypeSlug,
  // rehypeComponent,
  addRawStringToPreElements,
  // rehypeNpmCommand,
  transferRawStringToPreElement,
  [
    rehypePrettyCode,
    {
      createHighlighter,
      theme: "catppuccin-frappe",
      defaultLang: "ts",
      onVisitLine(node: any) {
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
      onVisitHighlightedLine(node: any) {
        node.properties.className?.push("line--highlighted");
      },
    },
  ],
];

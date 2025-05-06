import { visit } from "unist-util-visit";

export const addRawStringToPreElements = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.properties["__rawstring__"] = codeEl.children?.[0].value;
    }
  });
};

export const transferRawStringToPreElement = () => (tree: any) => {
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

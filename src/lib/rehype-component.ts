import fs from "fs"
import path from "path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import { Index } from "../__registry__"
import { UnistNode, UnistTree } from "@/types/unist"

interface NodeAttribute {
  name: string
  value?: string
  type?: string
}

function getNodeAttributeByName(node: UnistNode, name: string): NodeAttribute | undefined {
  return node.attributes?.find((attribute) => attribute.name === name)
}

function createCodeElement(source: string, src: string) {
  return u("element", {
    tagName: "pre",
    properties: {
      __src__: src,
    },
    children: [
      u("element", {
        tagName: "code",
        properties: {
          className: ["language-tsx"],
        },
        children: [
          {
            type: "text",
            value: source,
          },
        ],
      }),
    ],
  })
}

function processSourceFile(src: string): string {
  let source = fs.readFileSync(src, "utf8")
  source = source.replaceAll("@/registry/hooks/", "@/hooks/")
  source = source.replaceAll("export default", "export")
  return source
}

function getComponentSource(name: string, fileName?: string): string {
  const component = Index[name]
  if (fileName) {
    return (
      component.files.find((file: unknown) => {
        if (typeof file === "string") {
          return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`)
        }
        return false
      }) || component.files[0]?.path
    )
  }
  return component.files[0]?.path
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      const { value: srcPath } = (getNodeAttributeByName(node, "src") as NodeAttribute) || {}

      try {
        if (node.name === "ComponentSource") {
          const name = getNodeAttributeByName(node, "name")?.value as string
          const fileName = getNodeAttributeByName(node, "fileName")?.value

          if (!name && !srcPath) return null

          const src = srcPath ? path.join(process.cwd(), srcPath) : getComponentSource(name, fileName)
          const source = processSourceFile(src)
          node.children?.push(createCodeElement(source, src))
        }

        if (node.name === "ComponentPreview") {
          const name = getNodeAttributeByName(node, "name")?.value as string
          if (!name) return null

          const component = Index[name]
          const src = component.files[0]?.path
          const source = processSourceFile(src)
          node.children?.push(createCodeElement(source, src))
        }
      } catch (error) {
        console.error(error)
      }
    })
  }
}

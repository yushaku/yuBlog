import { MOC } from ".";

export const typescript: MOC = {
  title: "typescript",
  nodes: [
    {
      id: "typescript",
      type: "roadmap",
      position: { x: 0, y: 0 },
      data: {
        label: "typescript",
        logo: {
          src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
          width: 20,
          height: 20,
        },
      },
    },
    {
      id: "javascript",
      type: "roadmap",
      position: { x: 0, y: 300 },
      data: {
        label: "javascript",
        logo: {
          src: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
          width: 20,
          height: 20,
        },
      },
    },
    {
      id: "utility_types",
      type: "roadmap",
      position: { x: 200, y: 0 },
      data: { label: "utility types" },
    },
    {
      id: "type_vs_interface",
      type: "roadmap",
      position: { x: 400, y: 0 },
      data: {
        label: "type vs interface",
        link: "/article/typescript/type_vs_interface",
      },
    },
    {
      id: "prettier_merged_type",
      type: "roadmap",
      position: { x: 400, y: 100 },
      data: {
        label: "prettier merged type",
        link: "/article/typescript/prettier_merged_type",
      },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "typescript",
      target: "utility_types",
    },
    {
      id: "e1-3",
      source: "utility_types",
      target: "type_vs_interface",
    },
    {
      id: "e1-4",
      source: "utility_types",
      target: "prettier_merged_type",
    },
  ],
};

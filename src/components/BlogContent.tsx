import { BlockCode } from "./BlogDetail";
import {
  Render,
  withContentValidation as custom,
} from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import React from "react";

const BlogContent = ({ blocks }: { blocks: any }) => {
  return (
    <Render
      blocks={blocks}
      useStyles
      blockComponentsMapper={{
        code: custom(BlockCode),
      }}
    />
  );
};

export default BlogContent;

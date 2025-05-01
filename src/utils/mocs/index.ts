import { Edge, Node } from "@xyflow/react";

import { ethereum } from "./evm";
import { nodejs } from "./nodejs";
import { reactjs } from "./react";
import { systemDesign } from "./systemDesign";
import { typescript } from "./typescript";

export const mapOfContentData = {
  "system-design": systemDesign,
  typescript,
  ethereum,
  reactjs,
  nodejs,
};

export type MapNodeProps = {
  data: {
    id: string;
    label: string;
    className: string;
    link?: string;
    image?: {
      src: string;
      width: number;
      height: number;
    };
  };
};

export type MOC = {
  title: string;
  nodes: Node[];
  edges: Edge[];
};

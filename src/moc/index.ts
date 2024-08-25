import { Node, Edge } from "reactflow";
export * from "./nvim.moc";
export * from "./typescript.moc";

export type FlowComponent = {
  initialNodes: Node[];
  initialEdges: Edge[];
};

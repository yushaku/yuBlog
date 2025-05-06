"use client";

import { cn } from "@/utils";
import {
  Background,
  Edge,
  Node,
  OnConnect,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useMemo } from "react";
import { RoadMapNode } from "./RoadMapNode";

interface RoadMapProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  className?: string;
}

export const RoadMap = ({
  initialNodes,
  initialEdges,
  className = "",
}: RoadMapProps) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  );

  const nodeTypes = useMemo(() => ({ roadmap: RoadMapNode }), []);

  const onInit = useCallback(() => {
    console.log("Flow initialized");
  }, []);

  return (
    <div className={cn("h-[80dvh] w-full", className)}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        attributionPosition='bottom-left'
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background color='#333' gap={16} />
      </ReactFlow>
    </div>
  );
};

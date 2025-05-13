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
  Connection,
  NodeChange,
  EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useMemo } from "react";
import { RoadMapNode } from "@/app/mocs/[slug]/components/RoadMapNode";

interface AdminRoadMapProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  className?: string;
  onNodesUpdate?: (nodes: Node[]) => void;
  onEdgesUpdate?: (edges: Edge[]) => void;
}

export const AdminRoadMap = ({
  initialNodes,
  initialEdges,
  className = "",
  onNodesUpdate,
  onEdgesUpdate,
}: AdminRoadMapProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      onNodesChange(changes);
      setNodes((nds) => {
        const newNodes = [...nds];
        changes.forEach((change) => {
          if (change.type === "position" && change.dragging === false) {
            const node = newNodes.find((n) => n.id === change.id);
            if (node && change.position) {
              node.position = change.position;
            }
          }
        });
        onNodesUpdate?.(newNodes);
        return newNodes;
      });
    },
    [onNodesChange, onNodesUpdate]
  );

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      onEdgesChange(changes);
      setEdges((eds) => {
        const newEdges = [...eds];
        changes.forEach((change) => {
          if (change.type === "remove") {
            const index = newEdges.findIndex((e) => e.id === change.id);
            if (index !== -1) {
              newEdges.splice(index, 1);
            }
          }
        });
        onEdgesUpdate?.(newEdges);
        return newEdges;
      });
    },
    [onEdgesChange, onEdgesUpdate]
  );

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => {
        const newEdges = addEdge(connection, eds);
        onEdgesUpdate?.(newEdges);
        return newEdges;
      });
    },
    [setEdges, onEdgesUpdate]
  );

  const nodeTypes = useMemo(() => ({ roadmap: RoadMapNode }), []);

  return (
    <div className={cn("h-[80dvh] w-full", className)}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition='bottom-left'
      >
        <Background color='#333' gap={16} />
      </ReactFlow>
    </div>
  );
};

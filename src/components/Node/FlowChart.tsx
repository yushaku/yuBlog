"use client";

import { useCallback } from "react";
import ReactFlow, {
  Edge,
  Node,
  Controls,
  Background,
  ConnectionLineType,
  useEdgesState,
  useNodesState,
  Connection,
  addEdge,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CusomNode";
import { FlowComponent } from "@/moc";

const nodeTypes = {
  custom: CustomNode,
};

function FlowChart({ flowComponent }: { flowComponent: FlowComponent }) {
  const { initialNodes, initialEdges } = flowComponent;
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = (_event: React.MouseEvent, node: Node) => {
    console.log(node.data);
  };

  return (
    <div className="h-[80dvh]">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        connectionLineType={ConnectionLineType.SmoothStep}
        defaultEdgeOptions={{ animated: true, type: "smoothstep" }}
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowChart;

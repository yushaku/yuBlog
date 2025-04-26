import { Handle, Position } from "@xyflow/react";

interface RoadMapNodeProps {
  data: {
    label: string;
    type: "main" | "sub";
  };
}

export const RoadMapNode = ({ data }: RoadMapNodeProps) => {
  const isMain = data.type === "main";

  return (
    <div
      className={`rounded-lg p-4 shadow-lg transition-transform hover:scale-105 ${
        isMain ? "bg-card" : "bg-sidebar"
      }`}
    >
      <Handle type='target' position={Position.Top} />
      <div className='text-center font-medium'>{data.label}</div>
      <Handle type='source' position={Position.Bottom} />
    </div>
  );
};

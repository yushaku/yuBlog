import { MapNodeProps } from "@/utils/mocs";
import { Handle, Position } from "@xyflow/react";
import Link from "next/link";

export const RoadMapNode = ({ data }: MapNodeProps) => {
  const { link, label } = data;
  const isMain = data.type === "main";

  // check link is https:// or /blog/post
  const isExternalLink = data.link?.startsWith("https://");

  return (
    <div
      className={`rounded-lg p-4 shadow-lg transition-transform hover:scale-105 ${
        isMain ? "bg-card" : "bg-sidebar"
      }`}
    >
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />

      <div className='text-center font-medium'>
        {link ? (
          <Link
            href={link}
            target={isExternalLink ? "_blank" : "_self"}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className='text-primary hover:text-sidebar-primary transition-colors'
          >
            {label}
          </Link>
        ) : (
          <span>{label}</span>
        )}
      </div>
    </div>
  );
};

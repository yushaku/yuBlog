import { cn } from "@/utils";
import { MapNodeProps } from "@/utils/mocs";
import { Handle, Position } from "@xyflow/react";
import Link from "next/link";

export const RoadMapNode = ({ data }: MapNodeProps) => {
  const { link, label } = data;

  // check link is https:// or /blog/post
  const isExternalLink = data.link?.startsWith("https://");

  return (
    <div
      className={cn(
        "rounded-lg p-4 shadow-lg transition-transform hover:scale-105 bg-card",
        data.className
      )}
    >
      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />

      <div className='text-center flex gap-2 items-center font-medium'>
        {data.image && (
          <div className='mt-1 self-center'>
            <img
              src={data.image.src}
              alt={data.label}
              style={{
                width: data.image.width,
                height: data.image.height,
              }}
            />
          </div>
        )}

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

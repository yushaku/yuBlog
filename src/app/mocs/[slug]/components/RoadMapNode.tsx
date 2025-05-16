import { RoadMapNodeData } from "@/app/admin/page";
import { cn } from "@/utils";
import { Handle, Position, NodeProps } from "@xyflow/react";
import Link from "next/link";
import { X } from "lucide-react";

type MapNodeProps = {
  data: RoadMapNodeData & {
    showDelete?: boolean;
  };
  id: string;
};

export function RoadMapNode({ data, id }: MapNodeProps) {
  const { link, label, description } = data;

  // check link is https:// or /blog/post
  const isExternalLink = data.link?.startsWith("https://");

  return (
    <div
      className={cn(
        "rounded-lg p-4 shadow-lg transition-transform hover:scale-105 bg-card relative",
        data.className
      )}
    >
      <Handle type='target' position={Position.Left} className='w-3 h-3' />
      <Handle type='source' position={Position.Right} className='w-3 h-3' />

      <div className='text-center flex gap-2 items-center font-medium'>
        {data.logo && (
          <div className='mt-1 self-center'>
            <img
              src={data.logo.src}
              alt={data.label}
              style={{
                width: data.logo.width,
                height: data.logo.height,
              }}
              className={cn(data.logo.className)}
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

      {description && (
        <p className='text-xs text-muted-foreground'>{description}</p>
      )}

      {data.showDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            // @ts-ignore - handleDeleteNode is injected by the parent
            window.handleDeleteNode?.(id);
          }}
          className='absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors'
        >
          <X className='w-3 h-3' />
        </button>
      )}
    </div>
  );
}

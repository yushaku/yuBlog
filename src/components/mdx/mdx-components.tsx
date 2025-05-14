"use client";

import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { cn } from "@/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Callout } from "@/components/callout";
import { CodeBlockWrapper } from "@/components/mdx/code-block-wrapper";
import { ComponentSource } from "@/components/mdx/component-source";
import { CodeComparison } from "../magicui/code-comparison";
import { ScriptCopyBtn } from "../magicui/script-copy-btn";

interface MdxProps {
  code: string;
}

const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  ComponentSource,
  // ComponentPreview,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className='rounded-md border' {...props} />
  ),
  CodeComparison: ({ ...props }: any) => <CodeComparison {...props} />,
  ScriptCopyBtn: ({ ...props }: any) => <ScriptCopyBtn {...props} />,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-t pt-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary/90",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-primary/80",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  video: ({ className, ...props }: React.HTMLAttributes<HTMLVideoElement>) => (
    <video className={cn("rounded-md", className)} {...props} />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
      <p className={cn("leading-7 not-first:mt-6", className)} {...props} />
    );
  },
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <strong
      className={cn("font-semibold text-success", className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <em className={cn("italic text-success", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    src,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <PhotoView src={src as string}>
      <img
        className={cn("rounded-md cursor-zoom-in", className)}
        alt={alt}
        src={src}
        {...props}
      />
    </PhotoView>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className='my-4 md:my-8' {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-auto'>
      <table
        className={cn("relative w-max min-w-full border text-base", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("last:border-b-none m-0 border-b", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "p-4 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "max-w-72 p-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <pre
        className={cn(
          "mt-6 max-h-[650px] overflow-x-auto rounded-md p-4 border",
          className
        )}
        {...props}
      />
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
      <code
        className={cn(
          "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className
        )}
        data-line-numbers
        {...props}
      />
    );
  },
  Image,
  Callout,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className='[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]'
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      target='_blank'
      className={cn(
        "font-medium underline text-primary/50 underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-muted/50 sm:p-10",
        className
      )}
      {...props}
    />
  ),
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <PhotoProvider>
      <div className='mdx'>
        <Component components={components} />
      </div>
    </PhotoProvider>
  );
}

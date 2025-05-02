"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { DashboardTableOfContents } from "./toc";
import { TableOfContents } from "@/utils/toc";
import { cn } from "@/utils";

interface ResponsiveTocProps {
  toc: TableOfContents;
}

export function ResponsiveToc({ toc }: ResponsiveTocProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Desktop TOC */}
      <div className='hidden lg:block lg:sticky lg:top-20 lg:h-[calc(100vh-3.5rem)] lg:w-[280px] animate-fade-left'>
        <div className='space-y-4 py-4'>
          <div className='overflow-y-auto h-full pb-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-border/50'>
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet TOC */}
      <div className='lg:hidden'>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className={cn(
                "fixed bottom-4 right-4 z-40 h-10 w-10 rounded-full shadow-md",
                "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90",
                "hover:bg-accent hover:text-accent-foreground",
                "border-border/50 hover:border-border/80 transition-colors"
              )}
            >
              <Menu className='h-4 w-4' />
              <span className='sr-only'>Toggle table of contents</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side='top'
            align='end'
            alignOffset={-40}
            sideOffset={16}
            className={cn(
              "w-[280px] max-h-[80vh] overflow-hidden rounded-lg",
              "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
              "border-border/50",
              "animate-in fade-in-0 zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              "data-[state=closed]:zoom-out-95 data-[side=top]:slide-in-from-bottom-2"
            )}
            forceMount
          >
            {/* Content */}
            <div
              className={cn(
                "relative flex-1 overflow-y-auto overscroll-contain px-4 py-4",
                "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
                "hover:scrollbar-thumb-border/50"
              )}
            >
              <nav className='space-y-1'>
                <DashboardTableOfContents toc={toc} />
              </nav>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

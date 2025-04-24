import React from "react";
import Link from "next/link";
import { SocialMedia } from "./SocialMedia";
import { cn } from "@/utils";

type Props = React.HTMLAttributes<HTMLElement> & {};

export const Footer = ({ className }: Props) => {
  return (
    <footer
      className={cn(
        "max-w-[1110px] relative mt-[50px] mx-auto flex z-10 h-20 items-center justify-between " +
          className
      )}
    >
      <div className='text-foreground flex gap-6'>
        <span className='hover:text-primary font-bold'>©2025 Yushaku Code</span>
        <Link href='#'>Privacy Policy</Link>
        <Link href='#'>Terms of Service</Link>
      </div>

      <div>
        <SocialMedia />
      </div>
    </footer>
  );
};

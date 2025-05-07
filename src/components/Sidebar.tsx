"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { SocialMedia } from "./SocialMedia";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "./ui/switch";
import { ShinyText } from "./cuicui/texts";
import { siteConfig } from "@/utils/siteConfig";
import { cn } from "@/utils";

type Props = {
  ontoggleSideBar: () => void;
  showSidebar: boolean;
  topItems: {
    href: string;
    title: string;
  }[];
};

export const Sidebar = ({ topItems, ontoggleSideBar, showSidebar }: Props) => {
  const positionStyle = showSidebar ? "right-0" : "right-[-22rem]";
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <div
        className={cn(
          "fixed top-0 z-50 flex h-screen w-[300px] flex-col justify-between bg-sidebar px-8 py-10",
          "shadow-lg transition-all duration-300 ease-in-out",
          positionStyle
        )}
      >
        <ul className='flex flex-col gap-6'>
          <ShinyText className='text-xl font-medium'>
            {siteConfig.name}
          </ShinyText>

          {topItems.map((el, index) => {
            return (
              <li
                key={index}
                className='hover:text-primary text-lg'
                onClick={ontoggleSideBar}
              >
                <Link href={el.href}>{el.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center justify-between'>
          <SocialMedia />

          <span className='flex items-center gap-2'>
            <SunIcon className='size-5 stroke-foreground stroke-2' />
            <Switch
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label='Toggle theme mode'
            />
            <MoonIcon className='size-5 stroke-foreground stroke-2' />
          </span>
        </div>
      </div>

      <div
        className={`fixed top-0 z-30 h-screen w-screen bg-white/30 dark:bg-dark/50 transition-opacity duration-300 ease-in-out ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={ontoggleSideBar}
      ></div>
    </section>
  );
};

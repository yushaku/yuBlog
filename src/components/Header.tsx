"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/utils";
import { useTheme } from "next-themes";

type Props = {
  isAuth?: boolean;
  ontoggleSideBar?: () => void;
  topItems: {
    href: string;
    title: string;
  }[];
};

const delays = [
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
  "animate-delay-500",
];

export const Header = ({
  topItems,
  isAuth = false,
  ontoggleSideBar,
}: Props) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5) &&
        scrollY > 50
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dynamicHeaderStyle = scrollDirection === "up" ? "top-0" : "-top-[11vh]";
  const transparentStyle = !transparent
    ? "bg-transparent shadow-md mt-0"
    : `shadow-lg bg-background`;

  return (
    <header
      className={`${dynamicHeaderStyle} ${transparentStyle} animationShow fixed left-0 right-0 z-50 mx-auto`}
    >
      <div
        className={`mx-auto flex container items-center justify-between gap-4 px-6 py-4`}
      >
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              alt='yushaku'
              src='/logo.png'
              width={45}
              height={45}
              loading='lazy'
              className='animate-fade-down border-2 border-foreground/10 rounded-full'
            />
            <span className='text-foreground hover:text-primary animate-fade-right animate-duration-500 animate-delay-200 text-[24px] font-semibold'>
              Yushaku
            </span>
          </div>
        </Link>

        <div className='max-w-[600px] flex-1'>
          <ul className='relative hidden items-center justify-between md:flex'>
            {topItems.map(({ href, title }, index: number) => {
              return (
                <li key={index} className='group'>
                  <Link
                    href={href}
                    className={`${delays[index]} animationShow hover:text-primary animate_fade_down text-grayColor relative cursor-pointer text-lg font-medium`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}

            {isAuth ?? (
              <li>
                <Link href={"/auth/login"}>
                  <Button
                    title='Login'
                    className='bg-foreground text-white lg:w-20'
                  />
                </Link>
              </li>
            )}

            <li>
              <ThemeSwitcherButton />
            </li>
            <li
              className='float-right cursor-pointer px-6'
              onClick={ontoggleSideBar}
            >
              <AlignRight className='hover:stroke-primary stroke-foreground size-7' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-card px-2 py-1 
      font-medium tracking-tight  bg-sidebar text-foreground hover:bg-card'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type='button'
    >
      <span
        className={cn("relative size-6 scale-75 rounded-full bg-linear-to-tr")}
      >
        <span
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-linear-to-tr from-indigo-400 to-sky-200 transition-color duration-300",
            theme === "dark" ? "scale-100" : "scale-90"
          )}
        />
        <span
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-linear-to-tr from-rose-400 to-amber-300 transition-color duration-300 dark:from-rose-600 dark:to-amber-600",
            theme === "light" ? "opacity-100" : "opacity-0"
          )}
        />
        <span
          className={cn(
            "absolute top-0 right-0 z-20 size-4 origin-top-right transform-gpu rounded-full bg-white transition-transform duration-300 group-hover:bg-neutral-100 dark:bg-neutral-800 dark:group-hover:bg-neutral-700",
            theme === "dark" ? "scale-100" : "scale-0"
          )}
        />
      </span>
      <span className='relative h-6 w-12'>
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-500",
            theme === "light"
              ? "-translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0"
          )}
        >
          Dark
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-500",
            theme === "dark"
              ? "translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0"
          )}
        >
          Light
        </span>
      </span>
    </button>
  );
};

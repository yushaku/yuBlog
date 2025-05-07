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
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10) &&
        scrollY > 100
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
      if (window.scrollY > 100) {
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

  const dynamicHeaderStyle = scrollDirection === "up" ? "top-0" : "-top-[100%]";
  const transparentStyle = !transparent
    ? "bg-transparent"
    : `bg-background/95 backdrop-blur-sm`;

  return (
    <header
      className={cn(
        dynamicHeaderStyle,
        transparentStyle,
        "max-w-7xl fixed left-0 right-0 z-50 mx-auto",
        "transition-all duration-300 ease-in-out",
        "shadow-lg"
      )}
    >
      <div
        className={`mx-auto flex container items-center justify-between gap-4 py-4`}
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
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "transition-colors duration-300 ease-in-out",
        "hover:bg-accent/50",
        "border border-border/50"
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type='button'
      aria-label='Toggle theme'
    >
      <div className='relative size-5'>
        {/* Sun */}
        <span
          className={cn(
            "absolute inset-0 rotate-0 transform-gpu transition-all duration-300",
            "text-amber-500",
            theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        </span>

        {/* Moon */}
        <span
          className={cn(
            "absolute inset-0 rotate-90 transform-gpu transition-all duration-300",
            "text-blue-500",
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>
        </span>
      </div>

      <span
        className={cn(
          "relative text-sm font-medium",
          "transition-colors duration-300"
        )}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

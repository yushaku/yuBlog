"use client";
import { IconMoon, IconSun } from "./Icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import type { JSX } from "react";

type Props = {
  topItems: {
    href: string;
    title: string;
    icon: (props: any) => JSX.Element;
  }[];
};

export const Navbar = ({ topItems }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className='w-80 px-4 h-screen flex flex-col justify-between'>
      <section className='py-4 mt-8'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              alt='yushaku'
              src='/logo.png'
              width={35}
              height={35}
              loading='lazy'
            />
            <span className='text-foreground text-[24px] font-semibold'>
              Yushaku
            </span>
          </div>
        </Link>

        <ul className='flex flex-col gap-1 mt-8'>
          {topItems.map(({ href, title, icon: Icon }, index) => {
            return (
              <li
                key={index}
                className='w-full px-4 py-3 bg-foreground/10 rounded-lg'
              >
                <Link href={href} className='flex items-center'>
                  <Icon className='stroke-foreground w-6 h-6' color='#234f66' />
                  <span className='ml-4'>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <hr className='text-foreground/10 my-8' />

        <details>
          <summary className='px-4 mb-2'>Chat list</summary>
          <ul className='flex flex-col gap-1'>
            <li className='px-4 py-2 bg-foreground/10 rounded-lg'>
              <span className='w-3 h-3 bg-foreground rounded-md inline-block'></span>
              <span className='ml-4'>aaaa</span>
            </li>

            <li className='px-4'>
              <span className='w-3 h-3 bg-purple-500 rounded-md inline-block'></span>
              <span className='ml-4'>bbbb</span>
            </li>
          </ul>
        </details>
      </section>

      <section className='mb-4'>
        <div></div>

        <div
          className={`flex p-1 rounded-xl ${
            theme === "dark" ? "bg-dark" : "bg-foreground"
          }`}
        >
          <button
            className={`${
              theme === "dark" ? "" : "bg-white"
            } flexCenter h-[52px] w-full gap-3 rounded-lg`}
            onClick={() => setTheme("light")}
          >
            <IconSun color='#234f66' width='20px' height='20px' />
            light
          </button>

          <button
            className={`${
              theme === "dark" && "bg-dark-300"
            } flexCenter h-[52px] w-full gap-3 rounded-lg`}
            onClick={() => setTheme("dark")}
          >
            <IconMoon color='#234f66' width='20px' height='20px' />
            dark
          </button>
        </div>
      </section>
    </nav>
  );
};

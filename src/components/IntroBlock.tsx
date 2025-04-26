import { TopicTitle } from "./TopicTitle";
import { topics } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconArrowRight, IconGithub, IconLinkedin } from "./Icons";
import { siteConfig } from "@/utils/siteConfig";
import { BorderTrail } from "./cuicui/cards";
import { cn } from "@/utils";
import { ShinyBorderButton } from "./cuicui/ShinyBorderButton";

export const Warper = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <article
      className={cn(
        "mx-auto h-fit mb-10 bg-sidebar/50 py-6 flex flex-col items-center justify-center gap-y-4 rounded-lg px-6 text-center shadow-lg",
        className
      )}
    >
      {children}
    </article>
  );
};

export const IntroBlock = () => {
  return (
    <Warper className='relative animate-fade-down animate-once animate-delay-200'>
      <BorderTrail size={160} />
      <Image
        src='/map-doted.png'
        alt='dot_map_world'
        loading='lazy'
        placeholder='empty'
        object-fit='cover'
        sizes='326px'
        fill
      />
      <h3 className='text-foreground text-xl font-semibold'>Dev Lào</h3>
      <p className='text-grayColor text-sm'>
        Become better Full-stack developer. Following our tips, tricks and real
        life experiences.
      </p>
      <span className='flex gap-4'>
        <Link href={siteConfig.links.linkedin}>
          <IconLinkedin className='fill-white hover:fill-primary' />
        </Link>

        <Link href={siteConfig.links.github}>
          <IconGithub className='fill-white hover:fill-primary' />
        </Link>
      </span>

      {/* <ShinyBorderButton>
        <Link href='/about'>About Me</Link>
      </ShinyBorderButton> */}
    </Warper>
  );
};

export const CategoryList = () => {
  return (
    <Warper className='w-[350px] animate-fade-down animate-once animate-delay-600'>
      <TopicTitle title='Popular Content' />

      <ul className='divide-grayColor/40 w-full divide-y'>
        {topics.map((el, index) => {
          return (
            <li key={index} className='group'>
              <Link
                href={`/category/${el.href}`}
                className='flex items-center py-3 '
              >
                <IconArrowRight className='animationShow mr-2 rotate-180 w-4 h-4 stroke-foreground group-hover:mr-4' />
                <span className='group-hover:text-primary animationShow group-hover:font-bold'>
                  {el.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Warper>
  );
};

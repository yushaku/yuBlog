import { TopicTitle } from "./TopicTitle";
import { topics } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconGithub, IconLinkedin } from "./Icons";
import { siteConfig } from "@/utils/siteConfig";
import { BorderTrail } from "./cuicui/cards";
import { cn } from "@/utils";
import { ShinyText } from "./cuicui/texts";
import { ArrowRight } from "lucide-react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

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
    <Warper className='relative border border-transparent hover:border-border animate-fade-down animate-once animate-delay-200'>
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
      <h3 className='text-foreground text-xl font-semibold'>
        <ShinyText className='text-xl font-medium'>{siteConfig.name}</ShinyText>
      </h3>
      <p className='text-grayColor text-base'>
        The best way to learn something is to teach others. Second best way to
        learn something is to do it yourself. I decided to combine the two ways
        and teach myself and you how to program. My goal is for this blog to be
        a place to share what I have learned along the way!
      </p>
      <span className='flex gap-4'>
        <Link href={siteConfig.links.linkedin}>
          <IconLinkedin className='fill-white hover:fill-primary' />
        </Link>

        <Link href={siteConfig.links.github}>
          <IconGithub className='fill-white hover:fill-primary' />
        </Link>
      </span>
    </Warper>
  );
};

export function IntroBlock2() {
  return (
    <TextRevealCard
      text='You know the business'
      revealText='I know the way to build applications'
    >
      <TextRevealCardTitle>
        Sometimes, you just need to see it.
      </TextRevealCardTitle>
      <TextRevealCardDescription>
        This is a text reveal card. Hover over the card to reveal the hidden
        text.
      </TextRevealCardDescription>
    </TextRevealCard>
  );
}

export const CategoryList = () => {
  return (
    <Warper className='w-[350px] animate-fade-down animate-once animate-delay-600'>
      <TopicTitle title='Popular Content' />

      <ul className='divide-grayColor/40 w-full divide-y'>
        {topics.map((el, index) => {
          return (
            <li key={index} className='group'>
              <Link
                href={`/category/${el.title.toLowerCase()}`}
                className='flex items-center py-3 '
              >
                <ArrowRight className='animationShow mr-2 rotate-180 w-4 h-4 stroke-foreground group-hover:mr-4' />
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

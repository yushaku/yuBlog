import React from "react";
import { siteConfig } from "@/utils/siteConfig";
import { ShinyText } from "./cuicui/texts/shinyText";

const MountainSVG = () => (
  <svg
    className='absolute bottom-0 left-0 w-full h-32 md:h-48 text-neutral-200 dark:text-neutral-800'
    viewBox='0 0 1200 120'
    preserveAspectRatio='none'
  >
    <path
      d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111,985.66,92.83Z'
      fill='currentColor'
    />
  </svg>
);

const RainbowArc = () => (
  <div className='absolute -top-1/2 left-1/2 -translate-x-1/2 w-3/4 aspect-[4/1] rounded-[100%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse' />
);

export const IntroSection = () => {
  return (
    <div className='relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center'>
      <RainbowArc />

      <div className='relative z-10 text-center space-y-6 px-4'>
        <img
          src={siteConfig.logo}
          alt='Profile'
          className='w-32 h-32 rounded-full mx-auto border-4 border-neutral-200 dark:border-neutral-800 shadow-xl'
        />

        <div className='space-y-2'>
          <ShinyText className='text-4xl md:text-5xl font-bold'>
            {siteConfig.name}
          </ShinyText>
          <p className='text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl'>
            {siteConfig.description}
          </p>
        </div>

        <div className='flex gap-4 justify-center'>
          {siteConfig.links.github && (
            <a
              href={siteConfig.links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors'
            >
              GitHub
            </a>
          )}
          {siteConfig.links.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors'
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

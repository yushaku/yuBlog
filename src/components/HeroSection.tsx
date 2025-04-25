import React from "react";
import { siteConfig } from "@/utils/siteConfig";
import Link from "next/link";
import { IconGithub, IconLinkedin } from "./Icons";

const MountainBackground = () => (
  <div className='absolute inset-0 overflow-hidden'>
    <div className='absolute bottom-0 left-0 right-0 h-48'>
      <div className='absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#0F172A] to-transparent' />
      <svg viewBox='0 0 1000 200' className='absolute bottom-0 w-full'>
        <path
          d='M0 80 Q250 120 500 80 T1000 80 L1000 200 L0 200 Z'
          fill='#0F172A'
          className='mountain-1'
        />
        <path
          d='M0 120 Q250 160 500 120 T1000 120 L1000 200 L0 200 Z'
          fill='#1E293B'
          className='mountain-2'
        />
        <path
          d='M0 160 Q250 200 500 160 T1000 160 L1000 200 L0 200 Z'
          fill='#334155'
          className='mountain-3'
        />
      </svg>
    </div>
  </div>
);

const RainbowArc = () => (
  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <svg width='400' height='200' viewBox='0 0 400 200'>
      <defs>
        <linearGradient id='rainbow' x1='0' y1='0' x2='100%' y2='0'>
          <stop offset='0%' stopColor='#FF0000' />
          <stop offset='16.67%' stopColor='#FF7F00' />
          <stop offset='33.33%' stopColor='#FFFF00' />
          <stop offset='50%' stopColor='#00FF00' />
          <stop offset='66.67%' stopColor='#0000FF' />
          <stop offset='83.33%' stopColor='#4B0082' />
          <stop offset='100%' stopColor='#8F00FF' />
        </linearGradient>
      </defs>
      <path
        d='M 50 150 Q 200 50 350 150'
        fill='none'
        stroke='url(#rainbow)'
        strokeWidth='10'
        strokeDasharray='10 5'
        className='animate-dash'
      />
    </svg>
  </div>
);

const Avatar = () => (
  <div className='absolute bottom-20 left-1/2 -translate-x-1/2'>
    <div className='relative w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-700 overflow-hidden'>
      <img
        src={siteConfig.logo}
        alt='Avatar'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

export const HeroSection = () => {
  return (
    <div className='relative h-[400px] w-full bg-[#0A1120] overflow-hidden'>
      <MountainBackground />
      <RainbowArc />
      <Avatar />

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          {siteConfig.name}
        </h1>
        <p className='text-gray-300 max-w-lg mb-8'>{siteConfig.description}</p>
        <div className='flex gap-4'>
          <Link
            href={siteConfig.links.linkedin}
            className='hover:scale-110 transition-transform'
          >
            <IconLinkedin className='fill-white hover:fill-primary w-6 h-6' />
          </Link>
          <Link
            href={siteConfig.links.github}
            className='hover:scale-110 transition-transform'
          >
            <IconGithub className='fill-white hover:fill-primary w-6 h-6' />
          </Link>
        </div>
      </div>
    </div>
  );
};

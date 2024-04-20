'use client';

import { IconMenu } from './Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './Buttons';

type Props = {
  isAuth?: boolean;
  ontoggleSideBar?: () => void;
  topItems: {
    href: string;
    title: string;
  }[];
};

const delays = ['animate-delay-200', 'animate-delay-300', 'animate-delay-400', 'animate-delay-500'];

export const Header = ({ topItems, isAuth = false, ontoggleSideBar }: Props) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5) &&
        scrollY > 50
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dynamicHeaderStyle = scrollDirection === 'up' ? 'top-0' : '-top-[11vh]';
  const transparentStyle = !transparent
    ? 'bg-transparent shadow-md mt-0'
    : `shadow-lg bg-white/70 dark:bg-dark-200/90`;

  return (
    <header
      className={`${dynamicHeaderStyle} ${transparentStyle} animationShow fixed left-0 right-0 z-50 mx-auto`}
    >
      <div className={`mx-auto flex container items-center justify-between gap-4 px-6 py-4`}>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              alt='yushaku'
              src='/logo.png'
              width={35}
              height={35}
              loading='lazy'
              className='animate-fade-down'
            />
            <span className='text-primaryColor animate-fade-right animate-duration-500 animate-delay-200 dark:text-secondColor text-[24px] font-semibold'>
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
                    className={`${delays[index]} animationShow hover:text-primaryColor animate_fade_down text-grayColor dark:hover:text-secondColor relative cursor-pointer text-lg font-medium`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}

            {isAuth ?? (
              <li>
                <Link href={'/auth/login'}>
                  <Button title='Login' className='bg-primaryColor text-white lg:w-20' />
                </Link>
              </li>
            )}

            <li className='float-right cursor-pointer px-6' onClick={ontoggleSideBar}>
              <IconMenu className='hover:stroke-primaryColor dark:hover:stroke-secondColor stroke-black dark:stroke-white' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

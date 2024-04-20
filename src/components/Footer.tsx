import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SocialMedia } from './SocialMedia';

type Props = React.HTMLAttributes<HTMLElement> & {};

export const Footer = ({ className }: Props) => {
  const classes = twMerge(
    'max-w-[1110px] mt-[50px] mx-auto flex h-20 items-center justify-between ' + className,
  );

  return (
    <footer className={classes}>
      <div className='text-grayColor flex gap-6'>
        <span className='text-primaryColor dark:text-secondColor'>© 2023 yushaku Code</span>
        <Link href='#'>Privacy Policy</Link>
        <Link href='#'>Terms of Service</Link>
      </div>

      <div>
        <SocialMedia />
      </div>
    </footer>
  );
};

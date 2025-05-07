import Link from "next/link";
import React from "react";
import { IconLinkedin, IconGithub } from "./Icons";

type Props = React.HTMLAttributes<HTMLSpanElement> & {};

export const SocialMedia = ({ className, ...props }: Props) => {
  return (
    <span className={`flex gap-4 ${className}`} {...props}>
      <Link
        href='https://www.linkedin.com/in/levanson180200/'
        aria-label='Visit my LinkedIn profile'
      >
        <IconLinkedin className='fill-white hover:fill-primary' />
      </Link>

      <Link
        href='https://github.com/yushaku'
        aria-label='Visit my GitHub profile'
      >
        <IconGithub className='fill-white hover:fill-primary' />
      </Link>
    </span>
  );
};

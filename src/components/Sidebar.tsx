'use client';

import { IconMoon, IconSun } from './Icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SocialMedia } from './SocialMedia';
import { ButtonSwitch } from './Buttons';

type Props = {
  ontoggleSideBar: () => void;
  showSidebar: boolean;
  topItems: {
    href: string;
    title: string;
  }[];
};

export const Sidebar = ({ topItems, ontoggleSideBar, showSidebar }: Props) => {
  const positionStyle = showSidebar ? 'right-0' : 'right-[-22rem]';
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <div
        className={`${positionStyle} animationShow dark:shadow-darkShadow fixed top-0 z-50 flex h-screen w-[300px] flex-col justify-between bg-white px-8 py-10 shadow-lg dark:bg-dark-200`}
      >
        <ul className='flex flex-col gap-6'>
          <h3 className='text-primaryColor dark:text-secondColor mb-4 text-xl font-semibold'>
            Dev &quot;phèn&quot;
          </h3>
          {topItems.map((el, index) => {
            return (
              <li
                key={index}
                className='hover:text-primaryColor dark:hover:text-secondColor text-lg'
                onClick={ontoggleSideBar}
              >
                <Link href={el.href}>{el.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className='flexCenter justify-between'>
          <SocialMedia />
          <span className='flexCenter gap-2'>
            <IconSun color='#234f66' width='20px' height='20px' />
            <ButtonSwitch onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <IconMoon color='#234f66' width='20px' height='20px' />
          </span>
        </div>
      </div>

      <div
        className={`fixed top-0 z-30 h-screen w-screen bg-white/30 dark:bg-dark/50 ${
          showSidebar ? 'block' : 'hidden'
        }`}
        onClick={ontoggleSideBar}
      ></div>
    </section>
  );
};

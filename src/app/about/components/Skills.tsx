"use client";

import {
  SiAppwrite,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { memo, ReactNode, useEffect, useState } from "react";
import { cn } from "@/utils";

// eslint-disable-next-line react/display-name
const Tag = memo(({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className='mr-3 flex w-max items-center gap-2 rounded-full border px-5 py-2 text-[15px] shadow-sm bg-sidebar dark:text-neutral-50'>
    {icon}
    <span>{title}</span>
  </div>
));

export const Skills = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    const shuffledArray = [...skillsArray, ...skillsArray].sort(
      () => Math.random() - 0.5
    );
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <div
        key={index}
        className={cn(
          `flex w-fit animate-[looping-tag_70s_linear_infinite]`,
          index === 1 && "animate-reverse"
        )}
      >
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </div>
    );
  });

  return (
    <div className='space-y-8 w-full'>
      <div className='flex w-full mx-auto'>
        <div className='relative flex  max-auto w-[98vw] flex-col justify-center gap-y-4 overflow-hidden py-2'>
          {sliders}
          <div className='pointer-events-none absolute inset-0 flex bg-gradient-to-r from-background via-transparent to-background' />
        </div>
      </div>
    </div>
  );
};

export const STACKS = {
  JavaScript: <SiJavascript size={25} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={25} className='text-blue-400' />,
  "Next Js": <SiNextdotjs size={25} />,
  "React Js": <SiReact size={25} className='text-sky-500' />,
  "Tailwind Css": <SiTailwindcss size={25} className='text-cyan-300' />,
  MongoDB: <SiMongodb size={25} className='text-green-500' />,
  MySQL: <SiMysql size={25} className='text-blue-500' />,
  AppWrite: <SiAppwrite size={25} className='text-blue-500' />,
  Supabase: <SiSupabase size={25} className='text-blue-500' />,
  Postgresql: <SiPostgresql size={25} className='text-blue-500' />,
  GraphQL: <SiGraphql size={25} className='text-pink-600' />,
  MUI: <SiMui size={25} className='text-sky-400' />,
  Vite: <SiVite size={25} className='text-purple-500' />,
  Prisma: <SiPrisma size={25} className='text-emerald-500' />,
  Firebase: <SiFirebase size={25} className='text-yellow-500' />,
  "Nuxt Js": <SiNuxtdotjs size={25} className='text-green-400' />,
  "Node Js": <SiNodedotjs size={25} className='text-green-600' />,
  Gatsby: <SiGatsby size={25} className='text-purple-600' />,
  Redux: <SiRedux size={25} className='text-purple-500' />,
  Webpack: <SiWebpack size={25} className='text-blue-500' />,
  "Styled Components": (
    <SiStyledcomponents size={25} className='text-pink-500' />
  ),
  PWA: <SiPwa size={25} className='text-amber-600' />,
  Jest: <SiJest size={25} className='text-red-600' />,
  CSS: <SiCss3 size={25} className='text-blue-300' />,
  Socket: <SiSocketdotio size={25} />,
  Express: <SiExpress size={25} />,
} as const;

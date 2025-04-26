"use client";

import { WordListSwap } from "@/components/cuicui/texts";
import { FileUser } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import IconCloud from "./icon-cloud";

export default function AboutHero() {
  const slugs = [
    "typescript",
    "javascript",
    "mysql",
    "python",
    "vue",
    "react",
    "reactnative",
    "postman",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "supabase",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "nextjs",
    "figma",
  ];
  return (
    <div className='flex flex-wrap w-full px-4 sm:px-5 lg:px-10 items-start mb-20'>
      <div className='flex flex-col w-full lg:w-1/2  mt-7 '>
        <div className='flex flex-col items-start '>
          <h2>Yushaku</h2>

          <LayoutGroup>
            <motion.p className='flex whitespace-pre text-4xl' layout={true}>
              <WordListSwap
                texts={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Web App Developer",
                  "Next Js Developer",
                  "Blockchain developer",
                  "🕶️🕶️🕶️",
                ]}
                mainClassName='text-white px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.p>
          </LayoutGroup>
        </div>

        <div className='flex flex-col items-start sm:pl-[10px]'>
          <p className='mt-5 text-white sm:text-lg'>
            I am a Full-Stack Developer specializing in both
            <span className='text-primaryColor font-semibold px-1'>web</span>
            and
            <span className='text-primaryColor font-semibold px-1'>mobile</span>
            applications.
          </p>
          <p className='mt-1 text-white sm:text-lg leading-relaxed'>
            I handle both the
            <span className='text-primaryColor font-semibold px-1'>
              frontend
            </span>
            (<span className='italic'>the interface you see on the screen</span>
            ) and the
            <span className='text-primaryColor font-semibold px-1'>
              backend
            </span>
            (
            <span className='italic'>
              the behind-the-scenes logic and infrastructure
            </span>
            ).
          </p>
          <p className='mt-1 text-white sm:text-lg leading-relaxed'>
            I create clean, responsive, engaging, and accessible digital
            experiences. My expertise lies in crafting
            <span className='text-primaryColor font-semibold px-1'>
              complex
            </span>
            ,<span className='text-primaryColor font-semibold px-1'>fast</span>,
            and
            <span className='text-primaryColor font-semibold px-1'>
              functional
            </span>{" "}
            digital products that deliver
            <span className='text-primaryColor font-semibold px-1'>
              exceptional user experiences
            </span>
            .
          </p>
          <Link href={`/resume`}>
            <button className='bg-emerald-700 hover:bg-emerald-800 mt-7 items-center flex text-white p-2 rounded-full px-5 group'>
              <FileUser className='h-5 w-5 me-2 group-hover:animate-shake' />
              My Resume
            </button>
          </Link>
        </div>
      </div>

      <div className='hidden sm:flex relative flex-col items-center justify-start w-full  lg:w-1/2 '>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

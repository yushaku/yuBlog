import { cn } from "@/utils";
import React from "react";
import { FcBusinessman } from "react-icons/fc";
import Image from "next/image";

export const experiences = [
  {
    role: "Full Stack Developer",
    location: "Ha Noi, Vietnam - Full Time",
    startDate: "2022-04-01",
    endDate: "Present",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGasUOkyQrbpw/company-logo_200_200/company-logo_200_200/0/1715857839805/zinza_technology_logo?e=1752105600&v=beta&t=KDnD1nQitKjLvF4uYjTa6RldY4C7Ugk23uqGjTv8k58",
    describe: [
      "I am currently working at Zinza, where I collaborate with a talented team of developers, and product managers to create human-centered solutions that meet the unique needs of our clients. I approach every project with a dedication to delivering high-quality work that exceeds expectations. I am excited to continue pushing the boundaries of what's possible in software engineering, and to help shape the future of digital experiences for users around the world.",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Nestjs, React, Nextjs, WordPress, Vercel, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
];

export const CareerPath = () => {
  return (
    <section className='py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0'>
      <div className='w-full mx-auto'>
        <div className='w-full justify-between sm:items-center flex flex-col sm:flex-row border-b border-dashed pb-4'>
          <div className='flex-col justify-start flex'>
            <h2 className='text-foreground text-3xl flex items-center font-semibold font-manrope leading-normal lg:text-start sm:text-center'>
              <FcBusinessman className='mr-1' /> Career Path
            </h2>
            <div className='max-w-5xl text-sm ml-1 md:flex-row md:items-center'>
              <span>
                My professional journey into the world of coding has always been
                a reflection of my belief that{" "}
                <strong className='text-primary'>
                  experience ≠ the number of years you've worked in a job
                </strong>
                .{" "}
              </span>
              <span>
                It's about the growth, learning, and contributions that shape a
                developer.
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center lg:flex-row w-full mx-auto mt-10'>
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className={cn(
                  `w-full flex-col lg:flex-row rounded-xl flex sm:items-center h-fit gap-4 sm:gap-10 p-3 sm:p-5 bg-sidebar`,
                  index === 0 ? "border border-dashed" : ""
                )}
              >
                <div className='flex flex-col lg:flex-row justify-between'>
                  <div className='flex flex-col gap-1 w-full'>
                    <h4 className='font-medium flex items-center justify-between'>
                      <span className='text-primary'>{experience.role}</span>
                      <span className='text-sm'>
                        {new Date(experience.startDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                          }
                        )}{" "}
                        -{" "}
                        {experience.endDate === "Present"
                          ? "Present"
                          : new Date(experience.endDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                              }
                            )}
                      </span>
                    </h4>
                    <p className='text-xs'>{experience.location}</p>

                    <ul className='list-disc text-sm w-full pl-4 mt-4'>
                      {experience.describe.map((describe, index) => {
                        return (
                          <li key={index} className='text-foreground'>
                            {describe}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          <Image
            src='/coder.png'
            alt='le van son'
            className='mt-2 rounded-full hidden lg:block'
            width={400}
            height={400}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

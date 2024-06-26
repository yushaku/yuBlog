import { ListItem } from "./ListItem";
import { TopicTitle } from "./TopicTitle";
import { topics } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconArrowRight } from "./Icons";
import { SocialMedia } from "./SocialMedia";
import { Result } from "@/types";

export const IntroBlock = () => {
  return (
    <Warper className="relative animate-fade-down animate-once animate-delay-200">
      <Image
        src="/map-doted.png"
        alt="dot_map_world"
        loading="lazy"
        placeholder="empty"
        object-fit="cover"
        sizes="326px"
        fill
      />
      <h3 className="text-primaryColor dark:text-secondColor text-xl font-semibold">
        Dev &quot;phèn&quot;
      </h3>
      <p className="text-grayColor dark:text-strokeColor text-sm">
        From &quot;Phèn&quot; developer Become better Full-stack developer.
        Following our tips, tricks and real life experiences.
      </p>

      <SocialMedia className="z-10" />
    </Warper>
  );
};

export const Warper = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const classes = `mx-auto h-fit mb-10 py-6 flex border border-strokeColor dark:border-[#202533] max-w-[350px] flex-col items-center justify-center gap-y-4 rounded-lg px-6 text-center shadow-lg dark:shadow-card ${
    className ?? ""
  }`;
  return <article className={classes}>{children}</article>;
};

export const CategoryList = () => {
  return (
    <Warper className="w-[350px] animate-fade-down animate-once animate-delay-600">
      <TopicTitle title="Explore Topics" />

      <ul className="divide-grayColor/40 w-full divide-y">
        {topics.map((el, index) => {
          return (
            <li key={index} className="group">
              <Link
                href={`/category/${el.href}`}
                className="flex items-center py-3 "
              >
                <IconArrowRight className="animationShow mr-2 rotate-180 w-4 h-4 stroke-primaryColor dark:stroke-teal-200 group-hover:mr-4" />
                <span className="group-hover:text-primaryColor dark:group-hover:text-teal-200 animationShow group-hover:font-bold">
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

export const RelatePosts = ({ blogList }: { blogList: Result[] }) => {
  return (
    <Warper className="animate-fade-down animate-once animate-delay-400">
      <TopicTitle title="Popular Posts" />

      <ul className="divide-y divide-grayColor">
        {blogList.map((el, index) => {
          if (index > 4) return;
          return (
            <li key={el.id}>
              <ListItem
                slug={el.properties.slug.id}
                imageUrl={el.cover?.external?.url ?? el.cover?.file.url}
                name={el.properties.Name.title[0].plain_text}
                date={el.created_time}
                category={el.properties.category.multi_select}
              />
            </li>
          );
        })}
      </ul>
    </Warper>
  );
};

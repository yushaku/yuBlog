import { multi_select } from "@/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
  name: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: multi_select[];
};
export const ListItem = ({
  name,
  imageUrl,
  date,
  slug,
  category,
  ...props
}: Props) => {
  return (
    <Link href={`/${slug}`}>
      <article {...props} className="group flex items-center gap-4 py-4">
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image
            src={imageUrl}
            alt={name}
            loading="lazy"
            placeholder="empty"
            object-fit="cover"
            sizes="50px"
            fill
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-textColor dark:text-strokeColor dark:group-hover:text-teal-200 group-hover:text-primaryColor animationShow mb-1 text-base font-semibold">
            {name}
          </h3>
          <p className="flex items-center gap-4">
            <span className="text-primaryColor bg-primaryColor/20 dark:text-teal-200 overflow-hidden rounded-lg text-sm px-3 py-1">
              {category.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </span>
            <span className="text-grayColor whitespace-nowrap text-[12px]">
              {moment(date).format("LL")}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
};

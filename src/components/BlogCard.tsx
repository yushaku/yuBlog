import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogPost = {
  title: string;
  date: string;
  description?: string;
  thumbnail?: string;
  slug: string;
};

export const ListItem = ({ title, date, description, slug }: BlogPost) => {
  return (
    <article className='group w-full max-w-2xl hover:bg-card/50 rounded-lg p-6 transition-colors'>
      <Link href={slug} className='block'>
        <p className='text-grayColor text-sm mb-2'>
          {moment(date).format("MMMM D, YYYY")}
        </p>

        <h3 className='text-foreground group-hover:text-primary text-2xl font-bold mb-3'>
          {title}
        </h3>

        <p className='text-grayColor text-base leading-relaxed'>
          {description}
        </p>
      </Link>
    </article>
  );
};

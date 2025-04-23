import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
  name: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  summary: string;
};

export const Card = ({ name, date, imageUrl, slug, summary }: Props) => {
  return (
    <article className='group w-[300px] rounded-lg border border-gray-700'>
      <Link href={`/${slug}`}>
        <div className='relative h-[200px] w-full overflow-hidden rounded-t-lg'>
          <Image
            src={imageUrl ?? "/workspace.jpg"}
            alt={name}
            placeholder='empty'
            object-fit='cover'
            sizes='384px'
            fill
          />
        </div>

        <div className='h-[224px] p-6'>
          <p className='text-grayColor text-sm'>
            <span>yushaku</span>
            <span className='ml-4'>{moment(date).format("LL")}</span>
          </p>
          <h3 className='text-foreground group-hover:text-primary my-2 text-xl font-semibold'>
            {name}
          </h3>
          <p className='text-grayColor line-clamp-3 text-sm'>{summary}</p>
        </div>
      </Link>
    </article>
  );
};

export const BigCard = ({ name, date, imageUrl, slug, summary }: Props) => {
  return (
    <article className='group relative mb-6 w-full overflow-hidden rounded-lg'>
      <Link href={`/${slug}`}>
        <div className=' h-[424px] w-full'>
          <Image
            src={imageUrl ?? "/workspace.jpg"}
            alt={name}
            loading='lazy'
            object-fit='cover'
            placeholder='empty'
            sizes='830px'
            fill
          />
        </div>

        <div className='absolute w-11/12 bottom-8 right-1/2 translate-x-1/2 rounded-md bg-gray-500/25 px-2 py-4 backdrop-blur-md'>
          <p className='text-foreground text-sm'>
            <span>yushaku</span>
            <span className='ml-4'>{moment(date).format("LL")}</span>
          </p>
          <h3 className='group-hover:text-primary my-2 text-xl font-semibold text-white'>
            {name}
          </h3>
          <p className='text-foreground line-clamp-4 text-sm'>{summary}</p>
        </div>
      </Link>
    </article>
  );
};

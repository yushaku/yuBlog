import { ArrowRight } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const CardItem = ({
  title,
  tags,
  postSlug,
  createdAt,
  tlir,
}: {
  title: string;
  tags?: string[];
  postSlug: string;
  createdAt?: string;
  tlir?: string;
}) => {
  const formatCreatedAt = moment(createdAt).format("LL");

  return (
    <article
      id='card'
      className='group relative p-6 rounded-2xl flex flex-col h-[340px] min-w-[280px] max-w-[300px]
      bg-sidebar hover:bg-card hover:-translate-y-4 hover:-rotate-3 not-first:ml-[-130px] duration-200 shadow-card
      hover:peer-hover:translate-x-[130px] peer'
    >
      <Link href={`/article/${postSlug}`}>
        <>
          <div className='relative flex items-center gap-4'>
            <span id='author-avatar'>
              <Image
                src={"/logo.png"}
                alt='logo'
                width={30}
                height={30}
                loading='lazy'
                placeholder='empty'
                className='rounded-full'
              />
            </span>
            <p className='text-[#7a7a8c] text-sm'>{formatCreatedAt}</p>
          </div>

          <header id='card-header ' className='mb-auto mt-4'>
            <h2
              id='card-header_title'
              className='text-xl font-semibold text-primary min-h-[60px] line-clamp-3
              group-hover:bg-gradient-to-l from-primary to-[#09ffe6] group-hover:bg-clip-text group-hover:text-transparent'
            >
              {title}
            </h2>
            <p className='text-sm text-grayColor mt-2 line-clamp-3 min-h-[60px]'>
              {tlir}
            </p>
          </header>
        </>
      </Link>

      <div id='tags' className='flex gap-2 mt-4 mb-0 pt-2 pb-4'>
        {tags?.map((tag, index) => (
          <TagItem title={tag} key={index} />
        ))}
      </div>

      <div className='flex items-center gap-2'>
        <p>Read more</p>
        <ArrowRight className='stroke-foreground animationShow size-5 group-hover:translate-x-2' />
      </div>
    </article>
  );
};

const TagItem = ({ title }: { title: string }) => (
  <Link
    href={`tags/${title}`}
    className='text-sm text-white px-3 py-1 bg-[#2d3748] rounded-xl
    hover:bg-gradient-to-r from-[#39caee] to-primary hover:bg-clip-text hover:text-transparent'
  >
    {title}
  </Link>
);

import { Post } from "contentlayer/generated";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "../../../components/Icons";

export const ReadMoreSection = async ({ blogPost }: { blogPost: Post[] }) => {
  return (
    <div className='min-h-[25vh] flex flex-col md:flex-row' id='related_posts'>
      <section className='py-10 flex items-center justify-center flex-col'>
        <h2 className='text-2xl text-foreground'>Related Posts</h2>
        <p className='text-lg text-grayColor'>Find more posts like this one.</p>
        <div className='relative w-[260px] h-[260px]'>
          <Image
            src={"/developer.png"}
            alt='logo'
            object-fit='cover'
            loading='lazy'
            placeholder='empty'
            sizes='260px'
            fill
          />
        </div>
      </section>

      <section className='flex py-10 overflow-x-scroll pl-8'>
        {blogPost?.map((el) => (
          <StackItem
            key={el._id}
            title={el.title}
            tags={el.tags}
            postSlug={el.slug}
            createdAt={el.date}
            tlir={el.description}
          />
        ))}
      </section>
    </div>
  );
};

const StackItem = ({
  title,
  tags,
  postSlug,
  createdAt,
  tlir,
}: {
  title: string;
  tags?: string[];
  postSlug: string;
  createdAt: string;
  tlir?: string;
}) => {
  const formatCreatedAt = moment(createdAt).format("LL");

  return (
    <article
      id='card'
      className='group relative p-6 rounded-2xl flex flex-col h-[340px] min-w-[280px] max-w-[300px]
      bg-white hover:bg-foreground 
      hover:-translate-y-4 hover:-rotate-3 not-first:ml-[-130px] 
      shadow-light_stack duration-200'
    >
      <Link href={`/${postSlug}`}>
        <>
          <div className='relative flex items-center gap-4'>
            <span id='author-avatar'>
              <Image
                src={"/anya.jpg"}
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
              className='text-xl text-primary min-h-[60px] line-clamp-3'
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
        {tags?.map((tag, index) => <TagItem title={tag} key={index} />)}
      </div>

      <div className='flex items-center gap-2'>
        <p>Read more</p>
        <IconArrowRight
          className='stroke-foreground animationShow
          rotate-180 w-3 h-3 group-hover:translate-x-2'
        />
      </div>
    </article>
  );
};

const TagItem = ({ title }: { title: string }) => (
  <Link
    href={`tags/${title}`}
    className='text-sm text-white px-3 py-1 bg-[#2d3748] hover:bg-[#1a202c] rounded-xl'
  >
    {title}
  </Link>
);

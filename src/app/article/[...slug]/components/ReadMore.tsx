import { Post } from "contentlayer/generated";
import Image from "next/image";
import { CardItem } from "./CardItem";

export const ReadMore = ({ blogPost }: { blogPost: Post[] }) => {
  return (
    <section className='min-h-[25vh] flex flex-col md:flex-row'>
      <div className='py-10 flex items-center justify-center flex-col'>
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
      </div>

      <section className='flex py-10 overflow-x-scroll pl-8'>
        {blogPost?.map((el) => (
          <CardItem
            key={el._id}
            title={el.title}
            tags={el.tags}
            postSlug={el.slug}
            createdAt={el.date}
            tlir={el.description}
          />
        ))}
      </section>
    </section>
  );
};

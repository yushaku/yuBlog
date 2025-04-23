import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import { topics } from "@/utils/constants";
import Link from "next/link";

const layout = async (props: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;

  const { children } = props;

  return (
    <div className='max-w-[1100px] mx-auto grid grid-cols-1 gap-x-10 px-6 md:grid-cols-2 md:px-3 lg:grid-cols-3 lg:p-0'>
      <div className='md:col-span-2'>
        <div className='flex items-center gap-4'>
          {topics.map((el, index) => {
            return (
              <Link
                key={index}
                href={`/category/${el.href}`}
                className={`whitespace-nowrap px-4 py-2 rounded-lg ${
                  params.slug === el.href
                    ? "bg-foreground text-white shadow-lg"
                    : "hover:text-primary shadow-md"
                }`}
              >
                {el.title}
              </Link>
            );
          })}
        </div>

        <TopicTitle title='Latest Posts' className='my-12' />

        <div>{children}</div>
      </div>

      <div className='md:hidden'>
        <TopicTitle title='Relate Topics' className='my-12 text-2xl' />
      </div>

      <div className='col-span-1 flex flex-wrap md:col-span-2 lg:col-span-1'>
        <IntroBlock />
        <CategoryList />
      </div>
    </div>
  );
};

export default layout;

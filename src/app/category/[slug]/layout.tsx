import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { TopicTitle } from "@/components/TopicTitle";
import { topics } from "@/utils/constants";
import Link from "next/link";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <section className="max-w-7xl mx-auto gap-x-10 px-6 md:px-3 lg:p-0">
      <article className="">
        <ul className="flex items-center gap-4 mb-8">
          {topics.map((el, index) => {
            return (
              <Link
                key={index}
                href={`/category/${el.href}`}
                className={`whitespace-nowrap px-4 py-2 rounded-lg ${
                  params.slug === el.href
                    ? "bg-primaryColor dark:shadow-darkShadow text-white shadow-lg"
                    : "hover:text-primaryColor dark:hover:text-secondColor shadow-md"
                }`}
              >
                {el.title}
              </Link>
            );
          })}
        </ul>

        {/* <TopicTitle title="Latest Posts" className="my-12" /> */}

        <div>{children}</div>
      </article>

      {/* <div className="md:hidden"> */}
      {/*   <TopicTitle title="Relate Topics" className="my-12 text-2xl" /> */}
      {/* </div> */}

      {/* <article className="col-span-1 md:col-span-2 lg:col-span-1"> */}
      {/*   <IntroBlock /> */}
      {/*   <CategoryList /> */}
      {/* </article> */}
    </section>
  );
};

export default layout;

import {
  blockEnum,
  indexGenerator,
  rnrSlugify,
} from "@9gustin/react-notion-render";
import { ContentWarper } from "@/components/ContentWarper";
import BlogOutline from "@/components/Outline";
import { fetchPageBlocks, fetchPageBySlug, fetchPages } from "@/utils/notion";
import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";

export type TableOfContent = {
  id: string;
  href: string;
  title: string;
  type: blockEnum;
};

const ReadMoreSection = dynamic(() => import("@/components/Readmore"));
const BlogContent = dynamic(() => import("@/components/BlogContent"));

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  const recommend = await fetchPages(10);
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const tablecontent: TableOfContent[] = indexGenerator(blocks).map(
    ({ id, plainText, type }) => ({
      id,
      type,
      title: plainText,
      href: rnrSlugify(plainText),
    })
  );

  return (
    <ContentWarper title={post.properties.Name.title[0].plain_text}>
      <section className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <article className="col-span-2 overflow-y-scroll">
          <div className="grid gap-4 mb-4">
            <h3 className="animate_fade_dowj green_text_gradient text-[36px] font-bold">
              {post.properties.Name.title[0].plain_text}
            </h3>
            <p className="text-grayColor flex items-center gap-3">
              <span className="animate_fade_down animate-delay-200">yushaku</span>
              <span className="animate_fade_down animate-delay-300 bg-primaryColor dark:bg-secondColor inline-block h-2 w-2 rounded-full" />
              <span className="animate_fade_down animate-delay-400">{moment(post.created_time).format("LL")}</span>
            </p>
            <div className="relative animate_fade_down animate-delay-500 h-[410px] w-full">
              <Image
                src={
                  post.cover?.external?.url ??
                  post.cover?.file.url ??
                  "/workspace.jpg"
                }
                alt="dsfsdf"
                loading="lazy"
                placeholder="empty"
                object-fit="cover"
                sizes="700px"
                fill
              />
            </div>
          </div>

          <article id="show_outline_in_moblie" className="md:hidden">
            <BlogOutline outline={tablecontent} />
          </article>

          <article id="blog_content">
            <BlogContent blocks={blocks} />
          </article>
        </article>

        <article className="hidden md:block col-span-1">
          <BlogOutline outline={tablecontent} />
        </article>

        <div className="col-span-3">
          <ReadMoreSection blogPost={recommend} />
        </div>
      </section>
    </ContentWarper>
  );
}

import { CategoryList, IntroBlock } from "@/components/IntroBlock";
import { Pagination } from "@/components/Pagination";
import { TopicTitle } from "@/components/TopicTitle";
import { BigCard, Card } from "@/components/card";
import { fetchPages } from "@/utils/notion";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;
  const blogList = await fetchPages(limit);
  const firstResult = blogList.results.shift();

  return (
    <section className="max-w-7xl mx-auto">
      <article className="flex lg:gap-10">
        {firstResult && (
          <BigCard
            summary={firstResult.properties?.tldr?.rich_text[0]?.plain_text}
            author={firstResult.created_by.id}
            imageUrl={
              firstResult.cover?.external?.url ?? firstResult.cover?.file.url
            }
            slug={firstResult.properties.slug.rich_text[0].plain_text}
            name={firstResult.properties.Name.title[0].plain_text}
            date={firstResult.created_time}
          />
        )}

        <div className="flex-col justify-between hidden lg:flex">
          <IntroBlock />
          <CategoryList />
        </div>
      </article>

      <TopicTitle title="Latest Posts" className="my-12" />

      <ul className="w-full flex flex-wrap justify-center gap-6">
        {blogList.results.map((el) => {
          return (
            <li key={el.id}>
              <Card
                summary={el.properties?.tldr?.rich_text[0]?.plain_text}
                author={el.created_by.id}
                imageUrl={el.cover?.external?.url ?? el.cover?.file.url}
                slug={el.properties.slug.rich_text[0].plain_text}
                name={el.properties.Name.title[0].plain_text}
                date={el.created_time}
              />
            </li>
          );
        })}
      </ul>

      <Pagination hasMore={blogList.has_more} limit={limit + 10} />
    </section>
  );
}

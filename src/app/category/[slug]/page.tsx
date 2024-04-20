import { Card } from "@/components/card";
import { fetchPagesByCategory } from "@/utils/notion";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const blogList = await fetchPagesByCategory(params.slug);

  return (
    <ul className="flex flex-wrap gap-6">
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
  );
}

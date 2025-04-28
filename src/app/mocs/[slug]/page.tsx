import { RoadMap } from "@/components/RoadMap";
import { mapOfContentData } from "@/utils/mocs";
import { notFound } from "next/navigation";

export default async function MOCPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const moc = mapOfContentData[slug as keyof typeof mapOfContentData];

  if (!moc) {
    notFound();
  }

  return (
    <div className='container mx-auto'>
      <RoadMap initialNodes={moc.nodes} initialEdges={moc.edges} />
    </div>
  );
}

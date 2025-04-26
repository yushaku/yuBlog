import { RoadMap } from "@/components/RoadMap";
import { mapOfContentData } from "@/utils/mocs";
import { notFound } from "next/navigation";

export default function MOCPage({ params }: { params: { slug: string } }) {
  const moc = mapOfContentData[params.slug as keyof typeof mapOfContentData];

  if (!moc) {
    notFound();
  }

  return (
    <div className='container mx-auto'>
      <RoadMap initialNodes={moc.nodes} initialEdges={moc.edges} />
    </div>
  );
}

import { notFound } from "next/navigation";
import { RoadMap } from "./components/RoadMap";
import fs from "fs";
import path from "path";
import { topics } from "@/utils/constants";

async function loadMOCData(slug: string) {
  try {
    const dataDir = path.join(process.cwd(), "src", "data", slug);
    const nodesPath = path.join(dataDir, "nodes.json");
    const edgesPath = path.join(dataDir, "edges.json");

    if (!fs.existsSync(nodesPath) || !fs.existsSync(edgesPath)) {
      return null;
    }

    const nodes = JSON.parse(fs.readFileSync(nodesPath, "utf-8"));
    const edges = JSON.parse(fs.readFileSync(edgesPath, "utf-8"));

    return { nodes, edges };
  } catch (error) {
    console.error("Error loading MOC data:", error);
    return null;
  }
}

export default async function MOCPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = topics.find((t) => t.slug === slug);
  if (!topic) {
    notFound();
  }

  const moc = await loadMOCData(slug);
  if (!moc) {
    notFound();
  }

  return (
    <div className='container mx-auto hover:border rounded-xl'>
      <RoadMap initialNodes={moc.nodes} initialEdges={moc.edges} />
    </div>
  );
}

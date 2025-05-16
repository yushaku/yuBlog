import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, nodes, edges } = await request.json();

    // Create src/data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // Create MOC directory if it doesn't exist
    const mocDir = path.join(dataDir, name);
    if (!fs.existsSync(mocDir)) {
      fs.mkdirSync(mocDir);
    }

    // Save nodes and edges to separate JSON files
    fs.writeFileSync(
      path.join(mocDir, "nodes.json"),
      JSON.stringify(nodes, null, 2)
    );

    fs.writeFileSync(
      path.join(mocDir, "edges.json"),
      JSON.stringify(edges, null, 2)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving MOC data:", error);
    return NextResponse.json(
      { error: "Failed to save MOC data" },
      { status: 500 }
    );
  }
}

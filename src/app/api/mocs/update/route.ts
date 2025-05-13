import { NextResponse } from "next/server";
import { Node, Edge } from "@xyflow/react";
import { mapOfContentData } from "@/utils/mocs";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { mocKey, nodes, edges } = await request.json();

    if (!mocKey || !nodes || !edges) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate the MOC key
    if (!(mocKey in mapOfContentData)) {
      return NextResponse.json({ error: "Invalid MOC key" }, { status: 400 });
    }

    // Update the MOC data
    const updatedMoc = {
      ...mapOfContentData[mocKey as keyof typeof mapOfContentData],
      nodes,
      edges,
    };

    // Get the file path for the MOC
    const filePath = path.join(process.cwd(), "src/utils/mocs", `${mocKey}.ts`);

    // Read the current file content
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Create the new content
    const newContent = `import { MOC } from ".";

export const ${mocKey}: MOC = ${JSON.stringify(updatedMoc, null, 2)};
`;

    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating MOC:", error);
    return NextResponse.json(
      { error: "Failed to update MOC" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const type = searchParams.get("type");

    if (!name || !type) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      name,
      `${type}.json`
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error loading MOC data:", error);
    return NextResponse.json(
      { error: "Failed to load MOC data" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1); // Ensure page is at least 1
    const limit = Math.min(
      Math.max(parseInt(searchParams.get("limit") || "20", 10), 1),
      100
    ); // Limit between 1 and 100

    const skip = (page - 1) * limit;

    const videos = await db.video.findMany({
      skip,
      take: limit,
    });

    const totalCount = await db.video.count();
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        data: videos,
        meta: {
          page,
          limit,
          totalPages,
          totalCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: `Error fetching videos: ${error.message}` },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req, { params }) {
  const { type } = params;

  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const limit = Math.max(parseInt(searchParams.get("limit") || "20", 10), 1);

    const skip = (page - 1) * limit;

    // Fetch filtered gallery items
    const gallery = await db.gallery.findMany({
      where: {
        mediaType: type,
      },
      skip,
      take: limit,
    });

    // Get the total count for the filtered data
    const totalCount = await db.gallery.count({
      where: {
        mediaType: type,
      },
    });

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        data: gallery,
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
    console.error(`Error fetching gallery of type '${type}':`, error);
    return NextResponse.json(
      { error: "Error fetching gallery data." },
      { status: 500 }
    );
  }
}

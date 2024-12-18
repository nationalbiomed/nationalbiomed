import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);

    const skip = (page - 1) * limit;

    const gallery = await db.gallery.findMany({
      skip,
      take: limit,
    });

    const totalCount = await db.gallery.count();
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
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Error getting Gallery" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET() {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        position: "asc",
      },
    });
    return NextResponse.json(banners, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting banners" },
      { status: 500 }
    );
  }
}

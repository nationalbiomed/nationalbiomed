import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    // Fetch all categories without pagination
    const pcategorys = await db.category.findMany();

    return NextResponse.json(
      {
        pcategorys,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching pcategorys:", error);
    return NextResponse.json(
      { error: "Error getting pcategorys" },
      { status: 500 }
    );
  }
}

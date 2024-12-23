import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    // Fetch all brands without pagination
    const brands = await db.brand.findMany();

    return NextResponse.json(
      {
        brands,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      { error: "Error getting brands" },
      { status: 500 }
    );
  }
}

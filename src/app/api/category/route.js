import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const category = await db.category.findMany({});
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Product Category" },
      { status: 500 }
    );
  }
}

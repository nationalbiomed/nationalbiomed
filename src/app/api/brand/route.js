import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const brand = await db.brand.findMany({});
    return NextResponse.json(brand, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Product Brand" },
      { status: 500 }
    );
  }
}

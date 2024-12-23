import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const customer = await db.customer.findMany({
      orderBy: {
        position: "asc",
      },
    });

    return NextResponse.json({ data: customer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return NextResponse.json(
      { error: "Error getting customer" },
      { status: 500 }
    );
  }
}

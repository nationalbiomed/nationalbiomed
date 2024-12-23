import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET() {
  try {
    const customer = await db.customer.findMany({
      orderBy: {
        position: "asc",
      },
    });
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Customer" },
      { status: 500 }
    );
  }
}

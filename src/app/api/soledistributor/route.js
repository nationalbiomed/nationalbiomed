import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET() {
  try {
    const distributor = await db.distributor.findMany({
      orderBy: {
        position: "asc",
      },
    });
    return NextResponse.json(distributor, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Sole Distributor" },
      { status: 500 }
    );
  }
}

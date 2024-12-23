import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { image, position } = body;

    const distributor = await db.distributor.create({
      data: {
        image,
        position,
      },
    });

    return NextResponse.json(distributor, { status: 201 });
  } catch (error) {
    console.error("Error creating Sole Distributor:", error);
    return NextResponse.json(
      { error: "Error creating Sole Distributor" },
      { status: 500 }
    );
  }
}

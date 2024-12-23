import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, image, position } = body;

    const distributor = await db.distributor.update({
      where: { id },
      data: {
        image,
        position,
      },
    });

    return NextResponse.json(distributor, { status: 200 });
  } catch (error) {
    console.error("Error updating Sole Distributor:", error);
    return NextResponse.json(
      { error: "Error updating Sole Distributor" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, images, name, slug } = body;

    const brand = await db.brand.update({
      where: { id },
      data: {
        images,
        name,
        slug,
      },
    });

    return NextResponse.json(brand, { status: 200 });
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json(
      { error: "Error updating brand" },
      { status: 500 }
    );
  }
}

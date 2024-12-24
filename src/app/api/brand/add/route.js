import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { images, name, slug } = body;

    const brand = await db.brand.create({
      data: {
        name,
        slug,
        images,
      },
    });

    return NextResponse.json(brand, { status: 201 });
  } catch (error) {
    console.error("Error creating brand:", error);
    return NextResponse.json(
      { error: "Error creating brand" },
      { status: 500 }
    );
  }
}

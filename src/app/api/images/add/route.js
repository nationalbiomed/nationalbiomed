import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { image } = body;

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }
    const newImage = await db.images.create({
      data: {
        image,
      },
    });

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    console.error("Error creating image:", error);
    return NextResponse.json(
      { error: "Error creating image" },
      { status: 500 }
    );
  }
}

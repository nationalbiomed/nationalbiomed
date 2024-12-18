import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, image } = body;

    // Validate request body
    if (!id || !image) {
      return NextResponse.json(
        { error: "Both 'id' and 'image' are required" },
        { status: 400 }
      );
    }
    const updatedImage = await db.images.update({
      where: { id },
      data: {
        image,
      },
    });

    return NextResponse.json(updatedImage, { status: 200 });
  } catch (error) {
    console.error("Error updating Image:", error);
    return NextResponse.json(
      { error: "Error updating Image" },
      { status: 500 }
    );
  }
}

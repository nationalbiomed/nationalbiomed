import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, image, videoLink, mediaType } = body;

    const gallery = await db.gallery.update({
      where: { id },
      data: {
        image,
        videoLink,
        mediaType,
      },
    });

    return NextResponse.json(gallery, { status: 200 });
  } catch (error) {
    console.error("Error updating Gallery:", error);
    return NextResponse.json(
      { error: "Error updating Gallery" },
      { status: 500 }
    );
  }
}

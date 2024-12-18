import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { image, videoLink, mediaType } = body;

    const gallery = await db.gallery.create({
      data: {
        image,
        mediaType,
        videoLink,
      },
    });

    return NextResponse.json(gallery, { status: 201 });
  } catch (error) {
    console.error("Error creating Gallery:", error);
    return NextResponse.json(
      { error: "Error creating Gallery" },
      { status: 500 }
    );
  }
}

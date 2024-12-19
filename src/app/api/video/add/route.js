import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { videoLink } = body; // Use correct field name

    if (!videoLink) {
      return NextResponse.json(
        { error: "videoLink is required" },
        { status: 400 }
      );
    }

    const newVideo = await db.video.create({
      data: {
        videoLink, // Use correct field name
      },
    });

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error("Error creating video:", error);
    return NextResponse.json(
      { error: `Error creating video: ${error.message}` }, // Include error message
      { status: 500 }
    );
  }
}

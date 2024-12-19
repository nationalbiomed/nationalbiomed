import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, videoLink } = body; // Use correct field name

    // Validate request body
    if (!id || !videoLink) {
      return NextResponse.json(
        { error: "Both 'id' and 'videoLink' are required" },
        { status: 400 }
      );
    }

    // Ensure `id` is a number
    if (typeof id !== "number") {
      return NextResponse.json(
        { error: "'id' must be a number" },
        { status: 400 }
      );
    }

    const updatedVideo = await db.video.update({
      where: { id },
      data: {
        videoLink, // Use correct field name
      },
    });

    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (error) {
    console.error("Error updating video:", error);
    return NextResponse.json(
      { error: `Error updating video: ${error.message}` }, // Include error message
      { status: 500 }
    );
  }
}

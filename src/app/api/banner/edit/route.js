import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, image, position, title, description, text, link } = body;

    const banner = await db.banner.update({
      where: { id },
      data: {
        image,
        title,
        position,
        description,
        text,
        link,
      },
    });

    return NextResponse.json(banner, { status: 200 });
  } catch (error) {
    console.error("Error updating banner:", error);
    return NextResponse.json(
      { error: "Error updating banner" },
      { status: 500 }
    );
  }
}

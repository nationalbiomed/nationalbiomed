import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { image, title, description, position, text, link } = body;

    const banner = await db.banner.create({
      data: {
        image,
        title,
        position,
        description,
        text,
        link,
      },
    });

    return NextResponse.json(banner, { status: 201 });
  } catch (error) {
    console.error("Error creating banner:", error);
    return NextResponse.json(
      { error: "Error creating banner" },
      { status: 500 }
    );
  }
}

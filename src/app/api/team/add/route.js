import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, post, teamOrder, slug, image, message, category, email, phone } = body;

    const team = await db.team.create({
      data: {
        name,
        post,
        slug,
        teamOrder,
        image,
        message,
        category,
        email,
        phone,
      },
    });

    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error("Error creating team:", error);

    return NextResponse.json({ error: "Error creating team" }, { status: 500 });
  }
}

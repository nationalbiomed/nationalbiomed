import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, name, post, teamOrder, slug, image, message } = body;

    const team = await db.team.update({
      where: { id },
      data: {
        name,
        post,
        teamOrder,
        slug,
        image,
        message,
      },
    });

    return NextResponse.json(team, { status: 200 });
  } catch (error) {
    console.error("Error updating team:", error);
    return NextResponse.json({ error: "Error updating team" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET() {
  try {
    const teams = await db.team.findMany({
      orderBy: {
        teamOrder: "asc",
      },
    });
    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error getting teams" }, { status: 500 });
  }
}

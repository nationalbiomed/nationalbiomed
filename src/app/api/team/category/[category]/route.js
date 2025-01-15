import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { category } = await params;

    // Fetch teams filtered by category
    const teams = await db.team.findMany({
      where: {
        category: category, // Match the provided category
      },
      orderBy: {
        teamOrder: "asc", // Sort by teamOrder
      },
    });

    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    console.error("Error fetching data for category:", error);
    return NextResponse.json({ error: "Error fetching category data" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    // Fetch unique categories from the Team model
    const categories = await db.team.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
      where: {
        category: {
          not: null,
        },
      },
      orderBy: {
        category: 'asc',
      },
    });

    // Extract category names from the result
    const categoryNames = categories.map(item => item.category);

    return NextResponse.json(categoryNames, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Error fetching categories" }, { status: 500 });
  }
}


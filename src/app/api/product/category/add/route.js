import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, slug } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Name and slug are required" },
        { status: 400 }
      );
    }

    // Create a new pcategory
    const newpcategory = await db.pcategory.create({
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(newpcategory, { status: 201 });
  } catch (error) {
    console.error("Error creating pcategory:", error);
    return NextResponse.json(
      { error: "Error creating pcategory" },
      { status: 500 }
    );
  }
}

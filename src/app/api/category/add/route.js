import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { images, name, slug } = body;

    const category = await db.category.create({
      data: {
        name,
        slug,
        images,
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Error creating category" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, description, excrept, images, pimage, categoryId, brandId } = body;

    // Validate input data
    if (!title || !slug || !categoryId || !brandId || !pimage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new product
    const newProduct = await db.product.create({
      data: {
        title,
        slug,
        description,
        excrept,
        images,
        pimage,
        categoryId,
        brandId,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Error creating product" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const {
      id,
      title,
      slug,
      description,
      excerpt,
      gallery,
      pimage,
      category,
      brand,
    } = body;
    // Validate request body
    if (!id) {
      return NextResponse.json({ error: "'id' is required" }, { status: 400 });
    }

    // Update the product with the provided data
    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        excrept: excerpt,
        images: gallery,
        pimage,
        categoryId: Number(category),
        brandId: Number(brand),
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Error updating product" },
      { status: 500 }
    );
  }
}

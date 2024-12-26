import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req, context) {
  try {
    const { slug } = context.params;

    if (!slug) {
      console.error("Slug is missing");
      return NextResponse.json(
        { error: "Category slug is required" },
        { status: 400 }
      );
    }

    // Find the category by slug
    const category = await db.category.findUnique({
      where: { slug },
    });

    if (!category) {
      console.error(`Category not found for slug: ${slug}`);
      return NextResponse.json(
        { error: `Category not found for slug: ${slug}` },
        { status: 404 }
      );
    }

    // Fetch products for the category
    const products = await db.product.findMany({
      where: { categoryId: category.id },
      include: {
        category: true,
        brand: true,
      },
    });

    if (!products) {
      console.error(`No products found for category: ${slug}`);
      return NextResponse.json([], { status: 200 }); // Return an empty array
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products by category:", error.message);
    return NextResponse.json(
      { error: "Internal server error while fetching products" },
      { status: 500 }
    );
  }
}

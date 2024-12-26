import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    const products = await db.product.findMany({
      include: {
        category: true, // Include the related category
        brand: true,    // Include the related brand
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error getting products" },
      { status: 500 }
    );
  }
}

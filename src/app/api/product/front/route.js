import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    // Fetch the latest 5 products by ordering `id` in descending order
    const products = await db.product.findMany({
      take: 4, // Limit to 5 products
      orderBy: {
        id: "desc", // Order by `id` in descending order
      },
      include: {
        category: true,
        brand: true,
      },
    });

    return NextResponse.json(
      {
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching latest products:", error);
    return NextResponse.json(
      { error: "Error getting latest products" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);

    const skip = (page - 1) * limit;

    const products = await db.product.findMany({
      skip,
      take: limit,
      include: {
        category: true,
        brand: true,
      },
    });

    const totalCount = await db.product.count();
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        data: products,
        meta: {
          page,
          limit,
          totalPages,
          totalCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error getting products" },
      { status: 500 }
    );
  }
}

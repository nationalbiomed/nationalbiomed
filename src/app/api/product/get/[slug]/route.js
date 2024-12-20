import { NextResponse } from "next/server";
import db from "@/lib/db"; // Import your Prisma client

export async function GET(req, { params }) {
  const slug = (await params).slug;

  try {
    const product = await db.product.findFirst({
      where: {
        slug,
      },
      include: {
        category: true, // Include related category data
        brand: true,    // Include related brand data
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Error fetching product" }, { status: 500 });
  }
}

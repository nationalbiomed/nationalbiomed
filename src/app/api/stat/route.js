import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {

    const Products = await db.product.count();
    const Customers = await db.customer.count();
    const TeamMembers = await db.team.count();

    
    return NextResponse.json(
      {
        Products,
        Customers,
        TeamMembers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching statistics:", error);

    
    return NextResponse.json(
      {
        error: "Error fetching statistics",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

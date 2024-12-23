import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {

    const totalProducts = await db.product.count();
    const totalCustomers = await db.customer.count();
    const totalTeamMembers = await db.team.count();

    
    return NextResponse.json(
      {
        totalProducts,
        totalCustomers,
        totalTeamMembers,
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

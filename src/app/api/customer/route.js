import { NextResponse } from "next/server";
<<<<<<< HEAD
=======

>>>>>>> abd99bd85cb3bcb452403d15eae741dc994dbfd9
import db from "@/lib/db";

export async function GET() {
  try {
    const customer = await db.customer.findMany({
      orderBy: {
        position: "asc",
      },
    });
<<<<<<< HEAD

    return NextResponse.json({ data: customer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return NextResponse.json(
      { error: "Error getting customer" },
=======
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Customer" },
>>>>>>> abd99bd85cb3bcb452403d15eae741dc994dbfd9
      { status: 500 }
    );
  }
}

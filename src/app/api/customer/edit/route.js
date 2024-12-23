import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, image, position, title, description } = body;

    const customer = await db.customer.update({
      where: { id },
      data: {
        image,
        title,
        position,
        description,
      },
    });

    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    console.error("Error updating customer:", error);
    return NextResponse.json(
      { error: "Error updating customer" },
      { status: 500 }
    );
  }
}

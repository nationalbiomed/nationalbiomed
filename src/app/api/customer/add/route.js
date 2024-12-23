import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { image, title, description, position } = body;

    const customer = await db.customer.create({
      data: {
        image,
        title,
        position,
        description,
      },
    });

    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { error: "Error creating customer" },
      { status: 500 }
    );
  }
}

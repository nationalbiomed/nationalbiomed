import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedData = await db.gallery.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedData, { status: 200 });
  } catch (error) {
    console.error("Error Deleting Gallery:", error);
    return NextResponse.json(
      { error: "Error Deleting Gallery" },
      { status: 500 }
    );
  }
}

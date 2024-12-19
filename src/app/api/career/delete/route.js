import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedJob = await db.job.delete({
      where: { id: String(id) }, 
    });

    return NextResponse.json(deletedJob, { status: 200 });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: "Error deleting job" },
      { status: 500 }
    );
  }
}

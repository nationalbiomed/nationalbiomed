import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const { slug } =await params;

    if (!slug) {
      return NextResponse.json(
        { error: "'slug' parameter is required" },
        { status: 400 }
      );
    }

    const job = await db.job.findUnique({
      where: { slug },
    });

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    console.error("Error fetching job:", error);
    return NextResponse.json({ error: "Error fetching job" }, { status: 500 });
  }
}

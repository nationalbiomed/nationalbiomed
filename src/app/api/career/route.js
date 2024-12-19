import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const jobs = await db.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}

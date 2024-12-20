import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const jobs = await db.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get the current date
    const currentDate = new Date();

    // Filter jobs that have not passed the `applyBefore` date and map required fields
    const filteredJobs = jobs
      .filter(job => !job.applyBefore || new Date(job.applyBefore) > currentDate)
      .map(job => ({
        id: job.id,
        slug: job.slug,
        title: job.title,
        type: job.type,
        level: job.level,
        applyBefore: job.applyBefore,
      }));

    return NextResponse.json(filteredJobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}

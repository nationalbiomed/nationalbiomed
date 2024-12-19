import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      type,
      level,
      vacancies,
      salary,
      skills,
      responsibilities,
      qualifications,
      experience,
      applyBefore,
    } = body;

    if (!title || !slug || !type) {
      return NextResponse.json(
        { error: "Title, slug, and type are required" },
        { status: 400 }
      );
    }

    const newJob = await db.job.create({
      data: {
        title,
        slug,
        type,
        level,
        vacancies,
        salary,
        skills,
        responsibilities,
        qualifications,
        experience,
        applyBefore,
      },
    });

    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Error creating job" },
      { status: 500 }
    );
  }
}

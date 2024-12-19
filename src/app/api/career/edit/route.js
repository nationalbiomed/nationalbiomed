import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();
    const {
      id,
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

    // Validate request body
    if (!id || !title || !slug || !type) {
      return NextResponse.json(
        { error: "ID, title, slug, and type are required" },
        { status: 400 }
      );
    }

    const updatedJob = await db.job.update({
      where: { id: String(id) }, 
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

    return NextResponse.json(updatedJob, { status: 200 });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: "Error updating job" },
      { status: 500 }
    );
  }
}
